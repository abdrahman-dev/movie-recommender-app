import { useState } from "react";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "./MovieCard";
import "../style/AIRecommendations.css";

const fetchMovieData = async (title: string) => {
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY; 
  const TMDB_SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(title)}`; 
  const res = await fetch(TMDB_SEARCH_URL);
  const data = await res.json();
  return data.results[0]; 
};

function AIRecommendations() {
  const { favorites } = useMovieContext();
  const [recommendedMovies, setRecommendedMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const generateRecommendations = async () => {
  if (favorites.length === 0) return alert("Please add some movies to your favorites first!");

  setLoading(true);
  try {
    const response = await fetch(
      "https://movie-recommender-api-production-7d37.up.railway.app/recommend",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          favorites: favorites.map(m => m.title)
        })
      }
    );

    const data = await response.json();

   
    const rawTitles = data.result; 
    const titlesArray = rawTitles
      .split(/\n|,/)          // نتعامل مع السطر الجديد أو الفواصل
      .map((t: string) => t.trim()) // نشيل المسافات
      .filter((t: string) => t.length > 0); // نتأكد انها مش فاضية

    const moviePromises = titlesArray.map((title: string) => fetchMovieData(title));
    const finalMovies = (await Promise.all(moviePromises)).filter(m => m != null);

    setRecommendedMovies(finalMovies);
  } catch (err) {
    console.error("AI Error:", err);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="ai-container">
      <div className="ai-header">
        <h2> Smart Recommendations</h2>

        <button
          onClick={generateRecommendations}
          disabled={loading}
          className="ai-btn"
        >
          {loading ? "AI is thinking..." : "Suggest Movies For Me"}
        </button>
      </div>

      {loading && <div className="ai-loading">Analysing your taste...</div>}

      {!loading && recommendedMovies.length === 0 && (
        <div className="ai-empty">
          <h3>No Recommendations Yet</h3>
          <p>Click the button above to discover movies based on your favorites 🔥</p>
        </div>
      )}

      <div className="movies-grid">
        {recommendedMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default AIRecommendations;

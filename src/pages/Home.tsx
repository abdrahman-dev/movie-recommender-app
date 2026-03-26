import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import '../style/Home.css';
import { PopularMovies, SearchMovies } from "../services/api"

function Home() {

    interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
}

const [movies, setMovies] = useState<Movie[]>([]);

    const [searchTerm, setSearchTerm] = useState("");
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    

    useEffect(() => {
        fetchPopularMovies();
    }, []);

    const fetchPopularMovies = async () => {
        setLoading(true);
        setError(null);
        try {
            const popularMovies = await PopularMovies();
            setMovies(popularMovies);
        } catch (error) {
            setError("Failed to fetch popular movies.");
            console.error("Error fetching popular movies:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (searchTerm.trim() === "") {
            await fetchPopularMovies();
            return;
        }
console.log("ENV TEST:", import.meta.env.VITE_API_URL);
        setLoading(true);
        setError(null);
        try {
            const searchResults = await SearchMovies(searchTerm);
            setMovies(searchResults);
            
            if (searchResults.length === 0) {
                setError("No movies found. Try a different search term.");
            }
        } catch (error) {
            setError("Failed to search movies.");
            console.error("Error searching movies:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="home">
            <form className="search-form" onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search for movies... "
                    className="search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            {error && <div className="error-message">{error}</div>}
            {loading && <div className="loading">Loading...</div>}

            <div className="movies-grid">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Home;
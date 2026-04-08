import { useState } from "react"
import "../style/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext"
import { MovieDetails } from "../services/api"

interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
}

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({movie}: MovieCardProps) {
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id)
    const [showSummary, setShowSummary] = useState(false)
    const [summary, setSummary] = useState<string>("")
    const [loadingSummary, setLoadingSummary] = useState(false)

    function onFavoriteClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        e.stopPropagation()
        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }

    async function onSummaryClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        e.stopPropagation()
        if (!showSummary && !summary) {
            setLoadingSummary(true)
            try {
                const details = await MovieDetails(movie.id)
                setSummary(details.overview || "No description available.")
            } catch {
                setSummary("Failed to load summary.")
            }
            setLoadingSummary(false)
        }
        setShowSummary(!showSummary)
    }

    function onMoreInfoClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        e.stopPropagation()
        window.open(`https://www.themoviedb.org/movie/${movie.id}`, '_blank')
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title}
            />
            <div className="movie-overlay">
                <div className="overlay-buttons-top">
                    <button 
                      className={`icon-btn favorite-btn ${favorite ? "active" : ""}`} 
                      onClick={onFavoriteClick}
                      title={favorite ? "Remove from favorites" : "Add to favorites"}
                    >
                        {favorite ? "♥" : "♡"}
                    </button>
                </div>
                <div className="overlay-buttons-bottom">
                    <button 
                      className={`icon-btn summary-btn ${showSummary ? "active" : ""}`}
                      onClick={onSummaryClick}
                      disabled={loadingSummary}
                      title="Movie summary"
                    >
                        {loadingSummary ? "..." : showSummary ? "✕" : "ℹ"}
                    </button>
                    <button 
                      className="icon-btn more-info-btn"
                      onClick={onMoreInfoClick}
                      title="More info on TMDB"
                    >
                        ↗
                    </button>
                </div>
            </div>
        </div>
        <div className={`movie-summary ${showSummary ? "open" : ""}`}>
            <div className="summary-header">
                <span>Synopsis</span>
                <button onClick={() => setShowSummary(false)}>✕</button>
            </div>
            <p>{summary}</p>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>
}

export default MovieCard
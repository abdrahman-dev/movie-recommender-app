import { createContext, useState, useContext, useEffect } from "react"
import type { ReactNode } from "react"

interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
}

interface MovieContextType {
  favorites: Movie[];
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (movieId: number) => void;
  isFavorite: (movieId: number) => boolean;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined)

export const useMovieContext = () => {
  const context = useContext(MovieContext)
  if (!context) {
    throw new Error("useMovieContext must be used within MovieProvider")
  }
  return context
}

interface MovieProviderProps {
  children: ReactNode;
}

export const MovieProvider = ({children}: MovieProviderProps) => {
    const [favorites, setFavorites] = useState<Movie[]>([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")
        if (storedFavs) {
          try {
            setFavorites(JSON.parse(storedFavs))
          } catch (error) {
            console.error("Failed to parse favorites:", error)
          }
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (movie: Movie) => {
        if (!favorites.some(fav => fav.id === movie.id)) {
          setFavorites(prev => [...prev, movie])
        }
    }

    const removeFromFavorites = (movieId: number) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }
    
    const isFavorite = (movieId: number) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value: MovieContextType = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}
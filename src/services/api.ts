const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3"

export const PopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
  const data = await response.json()
  return data.results
}

export const SearchMovies = async (query: string) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  )
  const data = await response.json()
  return data.results
}

export const MovieDetails = async (movieId: number) => {
  const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
  const data = await response.json()
  return data
}

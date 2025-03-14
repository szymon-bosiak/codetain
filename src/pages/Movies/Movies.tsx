import { useEffect, useState } from "react"
import "./movies.css"
import axios from "axios"
import { Link } from "react-router-dom"
import Loading from "../../components/Loading/Loading"
import { motion } from "framer-motion"

interface SwapiMoviesResponse {
  count: number
  next: string | null
  previous: string | null
  results: SwapiMovie[]
}

interface SwapiMovie {
  title: string
  episode_id: number
  opening_crawl: string
  director: string
  producer: string
  release_date: string
  characters: string[]
  planets: string[]
  starships: string[]
  vehicles: string[]
  species: string[]
  created: string
  edited: string
  url: string
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: .6 } },
}

function Movies() {
  const [movies, setMovies] = useState<SwapiMovie[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get<SwapiMoviesResponse>(
          "https://swapi.dev/api/films"
        )
        setMovies(response.data.results)
      } catch (error: any) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchMovies()
  }, [])

  const filteredMovies = movies.filter((movie: SwapiMovie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="movies">
      <div className="movies__container">
        <motion.h1 initial="hidden" animate="visible" variants={fadeInLeft}>
          Star Wars Movies
        </motion.h1>

        <div className="moveis__search">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="movies__results">
          {filteredMovies.length === 0 && !isLoading && !error ? (
            <p className="movies__list-error">No movies found.</p>
          ) : (
            <ul className="movies__results-list">
              {filteredMovies.map((movie: any) => {
                // Extract movie ID from API URL because episode_id does not match the correct API endpoint
                const movieId = movie.url.match(/\/films\/(\d+)\//)[1]
                return (
                  <li key={movie.episode_id}>
                    <Link to={`/movie/${movieId}`}>
                      <span />
                      <h2>{`${movie.title} (Episode ${movie.episode_id})`}</h2>
                      <p>Release Date: {movie.release_date}</p>
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        {isLoading && <Loading />}
        {error && <p>{error}</p>}
      </div>
    </div>
  )
}

export default Movies

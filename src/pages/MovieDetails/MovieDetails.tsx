import { useEffect, useState } from "react"
import "./MovieDetails.css"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import { MdArrowBack } from "react-icons/md"
import Loading from "../../components/Loading/Loading"

interface MovieDetailsType {
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

function MovieDetails() {
  const { movieId } = useParams<{ movieId: string }>()
  const [movieDetails, setMovieDetails] = useState<MovieDetailsType | null>(
    null
  )
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://swapi.dev/api/films/${movieId}`
        )
        setMovieDetails(response.data)
      } catch (error: any) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    if (movieId) {
      fetchMovieDetails()
    } else {
      setIsLoading(false)
      setError("No Movie ID provided")
    }
  }, [movieId])

  return (
    <div className="movie_details">
      <div className="movie_details_container">
        <div className="movie_details_container-button">
          <button>
            <Link to="/movies">
              <MdArrowBack />
            </Link>
          </button>
        </div>

        <div className="movie_details_container-content">
          {movieDetails && (
            <>
              <h2>{movieDetails.title}</h2>
              <div className="movie_details_container-content-details">
                <p>Director: {movieDetails.director}</p>
                <p>Producer: {movieDetails.producer}</p>
                <p>Release Date: {movieDetails.release_date}</p>
                <p>Opening Crawl: {movieDetails.opening_crawl}</p>
              </div>
            </>
          )}
        </div>
      </div>

      {isLoading && <Loading />}
      {error && <p>{error}</p>}
    </div>
  )
}

export default MovieDetails

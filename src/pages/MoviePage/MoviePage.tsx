import "./MoviePage.css";
import { IMovieDescription } from "../../shared/API/API.dto";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import OMDBAPI from "../../shared/API/API";
import Button from "../../components/Button/Button";
import Star from "../../components/Star/Star";
import { ScaleLoader } from "react-spinners";

function MoviePage() {
  const [movie, setMovie] = useState<IMovieDescription>();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const fetchMovie = async () => {
      if (id) {
        const movie = await OMDBAPI.SearchByID(id);
        setMovie(movie);
      }
    };
    fetchMovie();
  }, [id]);

  return (

    <div className="movie-page">
    {movie ? ( 
      
      <div className="container">

<h1 className="title">{movie.Title}</h1>

        <div className="movie-page__poster-desc">
          <img
            className="movie-page__poster"
            src={movie.Poster}
            alt={movie.Title}
          />
          <div className="movie__desc">
            <Star />

            <div className="movie-page__actors">
              <h2>
                <b>Actors</b>
              </h2>
              <p>{movie.Actors}</p>
            </div>

            <div className="movie-page__awards">
              <h2>
                <b>Awards</b>
              </h2>
              <p>{movie.Awards}</p>
            </div>

            <div className="movie-page__country">
              <h2>
                <b>Country</b>
              </h2>
              <p>{movie.Country}</p>
            </div>

            <div className="movie-page__plot">
              <h2>
                <b>Description</b>
              </h2>
              <p>{movie.Plot}</p>
            </div>

            <div className="movie-page__released">
              <h2>
                <b>Released</b>
              </h2>
              <p>{movie.Released}</p>
            </div>

            <div className="movie-page__year">
              <h2>
                <b>Year</b>
              </h2>
              <p>{movie.Year}</p>
            </div>

            <div className="movie-page__rating">
              <h2>
                <b>Rating</b>
              </h2>
              <p>{movie.imdbRating}</p>
            </div>

            <Button handleClick={() => navigate(-1)}>Назад</Button>
          </div>
          <div id="star"></div>
        </div>
        </div>
      ) : (
        <ScaleLoader height={200} loading width={80} color="#d3dac3" />
      )}
    </div>
  );
}

export default MoviePage;

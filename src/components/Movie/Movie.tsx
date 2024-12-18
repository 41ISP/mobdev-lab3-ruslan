import "./styles.css"
import { IMovie } from "../../shared/API/API.dto"
import { useNavigate } from "react-router-dom"

const Movie = ({Title, Type, Year, Poster, imdbID}:  IMovie) => 
{
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/movie/${imdbID}`);
    };

    return (
        <div className="movie">
            <img className="poster"
            onClick={ handleClick }
            src={Poster}
            alt={Title}/>
            <h2 onClick={handleClick}>{Title}</h2>
            <h2>{Type}</h2>
            <h5>{Year}</h5>
        </div>
        
    )
}

export default Movie


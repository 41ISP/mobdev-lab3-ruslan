import { useState } from "react";
import OMDBAPI from "../../shared/API/API";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Feed from "../../components/Feed/Feed";
import { IMovie } from "../../shared/API/API.dto";
import './Search.css'

function Search() {
  const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [count, setCount] = useState("");
  const [response, setResponse] = useState("");

  async function fetchMovies(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = await OMDBAPI.search(movieName);
    if (res.Response === "False") {
      setCount("Too many results");
      console.log(count);
      return;
    }
    setMovies(res.Search);
    setResponse(res.Response);
    setCount(res.totalResults);
  }
  
  return (
    <div className="search">

      <form onSubmit={fetchMovies}>
        <div className="searchDiv">Search</div>
        <Input state={movieName} setState={setMovieName} />
        <Button type="submit">Search</Button>
        <Button type="button">Likes</Button>
      </form>
      

      <Feed Response={response} Search={movies} totalResults={count} />

    </div>
  );
}


export default Search;

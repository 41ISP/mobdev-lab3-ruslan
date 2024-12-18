import './Feed.css'
import { IMoviesResponse } from "../../shared/API/API.dto";
import Movie from "../Movie/Movie";

const Feed = ({/*totalResults,*/ Search }: IMoviesResponse) => {
  return (
    <div className="feed">
      {/* {totalResults} */}
      <div className="feed__container">
      {Search.map((x) => (
        <Movie {...x} />
      ))}

      </div>
    </div>
  );
};

export default Feed
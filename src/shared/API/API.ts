import axios from "axios";
import { IMovieDescription, IMoviesResponse } from "./API.dto";
import MoviePage from "../../pages/MoviePage/MoviePage";
const URL = `http://www.omdbapi.com/`;
const API_KEY = import.meta.env.VITE_API_KEY;
const OMDBApiInstance = axios.create({
  baseURL: URL,
});

const OMDBAPI = {
  search: async function (movieTitle: string) {
    const response = (
      await OMDBApiInstance.get<IMoviesResponse>("", {
        params: { apikey: API_KEY, s: movieTitle },
      })
    ).data;
    return response;
  },

  SearchByID: async function (imdbID: string) {
    const response = (await OMDBApiInstance.get<IMovieDescription>("", {
      params: { apikey: API_KEY, i: imdbID },
    })).data;
    return response;
  },
};

export default OMDBAPI;

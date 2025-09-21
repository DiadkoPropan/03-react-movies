import axios from "axios";
import type { Movie } from "../types/movie";

const API_URL = "https://api.themoviedb.org/3/search/movie";
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

interface FetchMoviesResponse {
  results: Movie[];
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const config = {
    params: { query },
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2I1NDdlNTYzZjFhYzFiOWYxY2JlMDJjYTg3MTAwNyIsIm5iZiI6MTc1ODQ0ODU0Ny42MDE5OTk4LCJzdWIiOiI2OGNmY2JhMzhkM2Q0Yjg4NjFjYzMzNTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.fkX3jn4hJFwtv5f_wfTYiWO14gB_o340i2C4yZHWjK8`,
    },
  };

  const response = await axios.get<FetchMoviesResponse>(API_URL, config);
  return response.data.results;
};
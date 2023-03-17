import { Moviedata, movieInterface } from "../schemas/movies.schema";
import { axiosInstance } from "./api.instance";

export const getAllMovies = async (): Promise<Moviedata> => {
  const response = await axiosInstance.get("/movie");
  return response.data;
};

export const myWatchList = async (data: movieInterface) => {
  const watchListData = await axiosInstance.post("/movie/addwatchlist", data);
  console.log(watchListData.data);
  return watchListData.data;
};

export const getWatchListMovies = async () => {
  const watchListResponse = await axiosInstance.get("/movie/watchlist");
  console.log(watchListResponse.data);
  return watchListResponse.data;
};

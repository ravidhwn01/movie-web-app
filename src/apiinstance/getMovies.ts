import { Moviedata } from "../schemas/movies.schema";
import { axiosInstance } from "./api.instance";

export const getAllMovies = async (): Promise<Moviedata> => {
  const response = await axiosInstance.get("/movie");
  return response.data;
};

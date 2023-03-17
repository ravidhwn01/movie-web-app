import { Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getAllMovies, getWatchListMovies } from "../apiinstance/getMovies";
import { Result } from "../schemas/movies.schema";
import MovieBox from "./MovieBox";
function AllMovies() {
  const [movies, setMovies] = useState<Result[]>();
  const { data } = useQuery("moviewatchlistdata", () => getWatchListMovies());
  console.log(data);
  const fetchMovieData = async () => {
    const moviedata = await getAllMovies();
    console.log(moviedata.results);
    setMovies(moviedata.results);
    return moviedata.results;
  };

  useEffect(() => {
    fetchMovieData();
  }, []);

  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {movies?.map((movie) => {
          return (
            <GridItem key={movie.id}>
              <MovieBox movie={movie} />
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
}

export default AllMovies;

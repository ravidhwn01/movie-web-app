import { Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getAllMovies } from "../apiinstance/getMovies";
import { Result } from "../schemas/movies.schema";
import MovieBox from "./MovieBox";
import Navbar from "./Navbar";
function AllMovies() {
  const [movies, setMovies] = useState<Result[]>();

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
      <Navbar />
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

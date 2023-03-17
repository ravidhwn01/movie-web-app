import { Container, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getAllMovies } from "../apiinstance/getMovies";
import { Result } from "../schemas/movies.schema";
import MovieBox from "./MovieBox";
function AllMovies() {
  const [movies, setMovies] = useState<Result[]>();

  const fetchData = async () => {
    const moviedata = await getAllMovies();
    console.log(moviedata.results);
    setMovies(moviedata.results);
    return moviedata.results;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Container maxW="container.sm">
        {movies?.map((movie) => {
          return <MovieBox key={movie.id} movie={movie} />;
        })}
      </Container>
    </>
  );
}

export default AllMovies;

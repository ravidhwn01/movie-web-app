import { Box, SimpleGrid } from "@chakra-ui/react";
import { Result } from "../schemas/movies.schema";
interface MovieProps {
  movie: Result;
}
function MovieDetails(props: MovieProps) {
  const {
    movie: { title, poster_path, overview },
  } = props;
  return (
    <div>
      <h1> {title} </h1>
      <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt="" />
      <p> {overview} </p>
    </div>
  );
}

export default MovieDetails;

import { Button, Link, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import { Result } from "../schemas/movies.schema";
import MovieDetails from "./MovieDetails";
interface MovieProps {
  movie: Result;
}
function MovieBox(props: MovieProps) {
  const {
    movie: { poster_path },
  } = props;

  const movieoverview = () => {
    console.log(`clicked`);
    MovieDetails({ ...props });
  };

  return (
    <>
      <Link>
        <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt="" />
      </Link>
      <Button onClick={movieoverview}> more details</Button>
    </>
  );
}

export default MovieBox;

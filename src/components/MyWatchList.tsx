import { Grid, GridItem, Image } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { getWatchListMovies, myWatchList } from "../apiinstance/getMovies";
import { MovieInterface } from "../schemas/movies.schema";
import MovieBox from "./MovieBox";
import Navbar from "./Navbar";
import WatchlistBox from "./WatchlistBox";

function MyWatchList() {
  const { data } = useQuery("moviewatchlistdata", () => getWatchListMovies());
  console.log(data);
  // myWatchList()

  return (
    <>
      <Navbar />
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {data?.map((movie: MovieInterface, id: number) => {
          return (
            <GridItem my={5} key={id}>
              <WatchlistBox movie={movie} />
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
}

export default MyWatchList;

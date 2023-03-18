import { Grid, GridItem } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { getWatchListMovies } from "../apiinstance/getMovies";
import Navbar from "./Navbar";
import WatchlistBox from "./WatchlistBox";

function MyWatchList() {
  const { data } = useQuery("moviewatchlistdata", () => getWatchListMovies());

  return (
    <>
      <Navbar />
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {data?.map((movie, id: number) => {
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

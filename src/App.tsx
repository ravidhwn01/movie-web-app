import { ChakraProvider, Heading } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllMovies from "./components/AllMovies";
import MyWatchList from "./components/MyWatchList";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <Heading> welcome to Movie web app</Heading>
            <Routes>
              <Route path="/allmovies" element={<AllMovies />} />
              <Route path="/watchlist" element={<MyWatchList />} />
              {/* <Route path="/moviedetails" element={<MovieDetails />} /> */}
            </Routes>
          </QueryClientProvider>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;

import { ChakraProvider, Heading } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AllMovies from "./components/AllMovies";
import MyWatchList from "./components/MyWatchList";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <Heading mb={5} textAlign={"center"}>
              {" "}
              welcome to Movie web app
            </Heading>
            <Routes>
              <Route path="/allmovies" element={<AllMovies />} />
              <Route path="/watchlist" element={<MyWatchList />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </QueryClientProvider>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;

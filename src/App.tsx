import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AllMovies from "./components/AllMovies";
import HomePage from "./components/HomePage";
import MyWatchList from "./components/MyWatchList";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path="/" element={<HomePage />} />
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

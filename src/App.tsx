import { Box, ChakraProvider, Container, Heading } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <Heading> welcome to Movie web app</Heading>
            {/* <Routes>
              <Route path="/" />
              <Route path="/" />
              <Route path="/" />
            </Routes> */}
          </QueryClientProvider>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;

import { Flex, Link, Text } from "@chakra-ui/react";
import Navbar from "./Navbar";

function HomePage() {
  return (
    <>
      <Navbar />
      <Flex
        direction={"column"}
        p="6"
        justifyContent={"center"}
        h="100vh"
        width="100vw"
        alignContent={"center"}
      >
        <Text
          textColor={"blue"}
          fontSize="3xl"
          fontWeight="bold"
          textAlign="center"
          width={"full"}
        >
          Movie Manager
        </Text>
        <Link
          my={3}
          textAlign="center"
          fontWeight="md"
          mx="800px"
          href="/allmovies"
          _hover={{
            color: "white",
            bg: "blue",
            fontWeight: "bold",
            borderRadius: "md",
          }}
          p="2"
        >
          All Movies
        </Link>
        <Link
          my={3}
          textAlign="center"
          fontWeight="md"
          mx="800px"
          href="/watchlist"
          _hover={{
            color: "white",
            bg: "blue",
            fontWeight: "bold",
            borderRadius: "md",
          }}
          p="2"
        >
          My Watchlist
        </Link>
      </Flex>
    </>
  );
}

export default HomePage;

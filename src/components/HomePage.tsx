import { Center, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import AllMovies from "./AllMovies";
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
      </Flex>
    </>
  );
}

export default HomePage;

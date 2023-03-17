import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import AllMovies from "./AllMovies";

function HomePage() {
  return (
    <Flex direction={"column"} p="6">
      <Text fontSize="3xl" fontWeight="bold" textAlign="center" bgColor="red">
        Welcome to movie web app
      </Text>
      <Flex py="8">
        <AllMovies />
      </Flex>
    </Flex>
  );
}

export default HomePage;

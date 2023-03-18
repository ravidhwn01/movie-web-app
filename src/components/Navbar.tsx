import { Flex, Link } from "@chakra-ui/react";

function Navbar() {
  return (
    <Flex gap="3" p="6" color="blue" fontSize="xl" justifyContent="flex-end">
      <Link
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
  );
}

export default Navbar;

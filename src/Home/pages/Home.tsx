import { Box } from "@chakra-ui/react";
import { SearchBar } from "../components/SearchBar";
import { Hero } from "../components/Hero";

export const Home = () => {
  return (
    <Box>
      <SearchBar />
      <Hero />
    </Box>
  );
};

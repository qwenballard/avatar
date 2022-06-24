import { Box } from '@chakra-ui/react';
import { Hero } from '../components/Hero';

export const Home = () => {
  return (
    <Box>
      {/* Rethink about if this component makes sense here or not. 
      Maybe move it to the navbar? <SearchBar /> */}
      <Hero />
    </Box>
  );
};

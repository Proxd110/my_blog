import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

function Portfolio() {
  return (
    <Box p={4} bg="gray.100">
      <Heading as="h1" mb={4}>Mi portafolio</Heading>
      <Text fontSize="lg">Esta es la página de mi portafolio.</Text>
    </Box>
  );
}

export default Portfolio;
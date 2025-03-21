import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

function Home() {
  return (
    <Box p={4} bg="gray.100">
      <Heading as="h1" mb={4}>Bienvenido a mi blog</Heading>
      <Text fontSize="lg">Esta es la página principal.</Text>
    </Box>
  );
}

export default Home;
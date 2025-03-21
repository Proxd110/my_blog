import React from 'react';
import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';

function Home() {
  const bg = useColorModeValue('gray.100', 'gray.800');
  const color = useColorModeValue('black', 'white');

  return (
    <Box p={4} bg={bg} color={color} minH="calc(100vh - 64px)">
      <Heading as="h1" mb={4}>Bienvenido a mi blog</Heading>
      <Text fontSize="lg">Esta es la página principal.</Text>
    </Box>
  );
}

export default Home;
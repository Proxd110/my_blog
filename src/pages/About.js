import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

function About() {
  return (
    <Box p={4} bg="gray.100">
      <Heading as="h1" mb={4}>Sobre mí</Heading>
      <Text fontSize="lg">Esta es la página "Sobre mí".</Text>
    </Box>
  );
}

export default About;
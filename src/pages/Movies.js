import React from 'react';
import { Box, VStack, Link, Text } from '@chakra-ui/react';

function Movies() {
  const movies = [
    { title: 'Película 1', url: 'https://drive.google.com/file/d/xxx1' },
    { title: 'Película 2', url: 'https://drive.google.com/file/d/xxx2' },
    { title: 'Película 3', url: 'https://drive.google.com/file/d/xxx3' },
    { title: 'Película 4', url: 'https://drive.google.com/file/d/xxx4' },
    { title: 'Película 5', url: 'https://drive.google.com/file/d/xxx5' },
  ];

  return (
    <Box p={4}>
      <VStack spacing={4} align="start">
        {movies.map((movie, index) => (
          <Link
            key={index}
            href={movie.url}
            isExternal
            p={2}
            bg="gray.700"
            rounded="md"
            _hover={{ bg: 'gray.600' }}
            w={{ base: '100%', md: '50%' }} // Responsivo
          >
            <Text color="white">{movie.title}</Text>
          </Link>
        ))}
      </VStack>
    </Box>
  );
}

export default Movies;
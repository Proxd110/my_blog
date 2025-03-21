import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Heading,
  Text,
  VStack,
  Tag,
  useColorModeValue,
} from '@chakra-ui/react';

function MoviePlayer() {
  const { id } = useParams();

  const movies = [
    {
      id: '1',
      title: 'Película 1',
      video: 'https://drive.google.com/file/d/xxx1-video/preview',
      categories: ['Acción', 'Aventura'],
      description: 'Una emocionante película de acción y aventura que te mantendrá al borde de tu asiento.',
    },
    {
      id: '2',
      title: 'Película 2',
      video: 'https://drive.google.com/file/d/xxx2-video/preview',
      categories: ['Comedia', 'Romance'],
      description: 'Una comedia romántica perfecta para una noche relajada.',
    },
    {
      id: '3',
      title: 'Película 3',
      video: 'https://drive.google.com/file/d/xxx3-video/preview',
      categories: ['Drama', 'Suspenso'],
      description: 'Un drama intenso con giros inesperados que te sorprenderán.',
    },
    {
      id: '4',
      title: 'Película 4',
      video: 'https://drive.google.com/file/d/xxx4-video/preview',
      categories: ['Ciencia Ficción', 'Acción'],
      description: 'Una épica de ciencia ficción con efectos visuales impresionantes.',
    },
    {
      id: '5',
      title: 'Película 5',
      video: 'https://drive.google.com/file/d/xxx5-video/preview',
      categories: ['Animación', 'Familiar'],
      description: 'Una película animada ideal para toda la familia.',
    },
  ];

  const movie = movies.find((m) => m.id === id);

  const bg = useColorModeValue('gray.100', 'gray.800');
  const color = useColorModeValue('black', 'white');

  if (!movie) {
    return (
      <Box p={4} bg={bg} color={color} minH="calc(100vh - 64px)">
        <Heading as="h1">Película no encontrada</Heading>
      </Box>
    );
  }

  return (
    <Box p={4} bg={bg} color={color} minH="calc(100vh - 64px)">
      <VStack spacing={4} align="start">
        <Heading as="h1">{movie.title}</Heading>
        <Box>
          {movie.categories.map((category, index) => (
            <Tag key={index} mr={2} colorScheme="teal">
              {category}
            </Tag>
          ))}
        </Box>
        <Text>{movie.description}</Text>
        <Box w="100%" maxW="800px">
          <iframe
            src={movie.video}
            width="100%"
            height="450px"
            allow="autoplay"
            title={movie.title}
          />
        </Box>
      </VStack>
    </Box>
  );
}

export default MoviePlayer;
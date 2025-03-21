import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  SimpleGrid,
  Image,
  Text,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

function Movies() {
  const movies = [
    {
      id: '1',
      title: 'Película 1',
      poster: 'https://drive.google.com/uc?export=view&id=xxx1', // Reemplaza xxx1 con el ID de la imagen en Google Drive
      video: 'https://drive.google.com/file/d/xxx1-video/preview', // Reemplaza xxx1-video con el ID del video
      categories: ['Acción', 'Aventura'],
      description: 'Una emocionante película de acción y aventura que te mantendrá al borde de tu asiento.',
    },
    {
      id: '2',
      title: 'Película 2',
      poster: 'https://drive.google.com/uc?export=view&id=xxx2',
      video: 'https://drive.google.com/file/d/xxx2-video/preview',
      categories: ['Comedia', 'Romance'],
      description: 'Una comedia romántica perfecta para una noche relajada.',
    },
    {
      id: '3',
      title: 'Película 3',
      poster: 'https://drive.google.com/uc?export=view&id=xxx3',
      video: 'https://drive.google.com/file/d/xxx3-video/preview',
      categories: ['Drama', 'Suspenso'],
      description: 'Un drama intenso con giros inesperados que te sorprenderán.',
    },
    {
      id: '4',
      title: 'Película 4',
      poster: 'https://drive.google.com/uc?export=view&id=xxx4',
      video: 'https://drive.google.com/file/d/xxx4-video/preview',
      categories: ['Ciencia Ficción', 'Acción'],
      description: 'Una épica de ciencia ficción con efectos visuales impresionantes.',
    },
    {
      id: '5',
      title: 'Película 5',
      poster: 'https://drive.google.com/uc?export=view&id=xxx5',
      video: 'https://drive.google.com/file/d/xxx5-video/preview',
      categories: ['Animación', 'Familiar'],
      description: 'Una película animada ideal para toda la familia.',
    },
  ];

  const bg = useColorModeValue('gray.100', 'gray.800');
  const cardBg = useColorModeValue('gray.200', 'gray.700');
  const color = useColorModeValue('black', 'white');

  return (
    <Box p={4} bg={bg} minH="calc(100vh - 64px)">
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={4}>
        {movies.map((movie) => (
          <Box
            key={movie.id}
            bg={cardBg}
            rounded="md"
            overflow="hidden"
            _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s' }}
          >
            <Image src={movie.poster} alt={movie.title} objectFit="cover" h="300px" w="100%" />
            <Box p={3}>
              <Text fontSize="lg" fontWeight="bold" color={color} mb={2}>
                {movie.title}
              </Text>
              <Button
                as={Link}
                to={`/movies/${movie.id}`}
                colorScheme="teal"
                size="sm"
                w="100%"
              >
                Ver ahora
              </Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Movies;
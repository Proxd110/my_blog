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
      title: 'Las Crónicas de Narnia: El León, la Bruja y el Armario',
      poster: '/images/Las Cronicas de Narnia 1.jpg', // Nueva ruta
      video: 'https://drive.google.com/file/d/1l0Gz5C2VTD-2rH9tkgqDI4gFfipvXIJ5/preview',
      categories: ['Fantasía', 'Aventura', 'Familiar'],
      description: 'Cuatro hermanos descubren un mundo mágico detrás de un armario, donde deben enfrentarse a una bruja malvada y cumplir una profecía.',
    },
    {
      id: '2',
      title: 'Las Crónicas de Narnia: El Príncipe Caspian',
      poster: '/images/Las Cronicas de Narnia 2.jpg', // Nueva ruta
      video: 'https://drive.google.com/file/d/1CDaet1xNM7wRk1STGPcM1edNIhlKxFPn/preview',
      categories: ['Fantasía', 'Aventura', 'Acción'],
      description: 'Los hermanos Pevensie regresan a Narnia para ayudar al Príncipe Caspian a reclamar su trono y restaurar la paz en el reino.',
    },
    {
      id: '3',
      title: 'Las Crónicas de Narnia: La Travesía del Viajero del Alba',
      poster: '/images/Las Cronicas de Narnia 3.jpg', // Nueva ruta
      video: 'https://drive.google.com/file/d/14Kt73fzNu1x1evfR3VQJFDcAUt8037Yt/preview',
      categories: ['Fantasía', 'Aventura', 'Familiar'],
      description: 'Edmund, Lucy y su primo Eustace se embarcan en un viaje épico a bordo del Viajero del Alba para encontrar a los siete lores perdidos.',
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
            <Image
              src={movie.poster}
              alt={movie.title}
              objectFit="cover"
              h="300px"
              w="100%"
              fallbackSrc="https://via.placeholder.com/300x450?text=Poster+No+Disponible"
            />
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
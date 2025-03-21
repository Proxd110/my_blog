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
      title: 'Las Crónicas de Narnia: El León, la Bruja y el Armario',
      video: 'https://drive.google.com/file/d/1l0Gz5C2VTD-2rH9tkgqDI4gFfipvXIJ5/preview',
      categories: ['Fantasía', 'Aventura', 'Familiar'],
      description: 'Cuatro hermanos descubren un mundo mágico detrás de un armario, donde deben enfrentarse a una bruja malvada y cumplir una profecía.',
    },
    {
      id: '2',
      title: 'Las Crónicas de Narnia: El Príncipe Caspian',
      video: 'https://drive.google.com/file/d/1CDaet1xNM7wRk1STGPcM1edNIhlKxFPn/preview',
      categories: ['Fantasía', 'Aventura', 'Acción'],
      description: 'Los hermanos Pevensie regresan a Narnia para ayudar al Príncipe Caspian a reclamar su trono y restaurar la paz en el reino.',
    },
    {
      id: '3',
      title: 'Las Crónicas de Narnia: La Travesía del Viajero del Alba',
      video: 'https://drive.google.com/file/d/14Kt73fzNu1x1evfR3VQJFDcAUt8037Yt/preview',
      categories: ['Fantasía', 'Aventura', 'Familiar'],
      description: 'Edmund, Lucy y su primo Eustace se embarcan en un viaje épico a bordo del Viajero del Alba para encontrar a los siete lores perdidos.',
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
            allowFullScreen // Agregamos este atributo para habilitar pantalla completa
            title={movie.title}
          />
        </Box>
      </VStack>
    </Box>
  );
}

export default MoviePlayer;
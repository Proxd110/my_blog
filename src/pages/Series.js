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

function Series() {
  const series = [
    {
      id: '1',
      title: 'Infinity Train',
      poster: 'images/Infinity Train.jpg',
      details: '/series/infinity_train',
      categories: ['Animada', 'Aventura', 'Fantasía', 'Misterio'],
      description: 'Una serie animada que sigue a varios personajes mientras navegan por un tren infinito lleno de mundos únicos, resolviendo misterios y enfrentando desafíos personales.',
    },
    {
      id: '2',
      title: 'Hora de Aventura',
      poster: 'images/Hora de aventura.jpg',
      details: '/series/hora_de_aventura',
      categories: ['Animada', 'Aventura', 'Comedia', 'Fantasía'],
      description: 'Las aventuras de Finn, un niño humano, y Jake, su mejor amigo perro con poderes mágicos, en el post-apocalíptico Reino de Ooo.',
    },
    {
      id: '3',
      title: 'El Increíble Mundo de Gumball',
      poster: 'images/El Increíble Mundo de Gumball.jpg',
      details: '/series/el_increible_mundo_de_gumball',
      categories: ['Animada', 'Comedia', 'Familia'],
      description: 'Las aventuras de Gumball Watterson, un gato azul, y su familia en la ciudad ficticia de Elmore, donde todo es posible.',
    },
    {
      id: '4',
      title: 'El Circo Digital',
      poster: 'images/El Circo Digital.jpg',
      details: '/series/el_circo_digital',
      categories: ['Animada', 'Aventura', 'Comedia'],
      description: 'Un espectáculo animado que combina acrobacias, magia y tecnología para crear una experiencia única e inmersiva.',
    },
    // Add more series here as needed
  ];

  const bg = useColorModeValue('gray.100', 'gray.800');
  const cardBg = useColorModeValue('gray.200', 'gray.700');
  const color = useColorModeValue('black', 'white');

  return (
    <Box p={4} bg={bg} minH="calc(100vh - 64px)">
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={4}>
        {series.map((serie) => (
          <Box
            key={serie.id}
            bg={cardBg}
            rounded="md"
            overflow="hidden"
            _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s' }}
          >
            <Image
              src={serie.poster}
              alt={serie.title}
              objectFit="cover"
              h="300px"
              w="100%"
              fallbackSrc="https://via.placeholder.com/300x450?text=Poster+No+Disponible"
            />
            <Box p={3}>
              <Text fontSize="lg" fontWeight="bold" color={color} mb={2}>
                {serie.title}
              </Text>
              <Button
                as={Link}
                to={serie.details}
                colorScheme="teal"
                size="sm"
                w="100%"
              >
                Detalles
              </Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Series;
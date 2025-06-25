import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Image,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

function HoraDeAventura() {
  const series = {
    title: 'Hora de Aventura',
    poster: '../images/Hora de Aventura.jpg',
    description: 'Las aventuras de Finn, un niño humano, y Jake, su mejor amigo perro con poderes mágicos, en el post-apocalíptico Reino de Ooo.',
    seasons: [
      { id: '1', title: 'Temporada 1', path: '/series/hora_de_aventura/t1' },
      { id: '2', title: 'Temporada 2', path: '/series/hora_de_aventura/t2' },
      { id: '3', title: 'Temporada 3', path: '/series/hora_de_aventura/t3' },
      { id: '4', title: 'Temporada 4', path: '/series/hora_de_aventura/t4' },
      { id: '5', title: 'Temporada 5', path: '/series/hora_de_aventura/t5' },
      { id: '6', title: 'Temporada 6', path: '/series/hora_de_aventura/t6' },
      { id: '7', title: 'Temporada 7', path: '/series/hora_de_aventura/t7' },
      { id: '8', title: 'Temporada 8', path: '/series/hora_de_aventura/t8' },
      { id: '9', title: 'Temporada 9', path: '/series/hora_de_aventura/t9' },
      { id: '10', title: 'Temporada 10', path: '/series/hora_de_aventura/t10' },
    ],
  };

  const bg = useColorModeValue('gray.100', 'gray.800');
  const cardBg = useColorModeValue('gray.200', 'gray.700');
  const color = useColorModeValue('black', 'white');

  return (
    <Box p={4} bg={bg} color={color} minH="calc(100vh - 64px)">
      <VStack spacing={4} align="start">
        <Heading as="h1">{series.title}</Heading>
        <Text>{series.description}</Text>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={4}>
          {series.seasons.map((season) => (
            <Box
              key={season.id}
              bg={cardBg}
              rounded="md"
              overflow="hidden"
              _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s' }}
            >
              <Image
                src={series.poster}
                alt={season.title}
                objectFit="cover"
                h="200px"
                w="100%"
                fallbackSrc="https://via.placeholder.com/300x200?text=Poster+No+Disponible"
              />
              <Box p={3}>
                <Text fontSize="lg" fontWeight="bold" color={color} mb={2}>
                  {season.title}
                </Text>
                <Button
                  as={Link}
                  to={season.path}
                  colorScheme="teal"
                  size="sm"
                  w="100%"
                >
                  Ver Temporada
                </Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
}

export default HoraDeAventura;
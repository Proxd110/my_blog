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

function ElIncreibleMundoDeGumball() {
  const series = {
    title: 'Hora de Aventura',
    poster: '../images/El Increíble Mundo de Gumball.jpg',
    description: 'El increíble mundo de Gumball sigue las aventuras de Gumball Watterson, un gato azul de 12 años, y su hermano adoptivo Darwin, un pez con piernas, mientras navegan por la vida en la ciudad ficticia de Elmore.',
    seasons: [
      { id: '1', title: 'Temporada 1', path: '/series/el_increible_mundo_de_gumball/t1' },
      { id: '2', title: 'Temporada 2', path: '/series/el_increible_mundo_de_gumball/t2' },
      { id: '3', title: 'Temporada 3', path: '/series/el_increible_mundo_de_gumball/t3' },
      { id: '4', title: 'Temporada 4', path: '/series/el_increible_mundo_de_gumball/t4' },
      { id: '5', title: 'Temporada 5', path: '/series/el_increible_mundo_de_gumball/t5' },
      { id: '6', title: 'Temporada 6', path: '/series/el_increible_mundo_de_gumball/t6' },
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

export default ElIncreibleMundoDeGumball;
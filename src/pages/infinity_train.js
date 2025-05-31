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

function InfinityTrain() {
  const series = {
    title: 'Infinity Train',
    poster: 'images/Infinity Train.jpg',
    description: 'Una serie animada que sigue a varios personajes mientras navegan por un tren infinito lleno de mundos únicos, resolviendo misterios y enfrentando desafíos personales.',
    seasons: [
      { id: '1', title: 'Temporada 1', path: '/series/infinity_train/t1' },
      { id: '2', title: 'Temporada 2', path: '/series/infinity_train/t2' },
      { id: '3', title: 'Temporada 3', path: '/series/infinity_train/t3' },
      { id: '4', title: 'Temporada 4', path: '/series/infinity_train/t4' },
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

export default InfinityTrain;
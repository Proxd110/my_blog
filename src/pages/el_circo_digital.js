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

function ElCircoDigital() {
  const series = {
    title: 'El Circo Digital',
    poster: '../images/El Circo Digital.jpg',
    description: 'El Circo Digital es un espectáculo que combina acrobacias, magia y tecnología para crear una experiencia única e inmersiva.',
    seasons: [
        { id: '1', title: 'Temporada 1', path: '/series/el_circo_digital/t1' },
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

export default ElCircoDigital;
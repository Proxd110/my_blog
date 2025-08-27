import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';

function InfinityTrainT4() {
  const episodes = [
    { id: '1', title: 'Episodio 1 (Las Cintas Gemelas)', video: 'https://drive.google.com/file/d/16u_N2XQQsvz_gYmT7f5lyYNOcLk7TBRH/preview' },
    { id: '2', title: 'Episodio 2 (El vagón del iceberg)', video: 'https://drive.google.com/file/d/1J3yd7zQj20QyiEG0DZwaxUtQ_s8HS52h/preview' },
    { id: '3', title: 'Episodio 3 (El vagón del Viejo Oeste)', video: 'https://drive.google.com/file/d/141hKXmJbqrceFK3lrkP_07_rVBL4jHnE/preview' },
    { id: '4', title: 'Episodio 4 (El vagón del cerdito bebé)', video: 'https://drive.google.com/file/d/1XiCSbw8keX1SXTQ50LyvWYk_Ib4LPHw_/preview' },
    { id: '5', title: 'Episodio 5 (El vagón de la cola astral)', video: 'https://drive.google.com/file/d/1L8P-LXFaORIwPO72Nx4JXnf1Jc3Uj-7A/preview' },
    { id: '6', title: 'Episodio 6 (El vagón de la fiesta)', video: 'https://drive.google.com/file/d/176xl-EnA2CYLsfn-H2r6OsjD7RlFMVR_/preview' },
    { id: '7', title: 'Episodio 7 (El vagón de la galería de arte)', video: 'https://drive.google.com/file/d/1tHFpwzTtFKMVOpHGULUIMZUL2_ZmBBp3/preview' },
    { id: '8', title: 'Episodio 8 (El vagón del mega laberinto)', video: 'https://drive.google.com/file/d/1xzevPnN29Q4yqdU55J1MzdZS2rNf439m/preview' },
    { id: '9', title: 'Episodio 9 (El vagón del castillo)', video: 'https://drive.google.com/file/d/1oRwYBhcal7AX6D_2-8HPds5BVgtj3waY/preview' },
    { id: '10', title: 'Episodio 10 (El tren hacia ninguna parte)', video: 'https://drive.google.com/file/d/1JQdDPZB1JGy9ateDHWEPHw2xStAsYyNU/preview' },
  ];

  const { episodeId = '1' } = useParams();
  const episode = episodes.find((ep) => ep.id === episodeId) || episodes[0];

  const bg = useColorModeValue('gray.100', 'gray.800');
  const color = useColorModeValue('black', 'white');

  const currentIndex = episodes.findIndex((ep) => ep.id === episodeId);
  const prevEpisode = currentIndex > 0 ? episodes[currentIndex - 1] : null;
  const nextEpisode = currentIndex < episodes.length - 1 ? episodes[currentIndex + 1] : null;

  return (
    <Box p={4} bg={bg} color={color} minH="calc(100vh - 64px)">
      <VStack spacing={4} align="start">
        <Heading as="h1">Infinity Train - Temporada 4 - Dueto</Heading>
        <Text>{episode.title}</Text>
        <Box w="100%" maxW="800px">
          <iframe
            src={episode.video}
            width="100%"
            height="450px"
            allow="autoplay"
            allowFullScreen
            title={episode.title}
          />
        </Box>
        <HStack spacing={4}>
          {prevEpisode && (
            <Button
              as={Link}
              to={`/series/infinity_train/t4/${prevEpisode.id}`}
              colorScheme="teal"
              variant="outline"
            >
              Capítulo Anterior
            </Button>
          )}
          {nextEpisode && (
            <Button
              as={Link}
              to={`/series/infinity_train/t4/${nextEpisode.id}`}
              colorScheme="teal"
              variant="outline"
            >
              Siguiente Capítulo
            </Button>
          )}
        </HStack>
        <VStack align="start" spacing={2} w="100%">
          <Heading as="h2" size="md">Episodios</Heading>
          {episodes.map((ep) => (
            <Button
              key={ep.id}
              as={Link}
              to={`/series/infinity_train/t4/${ep.id}`}
              colorScheme="teal"
              variant={ep.id === episodeId ? 'solid' : 'ghost'}
              w="100%"
              justifyContent="start"
            >
              {ep.title}
            </Button>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
}

export default InfinityTrainT4;
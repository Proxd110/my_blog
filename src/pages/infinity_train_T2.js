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

function InfinityTrainT2() {
  const episodes = [
    { id: '1', title: 'Episodio 1', video: 'https://drive.google.com/file/d/placeholder/preview' },
    { id: '2', title: 'Episodio 2', video: 'https://drive.google.com/file/d/placeholder/preview' },
    { id: '3', title: 'Episodio 3', video: 'https://drive.google.com/file/d/placeholder/preview' },
    { id: '4', title: 'Episodio 4', video: 'https://drive.google.com/file/d/placeholder/preview' },
    { id: '5', title: 'Episodio 5', video: 'https://drive.google.com/file/d/placeholder/preview' },
    { id: '6', title: 'Episodio 6', video: 'https://drive.google.com/file/d/placeholder/preview' },
    { id: '7', title: 'Episodio 7', video: 'https://drive.google.com/file/d/placeholder/preview' },
    { id: '8', title: 'Episodio 8', video: 'https://drive.google.com/file/d/placeholder/preview' },
    { id: '9', title: 'Episodio 9', video: 'https://drive.google.com/file/d/placeholder/preview' },
    { id: '10', title: 'Episodio 10', video: 'https://drive.google.com/file/d/placeholder/preview' },
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
        <Heading as="h1">Infinity Train - Temporada 2</Heading>
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
              to={`/series/infinity_train/t2/${prevEpisode.id}`}
              colorScheme="teal"
              variant="outline"
            >
              Capítulo Anterior
            </Button>
          )}
          {nextEpisode && (
            <Button
              as={Link}
              to={`/series/infinity_train/t2/${nextEpisode.id}`}
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
              to={`/series/infinity_train/t2/${ep.id}`}
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

export default InfinityTrainT2;
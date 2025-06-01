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

function InfinityTrainT3() {
  const episodes = [
    { id: '1', title: 'Episodio 1', video: 'https://drive.google.com/file/d/12rLSNAxxYaP6rwHBCAiNv50hC0gwgIB_/preview' },
    { id: '2', title: 'Episodio 2', video: 'https://drive.google.com/file/d/1QuCpfqthSq2lehsu0tLZh_tL8HVb25IG/preview' },
    { id: '3', title: 'Episodio 3', video: 'https://drive.google.com/file/d/1FkNFqMr_z_pqvUAZw5QVVJgNYcs-uAjt/preview' },
    { id: '4', title: 'Episodio 4', video: 'https://drive.google.com/file/d/1Qvfbml-tAt3Mj2vKSYdhewo4np25Skha/preview' },
    { id: '5', title: 'Episodio 5', video: 'https://drive.google.com/file/d/1Ls2MDREMrfzwsrtrJJjTJ1kO03pUkGHW/preview' },
    { id: '6', title: 'Episodio 6', video: 'https://drive.google.com/file/d/1XD-AT-lT7uDGqsM2C3HsRHYR0IFS6H3z/preview' },
    { id: '7', title: 'Episodio 7', video: 'https://drive.google.com/file/d/1uqSr_2EY8_dP77gamgkrMmSFhTK326D9/preview' },
    { id: '8', title: 'Episodio 8', video: 'https://drive.google.com/file/d/1oJoei2PP3ElIQCEseH8DeYM_0oUccF3U/preview' },
    { id: '9', title: 'Episodio 9', video: 'https://drive.google.com/file/d/1vASMCSUc9epeEjNnP6zufZ5jmecQ0vM_/preview' },
    { id: '10', title: 'Episodio 10', video: 'https://drive.google.com/file/d/1csMndkMmqOn_oKgktn-gjKPQgrNC-7aS/preview' },
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
        <Heading as="h1">Infinity Train - Temporada 3</Heading>
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
              to={`/series/infinity_train/t3/${prevEpisode.id}`}
              colorScheme="teal"
              variant="outline"
            >
              Capítulo Anterior
            </Button>
          )}
          {nextEpisode && (
            <Button
              as={Link}
              to={`/series/infinity_train/t3/${nextEpisode.id}`}
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
              to={`/series/infinity_train/t3/${ep.id}`}
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

export default InfinityTrainT3;
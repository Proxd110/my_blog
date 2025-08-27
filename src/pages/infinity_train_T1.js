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

function InfinityTrainT1() {
  const episodes = [
    { id: '1', title: 'Episodio 1 (El vagón cuadriculado)', video: 'https://drive.google.com/file/d/19BpLQG1L191yudOr2Z-bcpk1SnqG7TeP/preview' },
    { id: '2', title: 'Episodio 2 (El vagón de la playa)', video: 'https://drive.google.com/file/d/1cKk33uq14WB2naaE0Vd1VIgyvMbY6nMr/preview' },
    { id: '3', title: 'Episodio 3 (El vagón de los Corgis)', video: 'https://drive.google.com/file/d/1pt5J3o477uCA2-H4KEyfQmPYSZhlTkM6/preview' },
    { id: '4', title: 'Episodio 4 (El vagón de cristal)', video: 'https://drive.google.com/file/d/1RkC_4bP_70CXqg92pgSPs_dQawPvAqXL/preview' },
    { id: '5', title: 'Episodio 5 (El vagón de la gata)', video: 'https://drive.google.com/file/d/1AXpAao8QK-Q2jt0f1BNb8-qF6qJuh6uc/preview' },
    { id: '6', title: 'Episodio 6 (El vagón inacabado)', video: 'https://drive.google.com/file/d/13fNuoQoY7Uc6MMocl8cIf9jIv-Q2cIGd/preview' },
    { id: '7', title: 'Episodio 7 (El vagón cromado)', video: 'https://drive.google.com/file/d/1YGxk6adm3PloHO2POJnmP11jFH83lp0_/preview' },
    { id: '8', title: 'Episodio 8 (El vagón de la piscina de pelotas)', video: 'https://drive.google.com/file/d/1RpYcRdkqKVcjtuvEHZrMizAJyOsr4kWi/preview' },
    { id: '9', title: 'Episodio 9 (El vagón del pasado)', video: 'https://drive.google.com/file/d/1RkP06qnnsjvI8XaqhTiC-CaHJxCv5mQz/preview' },
    { id: '10', title: 'Episodio 10 (La locomotora)', video: 'https://drive.google.com/file/d/1km7SWaborVgRrhwfDx1_apM5WNrpS4tX/preview' },
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
        <Heading as="h1">Infinity Train - Temporada 1 - La niñ­a perenne</Heading>
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
              to={`/series/infinity_train/t1/${prevEpisode.id}`}
              colorScheme="teal"
              variant="outline"
            >
              Capítulo Anterior
            </Button>
          )}
          {nextEpisode && (
            <Button
              as={Link}
              to={`/series/infinity_train/t1/${nextEpisode.id}`}
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
              to={`/series/infinity_train/t1/${ep.id}`}
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

export default InfinityTrainT1;
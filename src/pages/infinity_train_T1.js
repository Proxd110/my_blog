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
    { id: '1', title: 'Episodio 1 (El vagón cuadriculado)', video: 'https://drive.google.com/file/d/1GaLjXsNwoTMNkDMOnMP5D_1JJr7lC7ID/preview' },
    { id: '2', title: 'Episodio 2 (El vagón de la playa)', video: 'https://drive.google.com/file/d/1SE9H1s54JDrD9nk_2oUeYUvO8XWfb3-u/preview' },
    { id: '3', title: 'Episodio 3 (El vagón de los Corgis)', video: 'https://drive.google.com/file/d/1Qc52jvJuoSkssiuRNC5sXZRzUjXYKcvI/preview' },
    { id: '4', title: 'Episodio 4 (El vagón de cristal)', video: 'https://drive.google.com/file/d/1xbbUJ0-u07-A_kiWmhKRRQ918ZF8ezos/preview' },
    { id: '5', title: 'Episodio 5 (El vagón de la gata)', video: 'https://drive.google.com/file/d/1IjnfWgyaXLRUAgUXReX5fXEf9nHpC-Ow/preview' },
    { id: '6', title: 'Episodio 6 (El vagón inacabado)', video: 'https://drive.google.com/file/d/1UtIgyTcedR5vvjwWkAfo4wBngnomEYR1/preview' },
    { id: '7', title: 'Episodio 7 (El vagón cromado)', video: 'https://drive.google.com/file/d/1cfAwiWNDPqOrDvHFV-YXzn1Wrv9BNlLs/preview' },
    { id: '8', title: 'Episodio 8 (El vagón de la piscina de pelotas)', video: 'https://drive.google.com/file/d/1MjIr7zVdPUSLrc4y4FDfyeZqJqNRrWJK/preview' },
    { id: '9', title: 'Episodio 9 (El vagón del pasado)', video: 'https://drive.google.com/file/d/19xDSDv_XvIY8jd1jKYDSbkam1KVbXnqD/preview' },
    { id: '10', title: 'Episodio 10 (La locomotora)', video: 'https://drive.google.com/file/d/1_nOumXdcUraNjFyFIgM58x-uVjqyfBXg/preview' },
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
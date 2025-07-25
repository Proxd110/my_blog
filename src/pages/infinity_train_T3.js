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
    { id: '1', title: 'Episodio 1 (El vagón musical)', video: 'https://drive.google.com/file/d/1IftC-a_ophrMrhhMk4udjJicaGGeYPeQ/preview' },
    { id: '2', title: 'Episodio 2 (El vagón de la jungla)', video: 'https://drive.google.com/file/d/1u2OVSxQAoTidfd-2ywew0wZ18yB13Nrl/preview' },
    { id: '3', title: 'Episodio 3 (El vagón del baile de debutantes)', video: 'https://drive.google.com/file/d/10GIV-a7q4i5MddSPWRtN7sfGdvoV14vW/preview' },
    { id: '4', title: 'Episodio 4 (El vagón del chalet Le Chat)', video: 'https://drive.google.com/file/d/1qMnlGFWdnLCa596msxo3EGSXR_wY74g9/preview' },
    { id: '5', title: 'Episodio 5 (El vagón del reloj de colores)', video: 'https://drive.google.com/file/d/1S_zQ8UCqYUoQLGdYMbDko5us79lbhou3/preview' },
    { id: '6', title: 'Episodio 6 (El vagón de la fogata)', video: 'https://drive.google.com/file/d/1V3JcX_s2pgGFJkJVHU--QBOIagRvSFi8/preview' },
    { id: '7', title: 'Episodio 7 (El vagón del cañón de serpientes aladas doradas)', video: 'https://drive.google.com/file/d/1pA2HzoQuXMTRObI5kBsWODktgmdxUgrM/preview' },
    { id: '8', title: 'Episodio 8 (El vagón Hey-Ho-Whoa)', video: 'https://drive.google.com/file/d/1Ur1nhK7QbyH2wthVQHdtAl9I6y6-8Xp8/preview' },
    { id: '9', title: 'Episodio 9 (El vagón del origami)', video: 'https://drive.google.com/file/d/1I0tQbXVEpieieliZCMohneokGxWeemJ6/preview' },
    { id: '10', title: 'Episodio 10 (La nueva Cima)', video: 'https://drive.google.com/file/d/1sVTUXNjeVvFb8xgnu9ogHAK3epNBphJU/preview' },
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
        <Heading as="h1">Infinity Train - Temporada 3 - Culto al Maquinista</Heading>
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
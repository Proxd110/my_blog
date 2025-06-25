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
    { id: '1', title: 'Episodio 1 (El vagón del mercado negro)', video: 'https://drive.google.com/file/d/14tU4IVyuiKjzF08n9WUwgBbiL1CkFDay/preview' },
    { id: '2', title: 'Episodio 2 (El vagón del árbol genealógico)', video: 'https://drive.google.com/file/d/1aSTnive9fdXqOY_yqs3Iw6Vndu5UKaJf/preview' },
    { id: '3', title: 'Episodio 3 (El vagón del mapa)', video: 'https://drive.google.com/file/d/1z-6-J8u03XTAK7vRQccnBXSfWRTA7Uyg/preview' },
    { id: '4', title: 'Episodio 4 (El vagón del sapo)', video: 'https://drive.google.com/file/d/1wh5Be1CWi7dQWY_6HMvE_4xcqNG7Kab2/preview' },
    { id: '5', title: 'Episodio 5 (El vagón del parásito)', video: 'https://drive.google.com/file/d/1bHYB5uObkgViRePAfu3d8nxATk23h5GY/preview' },
    { id: '6', title: 'Episodio 6 (El vagón del gato de la suerte)', video: 'https://drive.google.com/file/d/1iyInoo04WvfRqGy7a_qW_cP6hEbD6vM8/preview' },
    { id: '7', title: 'Episodio 7 (El vagón del centro comercial)', video: 'https://drive.google.com/file/d/14gGOwKa-xgz7sMGaFTOk1u_oJipzxzak/preview' },
    { id: '8', title: 'Episodio 8 (El páramo)', video: 'https://drive.google.com/file/d/14UE5qwqTfmcttH7ZFjJopr_hT_X5R2t6/preview' },
    { id: '9', title: 'Episodio 9 (El vagón de la cinta)', video: 'https://drive.google.com/file/d/1xkiBEskIKqPw038FxxuKxKa7gkJMPmId/preview' },
    { id: '10', title: 'Episodio 10 (El vagón del número)', video: 'https://drive.google.com/file/d/1fq_-2mJJqvEv2mh3XHYsCCrm_CJAl58s/preview' },
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
        <Heading as="h1">Infinity Train - Temporada 2 - El reflejo quebrado</Heading>
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
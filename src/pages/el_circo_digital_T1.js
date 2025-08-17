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

function ElCircoDigitalT1() {
  const episodes = [
    { id: '1', title: 'El increible circo digital: Episodio 1 (Piloto)', video: 'https://drive.google.com/file/d/1OU51FV0gTGUH5PBtdn0opkWIMb0e0Oi0/preview' },
    { id: '2', title: 'El increible circo digital: POMNI DESPIERTA, HORA DE IR A LA AVENTURA', video: 'https://drive.google.com/file/d/1hGCMUJpLMRkAT9HUohUCtQEHXty2UG_d/preview' },
    { id: '3', title: 'El increible circo digital: Episodio 2 (¡Caos en los transportadores de dulces!)', video: 'https://drive.google.com/file/d/1Kt-y93cwIdPDgO4gT_wNMYWylbfrHQJo/preview' },
    { id: '4', title: 'El increible circo digital: Episodio 3 (El misterio de la Mansión Mildenhall)', video: 'https://drive.google.com/file/d/1KeTtlcPEBl4DViLYa04HK7vM8pmSY_xO/preview' },
    { id: '5', title: 'El increible circo digital: Episodio 4 (Mascarada de comida rápida)', video: 'https://drive.google.com/file/d/1etoOfJXu-gXtP47V1VPgnfPxM5xfiWQh/preview' },
    { id: '6', title: 'El increible circo digital: Episodio 5 (Sin título)', video: 'https://drive.google.com/file/d/1NCxt4FunSmSNM1b2Z0FuO1Be-pLJD-wm/preview' },
    { id: '7', title: 'El increible circo digital: Episodio 6 (Todos tienen armas)', video: 'https://drive.google.com/file/d/1xGick0FzxOtKGjQuCY3Hxzv4jyfDyH4R/preview' },
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
        <Heading as="h1">El Increíble Mundo de Gumball - Temporada 1</Heading>
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
              to={`/series/el_circo_digital/t1/${prevEpisode.id}`}
              colorScheme="teal"
              variant="outline"
            >
              Capítulo Anterior
            </Button>
          )}
          {nextEpisode && (
            <Button
              as={Link}
              to={`/series/el_circo_digital/t1/${nextEpisode.id}`}
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
              to={`/series/el_circo_digital/t1/${ep.id}`}
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

export default ElCircoDigitalT1;
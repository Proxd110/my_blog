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

function ElIncreibleMundoDeGumballT2() {
  const episodes = [
    { id: '1', title: 'Episodio 1 (Los caballeros - El coloso)', video: 'https://drive.google.com/file/d/1IWC3ZM628IMr4Ezsj8AGVuKpOkZFVdYv/preview' },
    { id: '2', title: 'Episodio 2 (La hojita - La flor)', video: 'https://drive.google.com/file/d/1OjiDAbBnpCP35CpW9R5H1CrEGmzakveW/preview' },
    { id: '3', title: 'Episodio 3 (El télefono - El trabajo)', video: 'https://drive.google.com/file/d/13whBh1F_8l1TTHbc7Hmj0bUaFTmBDUe-/preview' },
    { id: '4', title: 'Episodio 4 (La banana - El control remoto)', video: 'https://drive.google.com/file/d/12ip7jOw1W2cwz1uyYKkzzAW4tO-QIYNK/preview' },
    { id: '5', title: 'Episodio 5 (La noche de brujas - El tesoro)', video: 'https://drive.google.com/file/d/1255Ii-uzGdaC_c3STCGur7QvclpUwdvR/preview' },
    { id: '6', title: 'Episodio 6 (Las palabras - La disculpa)', video: 'https://drive.google.com/file/d/1KHEJLPxMTjHsVKJLzP8qj3bWiAXurkxI/preview' },
    { id: '7', title: 'Episodio 7 (El cráneo - La apuesta)', video: 'https://drive.google.com/file/d/1GgVKUzywIZ865vdiSi0VP87YvVBERmJy/preview' },
    { id: '8', title: 'Episodio 8 (El reloj - El pueblerino)', video: 'https://drive.google.com/file/d/1HGxYRKsPntEH9DTZhOEvD2Ex5JwzchkS/preview' },
    { id: '9', title: 'Episodio 9 (Navidad - Los decepcionados)', video: 'https://drive.google.com/file/d/1nyaqZR6ZBRkNuGRqQZjxQICfYsCetHfu/preview' },
    { id: '10', title: 'Episodio 10 (La autoridad - El virus)', video: 'https://drive.google.com/file/d/13r_JtGKRWavvmIqxFkU4XJnXcNlOltC9/preview' },
    { id: '11', title: 'Episodio 11 (El pony - El héroe)', video: 'https://drive.google.com/file/d/1bEpeMkxKz2hFiecaImOXdb3qkKfKT_iM/preview' },
    { id: '12', title: 'Episodio 12 (El sueño - El secuaz)', video: 'https://drive.google.com/file/d/1M-gZGISCNQLz9jEGlJGVF0L60SOPpLmP/preview' },
    { id: '13', title: 'Episodio 13 (La foto - La etiqueta)', video: 'https://drive.google.com/file/d/1UMt5nG8L_E2aajDiNH1agrwuMH-ALM44/preview' },
    { id: '14', title: 'Episodio 14 (La tormenta - La lección)', video: 'https://drive.google.com/file/d/1BlYJElysaNJAWIrkiLPJbhsjOLj2iMJX/preview' },
    { id: '15', title: 'Episodio 15 (El juego - El límite)', video: 'https://drive.google.com/file/d/1XoqmfD5SjPr-6H4or6DW7qzwlfbDjxWE/preview' },
    { id: '16', title: 'Episodio 16 (La promesa - La voz)', video: 'https://drive.google.com/file/d/1Jb-ZR6HEXkWRQhcX422XE37mqvvFX-hx/preview' },
    { id: '17', title: 'Episodio 17 (El castillo - El estéreo portátil)', video: 'https://drive.google.com/file/d/1krvl0U-9Ak6rgzjvV-ZBSbwgkSMatvKk/preview' },
    { id: '18', title: 'Episodio 18 (La película - Los chicos suéter)', video: 'https://drive.google.com/file/d/1mTUw8H-iMkyowwhYZYtBUxY2k5BUyQV_/preview' },
    { id: '19', title: 'Episodio 19 (El internet - El plan)', video: 'https://drive.google.com/file/d/1fQB0e4BJr7dyV98S0C2wJHyZo6hsqlv3/preview' },
    { id: '20', title: 'Episodio 20 (El mundo - El final)', video: 'https://drive.google.com/file/d/1cko9XBm7bVKV7jouX4f98-HvPqFGB4bJ/preview' },
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
        <Heading as="h1">El Increíble Mundo de Gumball - Temporada 2</Heading>
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
              to={`/series/el_increible_mundo_de_gumball/t2/${prevEpisode.id}`}
              colorScheme="teal"
              variant="outline"
            >
              Capítulo Anterior
            </Button>
          )}
          {nextEpisode && (
            <Button
              as={Link}
              to={`/series/el_increible_mundo_de_gumball/t2/${nextEpisode.id}`}
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
              to={`/series/el_increible_mundo_de_gumball/t2/${ep.id}`}
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

export default ElIncreibleMundoDeGumballT2;
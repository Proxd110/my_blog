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

function HoraDeAventuraT4() {
  const episodes = [
    { id: '1', title: 'Episodio 1 (Caliente al tacto)', video: 'https://drive.google.com/file/d/1O4vwbAPvsyGN9QVPW19uS550wDc54nVL/preview' },
    { id: '2', title: 'Episodio 2 (Cinco fabulas cortas)', video: 'https://drive.google.com/file/d/1ycVPVY2uCIU0uuW1hY9Oeec0iZk0wnOx/preview' },
    { id: '3', title: 'Episodio 3 (Locos en la red)', video: 'https://drive.google.com/file/d/1X02U4Xf2b1HWQSuL7rNkp2H9wgBwry7K/preview' },
    { id: '4', title: 'Episodio 4 (Sueño de amor)', video: 'https://drive.google.com/file/d/1U9dHUtHL0U6TFQHhiO1vevSiC0yIgFIk/preview' },
    { id: '5', title: 'Episodio 5 (De regreso a nocheosfera)', video: 'https://drive.google.com/file/d/12tPG7shntUcHenXaLkNBjReEx_XkeTPn/preview' },
    { id: '6', title: 'Episodio 6 (La monstruito de papi)', video: 'https://drive.google.com/file/d/1NFlyWLJlidek_A9oymf5h7mSNv_JqrXr/preview' },
    { id: '7', title: 'Episodio 7 (En tuz zapatos)', video: 'https://drive.google.com/file/d/1quBjN5zsL9UjNsbyqfQ4jfr2Gm0R7Xc1/preview' },
    { id: '8', title: 'Episodio 8 (El lobo apapacho)', video: 'https://drive.google.com/file/d/1sup1tLF7D7hg04gA8z7cCSw8NIoQcrNY/preview' },
    { id: '9', title: 'Episodio 9 (La princesa monstruo)', video: 'https://drive.google.com/file/d/1S9PJRq9UfEnZ5CBGxQfvzVrC60G1ICt5/preview' },
    { id: '10', title: 'Episodio 10 (Goliad)', video: 'https://drive.google.com/file/d/1LrPe_Hb9A-41pQJ5X_j6qlOLyWSzAxO_/preview' },
    { id: '11', title: 'Episodio 11 (Más allá del reino terrenal)', video: 'https://drive.google.com/file/d/10_8qJ5AOPxJAr4NxIcRAYaZ6KhjmD913/preview' },
    { id: '12', title: 'Episodio 12 (¡Te tengo!)', video: 'https://drive.google.com/file/d/1-XRDI6aXg58QdCWHqxe-8gB4_1akUgQs/preview' },
    { id: '13', title: 'Episodio 13 (Princesa Galleta)', video: 'https://drive.google.com/file/d/1VyIa43mPCQeq0AUq7b9abAdWMlQRq6BG/preview' },
    { id: '14', title: 'Episodio 14 (La guerra de las tarjetas)', video: 'https://drive.google.com/file/d/1nOs5sm3XVVna5-vjwLCGFXVQ7VZyGGEV/preview' },
    { id: '15', title: 'Episodio 15 (Hijos de marte)', video: 'https://drive.google.com/file/d/1LLvHEzzZ16qawe2TujF2QR20RzPwnTkO/preview' },
    { id: '16', title: 'Episodio 16 (Fuego inestable)', video: 'https://drive.google.com/file/d/1m8iHBbodbkL07DgD-nvkyhfm8SdHLuGt/preview' },
    { id: '17', title: 'Episodio 17 (BMO en blanco y negro)', video: 'https://drive.google.com/file/d/14tlFgWGtxw40gI2L8a8wn8v2uzkhFMxH/preview' },
    { id: '18', title: 'Episodio 18 (Rey gusano)', video: 'https://drive.google.com/file/d/1XI3oPp8VfTSUCtTITjI0fxpRxVoNQD2x/preview' },
    { id: '19', title: 'Episodio 19 (Dama y arcoiris)', video: 'https://drive.google.com/file/d/1XSCumRHtdTUn2fXKsN80LysTfSiihOBH/preview' },
    { id: '20', title: 'Episodio 20 (¡Tú me hiciste!)', video: 'https://drive.google.com/file/d/1RVdL7mn3iQKWzBaKN92DK8T_u1soUZyY/preview' },
    { id: '21', title: 'Episodio 21 (Quien podría ganar)', video: 'https://drive.google.com/file/d/1JiB8C83vZo-TaKXciicqZEls1jZBykAK/preview' },
    { id: '22', title: 'Episodio 22 (Punto de ignición)', video: 'https://drive.google.com/file/d/1s2MFy1vtLmXNXTCBI3K_EqmuXx04Pd4i/preview' },
    { id: '23', title: 'Episodio 23 (Duramente fácil)', video: 'https://drive.google.com/file/d/1mhjF5YsvRAhPKWwn2mGFbOGMQd2IgZc8/preview' },
    { id: '24', title: 'Episodio 24 (El reinado de los Gunthers)', video: 'https://drive.google.com/file/d/1H7GHAvWpDqvvEeMDciA2OzMFglVf8UaB/preview' },
    { id: '25', title: 'Episodio 25 (Te recuerdo)', video: 'https://drive.google.com/file/d/11NfGLG7cR-l2-ZP3LfggCRym44vxWXba/preview' },
    { id: '26', title: 'Episodio 26 (El Lich)', video: 'https://drive.google.com/file/d/10bGzcrx_JSth3A8HVwlBX9LM3QCBjuGU/preview' },
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
        <Heading as="h1">Hora de Aventura - Temporada 4</Heading>
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
              to={`/series/hora_de_aventura/t4/${prevEpisode.id}`}
              colorScheme="teal"
              variant="outline"
            >
              Capítulo Anterior
            </Button>
          )}
          {nextEpisode && (
            <Button
              as={Link}
              to={`/series/hora_de_aventura/t4/${nextEpisode.id}`}
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
              to={`/series/hora_de_aventura/t4/${ep.id}`}
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

export default HoraDeAventuraT4;
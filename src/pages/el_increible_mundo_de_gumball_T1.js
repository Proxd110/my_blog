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

function ElIncreibleMundoDeGumballT1() {
  const episodes = [
    { id: '1', title: 'Episodio 1 (El responsable - El DVD)', video: 'https://drive.google.com/file/d/1zQnxR0SYDBeqsW_Ratuw6F5zuy7gBDsF/preview' },
    { id: '2', title: 'Episodio 2 (El tercero - La deuda)', video: 'https://drive.google.com/file/d/1NTy658qnZzgNIek8E_nGchpuVzf9XZWF/preview' },
    { id: '3', title: 'Episodio 3 (El fin - El vestido)', video: 'https://drive.google.com/file/d/1WIQg-UkcUM3ZDYIFvB7hjXHhr_nix362/preview' },
    { id: '4', title: 'Episodio 4 (La busqueda - La cuchara)', video: 'https://drive.google.com/file/d/1dcTTfx74dgKqBHbsscsNHhk7HMM0CDMh/preview' },
    { id: '5', title: 'Episodio 5 (La presión - La pintura)', video: 'https://drive.google.com/file/d/1dMcNLRyRyOPa_awIPQkK4QGAtdrIthaf/preview' },
    { id: '6', title: 'Episodio 6 (El más flojo - La fantasma)', video: 'https://drive.google.com/file/d/1cFJUak7SDfWkNkPfWoJ5_ryb7t4-EXMu/preview' },
    { id: '7', title: 'Episodio 7 (El misterio - La broma)', video: 'https://drive.google.com/file/d/1EnuJBQDNoUVUi72Ga7SPnWEPuDL0rUcp/preview' },
    { id: '8', title: 'Episodio 8 (El karateca - El beso)', video: 'https://drive.google.com/file/d/1veAY6hQ3ca8FGgnAOhgyYAYw_vtF9ZwE/preview' },
    { id: '9', title: 'Episodio 9 (La fiesta - El reembolso)', video: 'https://drive.google.com/file/d/1QBoTEo_aZA7T6Rqp6M0RC51bHAc_L8LI/preview' },
    { id: '10', title: 'Episodio 10 (El robot - El día de campo)', video: 'https://drive.google.com/file/d/1qTXRQPUBbU5YD3vnuVZqnij1VigIVkf5/preview' },
    { id: '11', title: 'Episodio 11 (Los bobos - El secreto)', video: 'https://drive.google.com/file/d/15Qkn1shALkKMR321FMTZDfPoSA7bDwDK/preview' },
    { id: '12', title: 'Episodio 12 (El fantasma - El genio)', video: 'https://drive.google.com/file/d/1TSVXsVE3HtYRIgVRy6cmd02UGj_q8kcU/preview' },
    { id: '13', title: 'Episodio 13 (El calcetín - El bigote)', video: 'https://drive.google.com/file/d/1qKZgT5683CiovvyfqtS0Qy8tb6ckBwh2/preview' },
    { id: '14', title: 'Episodio 14 (La cita - El club)', video: 'https://drive.google.com/file/d/1TaX9ODtXfhiPj7wObI2pR0OtwuI5D_Wt/preview' },
    { id: '15', title: 'Episodio 15 (La varita mágica - Amigo Simian)', video: 'https://drive.google.com/file/d/1k6qEEzx5aZP-RKLG_BkfUGEmadkL4Xkc/preview' },
    { id: '16', title: 'Episodio 16 (El auto - Embrujado)', video: 'https://drive.google.com/file/d/1sNenlYk2niqXuVTrIlx1G6sm8OLnGhmS/preview' },
    { id: '17', title: 'Episodio 17 (El horno de microondas - La entrometida)', video: 'https://drive.google.com/file/d/12SednpwQ50dciZq49QzRTN659XJmYsio/preview' },
    { id: '18', title: 'Episodio 18 (El casco - La pelea)', video: 'https://drive.google.com/file/d/1slb2Y0dCGOECNTzaV11JVc5DY1c6dODB/preview' },
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
              to={`/series/el_increible_mundo_de_gumball/t1/${prevEpisode.id}`}
              colorScheme="teal"
              variant="outline"
            >
              Capítulo Anterior
            </Button>
          )}
          {nextEpisode && (
            <Button
              as={Link}
              to={`/series/el_increible_mundo_de_gumball/t1/${nextEpisode.id}`}
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
              to={`/series/el_increible_mundo_de_gumball/t1/${ep.id}`}
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

export default ElIncreibleMundoDeGumballT1;
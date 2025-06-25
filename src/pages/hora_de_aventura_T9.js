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

function HoraDeAventuraT9() {
  const episodes = [
    { id: '1', title: 'Episodio 1 (Orbe)', video: 'https://drive.google.com/file/d/1pCGfRkHq9uIM5awJsZqwKXtEYb3GOOLe/preview' },
    { id: '2', title: 'Episodio 2 (Ganchos de Cielo)', video: 'https://drive.google.com/file/d/1uvELH78A2Fhf92Icak42NpVMd04xRznt/preview' },
    { id: '3', title: 'Episodio 3 (Hecho a la Medida)', video: 'https://drive.google.com/file/d/1U2ndG4G6F1khVYvgsl5C0QSASlHRMurM/preview' },
    { id: '4', title: 'Episodio 4 (Luz Invernal)', video: 'https://drive.google.com/file/d/1oN64wfBPho5P1TZospO-gZYFSbi9YtvV/preview' },
    { id: '5', title: 'Episodio 5 (Nublado)', video: 'https://drive.google.com/file/d/1_7qNi2JoTVUq8mktLsie-M34PKQexiZv/preview' },
    { id: '6', title: 'Episodio 6 (Saliva Central)', video: 'https://drive.google.com/file/d/1M5MGE8ecUCQC2YhWmWXyrZ74HrXLoBLx/preview' },
    { id: '7', title: 'Episodio 7 (Guerrero Feliz)', video: 'https://drive.google.com/file/d/1GiK1ysmnwfeOfpQA3fKj5-fkKfO3zJdM/preview' },
    { id: '8', title: 'Episodio 8 (Corazón de Héroe)', video: 'https://drive.google.com/file/d/1KJGxRn7NhMXdZuVuGIz87_JtXCUsq3zq/preview' },
    { id: '9', title: 'Episodio 9 (Ganchos de Cielo II)', video: 'https://drive.google.com/file/d/1hkqD_zBS8GnucfWFUm24Zn9BpWnKLAy0/preview' },
    { id: '10', title: 'Episodio 10 (Abstracto)', video: 'https://drive.google.com/file/d/1-1Dc-jihUbUE25mNJcgr4KoA9CL461By/preview' },
    { id: '11', title: 'Episodio 11 (Historias)', video: 'https://drive.google.com/file/d/15WWhydEX-mZBcyVn5haaDotGDpgAo1IQ/preview' },
    { id: '12', title: 'Episodio 12 (Fionna y Cake y Fionna)', video: 'https://drive.google.com/file/d/13KQPRLzc_4CieaQSGdn3esE9PEFk0qEi/preview' },
    { id: '13', title: 'Episodio 13 (Susurros)', video: 'https://drive.google.com/file/d/1YjQrrvRcu11EWHCHTpo-G5A78Afw8ZLf/preview' },
    { id: '14', title: 'Episodio 14 (Doble Cara)', video: 'https://drive.google.com/file/d/1i8rf3iAnS65ZuhJ6JW1hSO0vhF_lDsWj/preview' },
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
        <Heading as="h1">Hora de Aventura - Temporada 9</Heading>
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
              to={`/series/hora_de_aventura/t9/${prevEpisode.id}`}
              colorScheme="teal"
              variant="outline"
            >
              Capítulo Anterior
            </Button>
          )}
          {nextEpisode && (
            <Button
              as={Link}
              to={`/series/hora_de_aventura/t9/${nextEpisode.id}`}
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
              to={`/series/hora_de_aventura/t9/${ep.id}`}
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

export default HoraDeAventuraT9;
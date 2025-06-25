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

function HoraDeAventuraT10() {
  const episodes = [
    { id: '1', title: 'Episodio 1 (La Cacería Salvaje)', video: 'https://drive.google.com/file/d/1ipruMPQP-rw6qHlEBsODTNjC9Z5bYW6Y/preview' },
    { id: '2', title: 'Episodio 2 (BMO Siempre Cerrando)', video: 'https://drive.google.com/file/d/1Rusj6ONKGpDYlV3UGHBcYL6IRICF8_4x/preview' },
    { id: '3', title: 'Episodio 3 (El Hijo del Oso Rapero)', video: 'https://drive.google.com/file/d/1LXsFnMNZhP_JD1DyLOe_jzTVzMYbu3-A/preview' },
    { id: '4', title: 'Episodio 4 (Bonnibel Dulce Goma)', video: 'https://drive.google.com/file/d/1UKTgoQxZGHO7mVL6P1boAD5ojUXLXD_E/preview' },
    { id: '5', title: 'Episodio 5 (Diecisiete)', video: 'https://drive.google.com/file/d/1kZSnlxYsU3aXCYbJynHi9enD91Qe6Zlm/preview' },
    { id: '6', title: 'Episodio 6 (Anillo de Fuego)', video: 'https://drive.google.com/file/d/1BRL-4pNUfpdArdpQ25u8-SxQZUUnP1bT/preview' },
    { id: '7', title: 'Episodio 7 (Marcy y Hunson)', video: 'https://drive.google.com/file/d/1FK4gUzf4WTRYTz_f3bWBIvsPh9_Gtwn1/preview' },
    { id: '8', title: 'Episodio 8 (La Primera Investigación)', video: 'https://drive.google.com/file/d/11T9StnIankixlrtaHWBD5YT6RYZOzOZs/preview' },
    { id: '9', title: 'Episodio 9 (Blenanas)', video: 'https://drive.google.com/file/d/1I0HSKdf-lwDZ8RS1VybXEOPRQ-x9-xm1/preview' },
    { id: '10', title: 'Episodio 10 (Jake el Niño Estrella)', video: 'https://drive.google.com/file/d/1D2Js2cGJMM9nGhieOh9waju2aoZzO4Ah/preview' },
    { id: '11', title: 'Episodio 11 (El Templo de Marte)', video: 'https://drive.google.com/file/d/1DZ6AibqbaE53CXcsSG_19qU8GYtVTrYZ/preview' },
    { id: '12', title: 'Episodio 12 (Gumbaldia)', video: 'https://drive.google.com/file/d/1CWYttEfkG0ziRZJ3xEvHGHf_wcFxxjxD/preview' },
    { id: '13', title: 'Episodio 13 - 16 (¡Ven Conmigo!)', video: 'https://drive.google.com/file/d/1ECIYPBc89JX59MnCpVt6OnmOoF2yxCYA/preview' },
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
        <Heading as="h1">Hora de Aventura - Temporada 10</Heading>
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
              to={`/series/hora_de_aventura/t10/${prevEpisode.id}`}
              colorScheme="teal"
              variant="outline"
            >
              Capítulo Anterior
            </Button>
          )}
          {nextEpisode && (
            <Button
              as={Link}
              to={`/series/hora_de_aventura/t10/${nextEpisode.id}`}
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
              to={`/series/hora_de_aventura/t10/${ep.id}`}
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

export default HoraDeAventuraT10;
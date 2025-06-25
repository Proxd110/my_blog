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

function HoraDeAventuraT8() {
  const episodes = [
    { id: '1', title: 'Episodio 1 (Rompió su corona)', video: 'https://drive.google.com/file/d/19SeeNzx6REr3JpzRmoAyJGSSl1T76iau/preview' },
    { id: '2', title: 'Episodio 2 (No mires)', video: 'https://drive.google.com/file/d/1Rz889nlP2FtR2EPbv4VwmxAsBXfUKiVO/preview' },
    { id: '3', title: 'Episodio 3 (Más allá de la gruta)', video: 'https://drive.google.com/file/d/1jz3CIO_od0i8LH9ruCpkp4spu27SC7ws/preview' },
    { id: '4', title: 'Episodio 4 (Lady Arcoiris y la dimensión de Cristal)', video: 'https://drive.google.com/file/d/1H3oSh5rdMWQ40X9FPiLM0G3WGnMjfeLG/preview' },
    { id: '5', title: 'Episodio 5 (Soy una espada)', video: 'https://drive.google.com/file/d/1eRr8zLNNyoBJt3uS7pl0WcCWW21yOH6u/preview' },
    { id: '6', title: 'Episodio 6 (Canelita)', video: 'https://drive.google.com/file/d/1cSBCkdzsPk5vHc5xatGDUOgI7FIuW2vo/preview' },
    { id: '7', title: 'Episodio 7 (Hombre normal - Componer (Esta en ingles))', video: 'https://drive.google.com/file/d/1s6eq1XBc8k08BiicgBICqJWS3vmh4EM8/preview' },
    { id: '8', title: 'Episodio 8 (Elemental)', video: 'https://drive.google.com/file/d/1tT0WyToFYBUQR2rh_KMJ75X8PZWwgDkD/preview' },
    { id: '9', title: 'Episodio 9 (Cinco tablas cortas)', video: 'https://drive.google.com/file/d/1kGcB8pMwrU4gFu8iQmYwVK1e-2roNfF7/preview' },
    { id: '10', title: 'Episodio 10 (El agujero musical)', video: 'https://drive.google.com/file/d/1Q0Fo2sblTvXF04bJJXo7v70b9WztvybL/preview' },
    { id: '11', title: 'Episodio 11 (Guerra de cartas con padre e hija)', video: 'https://drive.google.com/file/d/1IqwSChB74y0FoINvc-Lg2rlJroi-l3B4/preview' },
    { id: '12', title: 'Episodio 12 (Preinicio)', video: 'https://drive.google.com/file/d/1koiYqnGFS1BNjqX2cleNjY224eesOFFb/preview' },
    { id: '13', title: 'Episodio 13 (Reinicio)', video: 'https://drive.google.com/file/d/1SoLuKYbeon1dmX_FXLQEjJLeeFwppeC9/preview' },
    { id: '14', title: 'Episodio 14 (Dos espadas)', video: 'https://drive.google.com/file/d/1cX9ju6v25OsmiRfSnHl66o2u2zuvEkZQ/preview' },
    { id: '15', title: 'Episodio 15 (No hagas daño)', video: 'https://drive.google.com/file/d/1QZlQJV7bvY1w3YjdvGNZc_THS9WyxS3c/preview' },
    { id: '16', title: 'Episodio 16 (Ruedas)', video: 'https://drive.google.com/file/d/1XxUe5K_X_iZgTNCDTPfquPPaWxdEyUkB/preview' },
    { id: '17', title: 'Episodio 17 (Alta extrañeza (o Gran Extrañeza))', video: 'https://drive.google.com/file/d/1mjQj7iqEQMLZed-0pSB3DO7ftHPCaD-0/preview' },
    { id: '18', title: 'Episodio 18 (Caballo y balón)', video: 'https://drive.google.com/file/d/1RYRy2uVPFGEpg5GrCm76oASlXd45GWHz/preview' },
    { id: '19', title: 'Episodio 19 (El poder de las gominolas (Los dulces tienen poder) (Agregar - No Disponible)', video: 'https://drive.google.com/file/d/placeholder/preview' },
    { id: '20', title: 'Episodio 20 (Islas, parte 1: La invitación)', video: 'https://drive.google.com/file/d/1Tex8QvCsI6VT-2T-APagShYHbgH4SQcJ/preview' },
    { id: '21', title: 'Episodio 21 (Islas, parte 2: Whipple el dragón feliz)', video: 'https://drive.google.com/file/d/12VYPLj-xX2_lOHUXIJO5ZW_3hhGELLRD/preview' },
    { id: '22', title: 'Episodio 22 (Islas, parte 3: Isla misteriosa)', video: 'https://drive.google.com/file/d/1MzTA1TaH-DzyLeOTRgH30sckLbDJYTX1/preview' },
    { id: '23', title: 'Episodio 23 (Islas, parte 4: Recursos imaginarios)', video: 'https://drive.google.com/file/d/1O17ZDWToDHDLMbBIvEc-dgeXa2JsSZs9/preview' },
    { id: '24', title: 'Episodio 24 (Islas, parte 5: Escondite)', video: 'https://drive.google.com/file/d/1qc5Psq-EF3M-XNlzZSsoPuxAUZjPaV85/preview' },
    { id: '25', title: 'Episodio 25 (Islas, parte 6: Min y Marty)', video: 'https://drive.google.com/file/d/15-v6v2RRrL1XFkdGA8m-6eVDNjWlAbNO/preview' },
    { id: '26', title: 'Episodio 26 (Islas, parte 7: Ayudantes)', video: 'https://drive.google.com/file/d/1TNiqKbv-jyx577-Oehwr7YAXFDYiaijF/preview' },
    { id: '27', title: 'Episodio 27 (Islas, parte 8: Niebla luminosa)', video: 'https://drive.google.com/file/d/1C4iznKeaxfRs4hJ7y9c82Ro-Co0fqHM6/preview' },
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
        <Heading as="h1">Hora de Aventura - Temporada 8</Heading>
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
              to={`/series/hora_de_aventura/t8/${prevEpisode.id}`}
              colorScheme="teal"
              variant="outline"
            >
              Capítulo Anterior
            </Button>
          )}
          {nextEpisode && (
            <Button
              as={Link}
              to={`/series/hora_de_aventura/t8/${nextEpisode.id}`}
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
              to={`/series/hora_de_aventura/t8/${ep.id}`}
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

export default HoraDeAventuraT8;
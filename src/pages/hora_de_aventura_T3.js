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

function HoraDeAventuraT3() {
  const episodes = [
    { id: '1', title: 'Episodio 1 (La conquista de la lindura)', video: 'https://drive.google.com/file/d/1fUIOb7RDtBwjKruf7w4Ed-8Okabk9BMs/preview' },
    { id: '2', title: 'Episodio 2 (Morituri te saludamos)', video: 'https://drive.google.com/file/d/1L_C0z6H5Nn_m_7fYI74pTPMaB-P_5_q8/preview' },
    { id: '3', title: 'Episodio 3 (El recuerdo de un recuerdo)', video: 'https://drive.google.com/file/d/1usJ1eZpODgZh0sdFzHAQwhT3tPzO07ui/preview' },
    { id: '4', title: 'Episodio 4 (El sicario)', video: 'https://drive.google.com/file/d/1aviHPn-3dzF52txeke-d0kjmELTTkOJm/preview' },
    { id: '5', title: 'Episodio 5 (Demasiado joven)', video: 'https://drive.google.com/file/d/12gQfToLKVwR54sousPQKfuEWq5xiZ8Dh/preview' },
    { id: '6', title: 'Episodio 6 (El monstruo)', video: 'https://drive.google.com/file/d/1hvuqOOdn_6MCHPf-Bm0M-bZGMbTF2m9-/preview' },
    { id: '7', title: 'Episodio 7 (Congelados)', video: 'https://drive.google.com/file/d/1Min-x7Vb6RVmqO2SrMELpk15lCmzy1ha/preview' },
    { id: '8', title: 'Episodio 8 (Batalla mágica)', video: 'https://drive.google.com/file/d/1RxkNOCfUwXNWFD4qq9ioIDrJ-8FFQpZv/preview' },
    { id: '9', title: 'Episodio 9 (Hora de aventura con Fionna y Cake)', video: 'https://drive.google.com/file/d/1drkyJ6nLvD8a2SB0LZ956pemT5h5n733/preview' },
    { id: '10', title: 'Episodio 10 (Lo que estaba perdido)', video: 'https://drive.google.com/file/d/1gQawTqMK-h-Ss5rff0Xyo4lvlIj32PgT/preview' },
    { id: '11', title: 'Episodio 11 (Ladrón de manzanas)', video: 'https://drive.google.com/file/d/1RCHRSPDhF1Z0gWaE0fTTFmWNQXNtjU02/preview' },
    { id: '12', title: 'Episodio 12 (Escalofríos)', video: 'https://drive.google.com/file/d/1LrdVknJm-oFdnTIzu4qLVRExeBwNydUR/preview' },
    { id: '13', title: 'Episodio 13 (De mal en peor)', video: 'https://drive.google.com/file/d/1D-WkN0NAk4VebaIl7i7vUjXgoBhuhzuB/preview' },
    { id: '14', title: 'Episodio 14 (Bellotopia)', video: 'https://drive.google.com/file/d/19n3H_XoQxss2OStBnUpa6PX18GY0BTvi/preview' },
    { id: '15', title: 'Episodio 15 (Nadie te escucha)', video: 'https://drive.google.com/file/d/1zJmDxOfi4_uwLoqyEYIhskpuYItc7ghu/preview' },
    { id: '16', title: 'Episodio 16 (Jake contra Me Miau)', video: 'https://drive.google.com/file/d/1usRH6KRCw7KCNVBk9oYs-WBmw4ScDG7n/preview' },
    { id: '17', title: 'Episodio 17 (Gracias)', video: 'https://drive.google.com/file/d/1RVFygzPeiIwd63UplYmEmu2mjrdmN5m8/preview' },
    { id: '18', title: 'Episodio 18 (La nueva frontera)', video: 'https://drive.google.com/file/d/12q5i4OMSUDd_3iikFFXh7Uk7A1Fc_g5i/preview' },
    { id: '19', title: 'Episodio 19 (Secretos navideños Parte 1)', video: 'https://drive.google.com/file/d/1uSfibRJlCtaym9L6_dpDEhbi0aQxDq4w/preview' },
    { id: '20', title: 'Episodio 20 (Secretos navideños Parte 2)', video: 'https://drive.google.com/file/d/1KLxm5Se3QB1GwPkMXjQsG2h7f0YTgJ3I/preview' },
    { id: '21', title: 'Episodio 21 (El closet de Marceline)', video: 'https://drive.google.com/file/d/1wFGPcZSDNkVv-aqfItQzaM0-gvGKKiLG/preview' },
    { id: '22', title: 'Episodio 22 (Pedro papel)', video: 'https://drive.google.com/file/d/1HfuDKiaenY85F-wMdk8gTjdblYm8pn7S/preview' },
    { id: '23', title: 'Episodio 23 (A mi manera)', video: 'https://drive.google.com/file/d/1PcQ6vA8yTrlVWm0RC67PzPEDyPuLvvMX/preview' },
    { id: '24', title: 'Episodio 24 (La princesa fantasma)', video: 'https://drive.google.com/file/d/1sc0ovB2PLzO3xc0YUH_p2Vh7lGlkqqF7/preview' },
    { id: '25', title: 'Episodio 25 (El calabozo de papá)', video: 'https://drive.google.com/file/d/1NHduXWQ2ndyuTy48xsCrHIDTfasy9V6x/preview' },
    { id: '26', title: 'Episodio 26 (Incendio)', video: 'https://drive.google.com/file/d/1g_KlZAZ_TKIol_WVaW2Q23YaA-hwEeID/preview' },
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
        <Heading as="h1">Hora de Aventura - Temporada 3</Heading>
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
              to={`/series/hora_de_aventura/t3/${prevEpisode.id}`}
              colorScheme="teal"
              variant="outline"
            >
              Capítulo Anterior
            </Button>
          )}
          {nextEpisode && (
            <Button
              as={Link}
              to={`/series/hora_de_aventura/t3/${nextEpisode.id}`}
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
              to={`/series/hora_de_aventura/t3/${ep.id}`}
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

export default HoraDeAventuraT3;
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

function ElIncreibleMundoDeGumballT5() {
  const episodes = [
    { id: '1', title: 'Episodio 1 (La repetición)', video: 'https://drive.google.com/file/d/1ijTQS8-JnGFu6P9U_U50fhz875a5nquA/preview' },
    { id: '2', title: 'Episodio 2 (Las historias)', video: 'https://drive.google.com/file/d/1kSnmK9oPyYq21wXEyFycop5df-Y-Kadt/preview' },
    { id: '3', title: 'Episodio 3 (El chico)', video: 'https://drive.google.com/file/d/1IDDaZtp5LDCf4qUKsilqIbGN1rbJ23HZ/preview' },
    { id: '4', title: 'Episodio 4 (El aburrimiento)', video: 'https://drive.google.com/file/d/1FADwZAtHm9_8flQoeJT-2eaNYiD9Y8u7/preview' },
    { id: '5', title: 'Episodio 5 (La visión)', video: 'https://drive.google.com/file/d/1Y3A3XoEXA0I2_pqQJrixyAOPfNUiKmvW/preview' },
    { id: '6', title: 'Episodio 6 (Las opciones)', video: 'https://drive.google.com/file/d/1iSHV8AOM5wUVjeVUcoh-maYlTtjCdugw/preview' },
    { id: '7', title: 'Episodio 7 (El código)', video: 'https://drive.google.com/file/d/1_ukwd1TfGNiQ1Et3CxGVJa9ze7gGy9uL/preview' },
    { id: '8', title: 'Episodio 8 (La prueba)', video: 'https://drive.google.com/file/d/1AgAtWsF7u_N7nH3U54qRF_HaFGO7LPEs/preview' },
    { id: '9', title: 'Episodio 9 (El deslizamiento - El comando)', video: 'https://drive.google.com/file/d/1QUXwmB_Ju8XNKNWO2P2z9qOTj_6g93hP/preview' },
    { id: '10', title: 'Episodio 10 (Los imitadores - La papa)', video: 'https://drive.google.com/file/d/1XE8UhiRihhmVgOjKx0a12MV0lZ3RUrcr/preview' },
    { id: '11', title: 'Episodio 11 (El drama - El exterior)', video: 'https://drive.google.com/file/d/1pvB5QFzWSddyZtqaU74ywUjWLxZZc_xh/preview' },
    { id: '12', title: 'Episodio 12 (El jarrón)', video: 'https://drive.google.com/file/d/1ObQVackKiAKl6yG6hgsVRRThOE7fCk14/preview' },
    { id: '13', title: 'Episodio 13 (El casamentero)', video: 'https://drive.google.com/file/d/1x1b92LZb_-1gyJd6aZaVTx65r1RH2X-o/preview' },
    { id: '14', title: 'Episodio 14 (La caja)', video: 'https://drive.google.com/file/d/1-VfsilQNalFZmYGnnAk7aYly7zyH1eux/preview' },
    { id: '15', title: 'Episodio 15 (La consola)', video: 'https://drive.google.com/file/d/12QFomZvFEHmDN6HSQ6BZUNzkl5E8BEUV/preview' },
    { id: '16', title: 'Episodio 16 (El Ollie)', video: 'https://drive.google.com/file/d/1IXhM7yT6G-l3SC1DAK-nkqYWhRIKl4HT/preview' },
    { id: '17', title: 'Episodio 17 (El farsante)', video: 'https://drive.google.com/file/d/1izruTQ_HKQACAs8Rqcxnc-Ry9TFphP90/preview' },
    { id: '18', title: 'Episodio 18 (El ciclo - Las estrellas)', video: 'https://drive.google.com/file/d/1DUDnOgLAoLwYrbbz14xQFFpzKKBmTu2m/preview' },
    { id: '19', title: 'Episodio 19 (Las calificaciones - La dieta)', video: 'https://drive.google.com/file/d/11G-5PmhdmCKmi_hNqsLu4HQwKtrEc6TW/preview' },
    { id: '20', title: 'Episodio 20 (El ex - El hechicero)', video: 'https://drive.google.com/file/d/1X0kQEouVCBqU5TOHViVW6KFOh4r7T2wQ/preview' },
    { id: '21', title: 'Episodio 21 (El menú - El tío)', video: 'https://drive.google.com/file/d/1GC4E60SSLzS26nq_KXYY7M9Qr3X8Emoj/preview' },
    { id: '22', title: 'Episodio 22 (La rara - El robo)', video: 'https://drive.google.com/file/d/1FG6-2eZAOu4-9BOI0gUd40_OitR1_Oft/preview' },
    { id: '23', title: 'Episodio 23 (El canto)', video: 'https://drive.google.com/file/d/1U0KEOQIVMjdONIq86TbArJZ3swXLvjUb/preview' },
    { id: '24', title: 'Episodio 24 (El mejor)', video: 'https://drive.google.com/file/d/1806iosaQs--YS3o9DQ9CJ5HX3aZGgfIm/preview' },
    { id: '25', title: 'Episodio 25 (Lo peor)', video: 'https://drive.google.com/file/d/1hgywSdsD6ReLnzFMXtXAZqT_xrlZIHFq/preview' },
    { id: '26', title: 'Episodio 26 (El trato)', video: 'https://drive.google.com/file/d/1mXQZXqlNELHu5mtecmxLRcyuE_bJG9NL/preview' },
    { id: '27', title: 'Episodio 27 (Los pétalos)', video: 'https://drive.google.com/file/d/1DmijbRXCXLPddEXXbNY7iVE96EsOYIYS/preview' },
    { id: '28', title: 'Episodio 28 (La lista)', video: 'https://drive.google.com/file/d/1tPqy-jxgrrS9a0tAkOh3VOPRFFnBlO2n/preview' },
    { id: '29', title: 'Episodio 29 (El fastidio - La fila)', video: 'https://drive.google.com/file/d/1eGLULNLhhMbeoC_wMepBuiAMn9Ktdzgx/preview' },
    { id: '30', title: 'Episodio 30 (Las noticias)', video: 'https://drive.google.com/file/d/1RNWpBAVwwYUMAhW6eprnQzg-jO70QPLb/preview' },
    { id: '31', title: 'Episodio 31 (Las marionetas)', video: 'https://drive.google.com/file/d/1BtTJbr7tXPo7ziOvRqooLIEEG7Q1qjAF/preview' },
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
        <Heading as="h1">El Increíble Mundo de Gumball - Temporada 5</Heading>
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
              to={`/series/el_increible_mundo_de_gumball/t5/${prevEpisode.id}`}
              colorScheme="teal"
              variant="outline"
            >
              Capítulo Anterior
            </Button>
          )}
          {nextEpisode && (
            <Button
              as={Link}
              to={`/series/el_increible_mundo_de_gumball/t5/${nextEpisode.id}`}
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
              to={`/series/el_increible_mundo_de_gumball/t5/${ep.id}`}
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

export default ElIncreibleMundoDeGumballT5;
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

function HoraDeAventuraT7() {
  const episodes = [
    { id: '1', title: 'Episodio 1 (Bonnie y Neddy)', video: 'https://drive.google.com/file/d/1s7p-Xo9KRAjgkso2dMGe9D46OEzVfq0X/preview' },
    { id: '2', title: 'Episodio 2 (Alimañas)', video: 'https://drive.google.com/file/d/1HZRbRenZIF1aNu7YgrZz1ir-q5ZFB8Ya/preview' },
    { id: '3', title: 'Episodio 3 (Chiqui Cereza)', video: 'https://drive.google.com/file/d/1ONyTeM_mt0e8G6xLPcIGHddBs5q9ovPI/preview' },
    { id: '4', title: 'Episodio 4 (Mamá Dijo)', video: 'https://drive.google.com/file/d/1ZhCknstMutvKy0UNo110aHwBCEC9r2ZH/preview' },
    { id: '5', title: 'Episodio 5 (Fútbol)', video: 'https://drive.google.com/file/d/1iNt0gZ57EoXr5P_ia1HWL0HdpDz-_Ugn/preview' },
    { id: '6', title: 'Episodio 6 (Estacas Parte 1 - Marceline, La Reina de los Vampiros)', video: 'https://drive.google.com/file/d/1orVBEGhTFJcFKQbyZNq1dV6f15_pwyGD/preview' },
    { id: '7', title: 'Episodio 7 (Estacas Parte 2 - Todo Sigue Igual)', video: 'https://drive.google.com/file/d/1YBlG5go62HCKldrmrpmn-ZrjGBbKoycz/preview' },
    { id: '8', title: 'Episodio 8 (Estacas Parte 3 - Vampiros a Gogo)', video: 'https://drive.google.com/file/d/1IxQG3expGjqS06UtTCojhHXJiXpPBv8B/preview' },
    { id: '9', title: 'Episodio 9 (Estacas Parte 4 - Los Ojos de la Emperatriz)', video: 'https://drive.google.com/file/d/10hh2dWhEvzquPxU9BRsMb2CaCriFP0dO/preview' },
    { id: '10', title: 'Episodio 10 (Estacas Parte 5 - ¿Puedo Entrar?)', video: 'https://drive.google.com/file/d/1N5jKCvF29bu7ibE81mGP6EzrygViif_5/preview' },
    { id: '11', title: 'Episodio 11 (Estacas Parte 6 - Llevadla al Castillo)', video: 'https://drive.google.com/file/d/183RuKfQAovfkbW36fB7garAXOvjqlkCi/preview' },
    { id: '12', title: 'Episodio 12 (Estacas Parte 7 - Jaque Mate)', video: 'https://drive.google.com/file/d/1ZWs8l8teDs_FoEt_yT1RhWxhd3K4RnvN/preview' },
    { id: '13', title: 'Episodio 13 (Estacas Parte 8 - La Nube Oscura)', video: 'https://drive.google.com/file/d/1-w58q0lHs5hTKZWeGYm2OvrHjMPWP6xo/preview' },
    { id: '14', title: 'Episodio 14 / 15 (Cuanto Más Moe, Moe Sabes)', video: 'https://drive.google.com/file/d/1kRP5ML_FSx4TKmmTCWw6mGUeNyjbiDOf/preview' },
    { id: '15', title: 'Episodio 16 (Lluvia de Verano)', video: 'https://drive.google.com/file/d/1EMXRrSXjwcUZUqW4_E7Ag-tjA6i5LBKZ/preview' },
    { id: '16', title: 'Episodio 17 (Cara de Ángel)', video: 'https://drive.google.com/file/d/10V8A-zCGAz-DfynCNTbZ2O7q1j-6Tp9m/preview' },
    { id: '17', title: 'Episodio 18 (El Presidente Popoton Ha Desaparecido)', video: 'https://drive.google.com/file/d/1M_afajN6rrAhAfk96uWVwUCjOeyQWZ2f/preview' },
    { id: '18', title: 'Episodio 19 (Niña Ojisombra)', video: 'https://drive.google.com/file/d/1tMi1R35gSVxoKMH988eeCdoL18E2V0PG/preview' },
    { id: '19', title: 'Episodio 20 (Mal Rollo)', video: 'https://drive.google.com/file/d/1uR7sMHHspAp5dUMdB2vwUWvvcMmexTiv/preview' },
    { id: '20', title: 'Episodio 21 (Rey al Rescate)', video: 'https://drive.google.com/file/d/1uDfdyMB4VAa2c6XQSX0xf-3ke_p4heQE/preview' },
    { id: '21', title: 'Episodio 22 (Pillos)', video: 'https://drive.google.com/file/d/1XJ1plJXE7b-H_BVeQglSyQXZichOzbmR/preview' },
    { id: '22', title: 'Episodio 23 (Cruce de Mundos)', video: 'https://drive.google.com/file/d/1gP18goFNRxgfo_OxDFhwxhAtoP-9yUJ-/preview' },
    { id: '23', title: 'Episodio 24 (La Sala del Egreso)', video: 'https://drive.google.com/file/d/1pOnoXzom2xVhATQ9UH3vPYJlt9zLBuaB/preview' },
    { id: '24', title: 'Episodio 25 (El Encanto de la Flauta)', video: 'https://drive.google.com/file/d/1TuVAhAmuha-Mbr4VNNmxTCTJh32Po4qt/preview' },
    { id: '25', title: 'Episodio 26 (La Delgada Línea Amarilla)', video: 'https://drive.google.com/file/d/1-Z2mD7gu3sSvEYOtO5rlFQfXFwoEucDq/preview' },
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
        <Heading as="h1">Hora de Aventura - Temporada 7</Heading>
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
              to={`/series/hora_de_aventura/t7/${prevEpisode.id}`}
              colorScheme="teal"
              variant="outline"
            >
              Capítulo Anterior
            </Button>
          )}
          {nextEpisode && (
            <Button
              as={Link}
              to={`/series/hora_de_aventura/t7/${nextEpisode.id}`}
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
              to={`/series/hora_de_aventura/t7/${ep.id}`}
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

export default HoraDeAventuraT7;
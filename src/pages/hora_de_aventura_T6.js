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

function HoraDeAventuraT6() {
  const episodes = [
    { id: '1', title: 'Episodio 1 (Despierta)', video: 'https://drive.google.com/file/d/1z0kE4Zjn58Ge-7c6xgxSdo0hUidEWJEt/preview' },
    { id: '2', title: 'Episodio 2 (Escape de la ciudadela)', video: 'https://drive.google.com/file/d/1KNEYp5SLS4_O53nxpOMBf0Ve9EqRPJVq/preview' },
    { id: '3', title: 'Episodio 3 (James 2)', video: 'https://drive.google.com/file/d/1_ZWjCASkwIRaH2xC_PPx00YNHx0FAYG3/preview' },
    { id: '4', title: 'Episodio 4 (La torre)', video: 'https://drive.google.com/file/d/1k2exf0XQtWJ83Nizr1gKaX9Zgu_Ip4lp/preview' },
    { id: '5', title: 'Episodio 5 (Cara triste)', video: 'https://drive.google.com/file/d/1FCAo9YtlNgfETwdSXRbNd3gSTs27nZ2V/preview' },
    { id: '6', title: 'Episodio 6 (Brisa)', video: 'https://drive.google.com/file/d/1lC9UovyfFwUPvZ68QlYye2bsKvl60e7f/preview' },
    { id: '7', title: 'Episodio 7 (Cadena alimenticia)', video: 'https://drive.google.com/file/d/1J1XH3fnDNnjbbHsV7NlP7ofsWMMUvhAe/preview' },
    { id: '8', title: 'Episodio 8 (Muebles y carne)', video: 'https://drive.google.com/file/d/1mOq0h484GiW6RiWzVr18qHmgsDGubhe4/preview' },
    { id: '9', title: 'Episodio 9 (El príncipe que quería todo)', video: 'https://drive.google.com/file/d/1wzmKYUXm93ARAaEHxs3PBUz5K3DVBRCz/preview' },
    { id: '10', title: 'Episodio 10 (Algo grande)', video: 'https://drive.google.com/file/d/1xraCVHk07Zcw5UoaGFotHHu3QwZGBU7V/preview' },
    { id: '11', title: 'Episodio 11 (Hermano pequeño)', video: 'https://drive.google.com/file/d/1_IBGgR3TZfNSo--dqKoX49Psa-YA5TqY/preview' },
    { id: '12', title: 'Episodio 12 (Ocarina)', video: 'https://drive.google.com/file/d/1Nu0kuFwAGqIoLFbfhnqGSzOUt-rXcD_r/preview' },
    { id: '13', title: 'Episodio 13 (Gracias por las manzanas, Giuseppe)', video: 'https://drive.google.com/file/d/1qd_EcjYZ0F5ZWy75hYOCIpGbR3V-x-sw/preview' },
    { id: '14', title: 'Episodio 14 (El día de las princesas)', video: 'https://drive.google.com/file/d/1b60QmvRM2mkUWkIAJj6zR033RZpYoNtv/preview' },
    { id: '15', title: 'Episodio 15 (Némesis)', video: 'https://drive.google.com/file/d/12If4ah7kooLw5ap-ks8hrw9mesLM5W01/preview' },
    { id: '16', title: 'Episodio 16 (Joshua y Margaret)', video: 'https://drive.google.com/file/d/1heNftI3ibbbzfhSOiPiICe8lbHYFD2b6/preview' },
    { id: '17', title: 'Episodio 17 (Mosca fantasma)', video: 'https://drive.google.com/file/d/149_1NzuFpXLHWOGu9Czi3y9tXCa2aRCZ/preview' },
    { id: '18', title: 'Episodio 18 (En todo está Jake)', video: 'https://drive.google.com/file/d/1FlWHUfiYwrWVv2nKSZe2ag4o-Vph3T51/preview' },
    { id: '19', title: 'Episodio 19 (Eres tú)', video: 'https://drive.google.com/file/d/15MoC_C3zMCFffh1ATPdtPI6KsfM-q1NA/preview' },
    { id: '20', title: 'Episodio 20 (Jake el ladrillo)', video: 'https://drive.google.com/file/d/1d7ofjVidnxzGNCArD8sA6Ab464F-1qTV/preview' },
    { id: '21', title: 'Episodio 21 (Dentista)', video: 'https://drive.google.com/file/d/1sbnDwNtfGRU3Jv4FltfKEh5MkqUFxLS5/preview' },
    { id: '22', title: 'Episodio 22 (El enfriamiento)', video: 'https://drive.google.com/file/d/1TUbDWRCWTUJIhKTieM4J4NLfF_8zg-6N/preview' },
    { id: '23', title: 'Episodio 23 (Guerra de pijamas)', video: 'https://drive.google.com/file/d/1PaK6kn6S0bwgPFxNAWKqAAcVzPJ87bHX/preview' },
    { id: '24', title: 'Episodio 24 (Evergreen)', video: 'https://drive.google.com/file/d/1e3K0Fxcbwf6_ji2xoCpdv_qo2p-GX8g5/preview' },
    { id: '25', title: 'Episodio 25 (Plano astral)', video: 'https://drive.google.com/file/d/13cuSE3Qg_5S_oD7ajMjZDrc_Em12vIoz/preview' },
    { id: '26', title: 'Episodio 26 (Estrellas doradas)', video: 'https://drive.google.com/file/d/1IFSQJmi9OJidrACSKp7_RIGy_gfv1ReU/preview' },
    { id: '27', title: 'Episodio 27 (El visitante)', video: 'https://drive.google.com/file/d/1JWOBJ1LQ3ofF6NoyRyVTKIv3WcMRi2Jd/preview' },
    { id: '28', title: 'Episodio 28 (La montaña)', video: 'https://drive.google.com/file/d/1_0Mj-4onxQc06OTi2XT29ANIrATws8R6/preview' },
    { id: '29', title: 'Episodio 29 (Púrpura oscuro)', video: 'https://drive.google.com/file/d/1Q7bYgXKlkq410CSFh9jCxbnrkXKko2EC/preview' },
    { id: '30', title: 'Episodio 30 (Diario)', video: 'https://drive.google.com/file/d/1Y6nWw_nkhh-b0aEWjZqrL_qBRQrhpQj8/preview' },
    { id: '31', title: 'Episodio 31 (Nueces y lluvia)', video: 'https://drive.google.com/file/d/1kEayhTcbwOmN_Y6MJng9Sjfx3z-FLAlY/preview' },
    { id: '32', title: 'Episodio 32 (Amigos por siempre)', video: 'https://drive.google.com/file/d/1uXyyE8Yqn4P5rg4_1xw1eahzk-ah8wbU/preview' },
    { id: '33', title: 'Episodio 33 (Jermaine)', video: 'https://drive.google.com/file/d/1kWp2nQ_O77lAeJMMDQpkwZE7n5F7aPoc/preview' },
    { id: '34', title: 'Episodio 34 (Papas y helado)', video: 'https://drive.google.com/file/d/1q-2jIIFzvuUGTeYmSL7W96HPhKu4_r4V/preview' },
    { id: '35', title: 'Episodio 35 (1000 Graybles)', video: 'https://drive.google.com/file/d/15KCLLDprzx08_3-ECo0RnqOePFLcWOEq/preview' },
    { id: '36', title: 'Episodio 36 (Pítidos)', video: 'https://drive.google.com/file/d/1h2a2nTsfGRy2z4eh_mom8yqr2kI0tSmx/preview' },
    { id: '37', title: 'Episodio 37 (La broma del parque acuático)', video: 'https://drive.google.com/file/d/1PS3LQ9mCufiAJmbJhdiiWTCGhpWVuJ8C/preview' },
    { id: '38', title: 'Episodio 38 (Olvidaste tus flotadores)', video: 'https://drive.google.com/file/d/1t5m44Fu_PKHiGcyzS77qPnkig7WKjdNd/preview' },
    { id: '39', title: 'Episodio 39 (Sé dulce)', video: 'https://drive.google.com/file/d/1mKpFBYGp7mvbO1eaEg8TioGpV6Z_fqGE/preview' },
    { id: '40', title: 'Episodio 40 (Orgalorg)', video: 'https://drive.google.com/file/d/182n_4T-yB0uM-nGvclhUaxB8kzQhDimN/preview' },
    { id: '41', title: 'Episodio 41 (En el escape)', video: 'https://drive.google.com/file/d/1X4eneAJFt8gCL8cN0YfhnqVp_ybaVp_S/preview' },
    { id: '42', title: 'Episodio 42 (La gran perdición)', video: 'https://drive.google.com/file/d/1enXiSmsz0Phm798XdpmTDKjZ7pgL6JFV/preview' },
    { id: '43', title: 'Episodio 43 (El cometa)', video: 'https://drive.google.com/file/d/1l1m9EK3xud5fw3oXfl2r95Y7DF1Yrzrf/preview' },
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
        <Heading as="h1">Hora de Aventura - Temporada 6</Heading>
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
              to={`/series/hora_de_aventura/t6/${prevEpisode.id}`}
              colorScheme="teal"
              variant="outline"
            >
              Capítulo Anterior
            </Button>
          )}
          {nextEpisode && (
            <Button
              as={Link}
              to={`/series/hora_de_aventura/t6/${nextEpisode.id}`}
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
              to={`/series/hora_de_aventura/t6/${ep.id}`}
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

export default HoraDeAventuraT6;
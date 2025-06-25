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

function HoraDeAventuraT2() {
  const episodes = [
    { id: '1', title: 'Episodio 1 (Llego de la nocheósfera)', video: 'https://drive.google.com/file/d/1cMgkeWmI6AIm1jrqX81UX_g7wuc7Wi39/preview' },
    { id: '2', title: 'Episodio 2 (Los ojos)', video: 'https://drive.google.com/file/d/1EGm56xx508fhcNIHMPK2pOU0OgwgaVZ3/preview' },
    { id: '3', title: 'Episodio 3 (Lealtad al rey)', video: 'https://drive.google.com/file/d/1Bw0nf7Spyzx5j08k_7reNhhklmMdNoJN/preview' },
    { id: '4', title: 'Episodio 4 (Sangre bajo la piel)', video: 'https://drive.google.com/file/d/1KjCFfPLHo0Gcs5LFHsvJceQL1-jLTTk9/preview' },
    { id: '5', title: 'Episodio 5 (El cuenta cuentos)', video: 'https://drive.google.com/file/d/1ANb9dUGiuae8Wy7OVvFCjMemE7fKpHJf/preview' },
    { id: '6', title: 'Episodio 6 (Amor lento)', video: 'https://drive.google.com/file/d/1KznHkSLQsiB1sLd3bK1ECv8QZLV772XC/preview' },
    { id: '7', title: 'Episodio 7 (Poder animal)', video: 'https://drive.google.com/file/d/1Hb5q35zTH4KxOQfeMWadXAsTwOdnFY8b/preview' },
    { id: '8', title: 'Episodio 8 (Los cristales tienen poder)', video: 'https://drive.google.com/file/d/1JxaFlGd80I98nRsuOQPLNc3zc_MKTQPS/preview' },
    { id: '9', title: 'Episodio 9 (Las otras tartas)', video: 'https://drive.google.com/file/d/12YASc3--FjRq-xb255keT7RJNG-VQxlD/preview' },
    { id: '10', title: 'Episodio 10 (A cortar el cabello a una mujer)', video: 'https://drive.google.com/file/d/1wSnRWtsQ5eNgqT8gM3DBljrrzLyiFrC2/preview' },
    { id: '11', title: 'Episodio 11 (La cámara de las navajas heladas)', video: 'https://drive.google.com/file/d/1MRWPVph2eNbZSrz3Ke7Mrj54dbBFGtqK/preview' },
    { id: '12', title: 'Episodio 12 (Los suegros)', video: 'https://drive.google.com/file/d/1LrMFZ2pMhMoc9axTAXSYGsITmmaTqx8R/preview' },
    { id: '13', title: 'Episodio 13 (Los frijoles mágicos)', video: 'https://drive.google.com/file/d/1EpBuUWa2xAT55x4XikHHTxGwXxzgi_qJ/preview' },
    { id: '14', title: 'Episodio 14 (El rey mudo)', video: 'https://drive.google.com/file/d/1hKXgdvau4FxoXpEsuRqtw7wQWKMM3Nl1/preview' },
    { id: '15', title: 'Episodio 15 (El verdadero tú)', video: 'https://drive.google.com/file/d/1TAIHBfQQTUb1GMHDsYyjT6iC4or2ufQJ/preview' },
    { id: '16', title: 'Episodio 16 (Guardianes del sol)', video: 'https://drive.google.com/file/d/1EKrChxWMarDOLzcD5wg1SPDRB9xjKVIa/preview' },
    { id: '17', title: 'Episodio 17 (Muerte en flor)', video: 'https://drive.google.com/file/d/1-Ge5MMZxzUW9gOqhNohTnkBjTvn9YY5b/preview' },
    { id: '18', title: 'Episodio 18 (Susana salvaje)', video: 'https://drive.google.com/file/d/1iO1BxZusKyae0mWZAwKtnw4f9xT7Y6ye/preview' },
    { id: '19', title: 'Episodio 19 (El tren misterioso)', video: 'https://drive.google.com/file/d/1q_Tgw_7mCGsKgQy2_KHHHYcm0Iwjf32i/preview' },
    { id: '20', title: 'Episodio 20 (Ven conmigo)', video: 'https://drive.google.com/file/d/13fNBt3JF1c-p8dy-ZN5Cu2WU3_OnOjpQ/preview' },
    { id: '21', title: 'Episodio 21 (La panza de la bestia)', video: 'https://drive.google.com/file/d/103OcU6m9nMP9_x2Kpe5pFSFkY6Ibs8wW/preview' },
    { id: '22', title: 'Episodio 22 (El limite)', video: 'https://drive.google.com/file/d/1LrwazdJcDGJ4YLEEtzgRr2mZBSs8J5bM/preview' },
    { id: '23', title: 'Episodio 23 (Los cineastas)', video: 'https://drive.google.com/file/d/1cREWyYFOuX6TeSw03zxhX1MIX4XOQu90/preview' },
    { id: '24', title: 'Episodio 24 (Amor loco)', video: 'https://drive.google.com/file/d/1ytd7Kt7ifj3yBNJNoIdrSEbzefgbQ_ct/preview' },
    { id: '25', title: 'Episodio 25 (Amor peligroso)', video: 'https://drive.google.com/file/d/1FOSAoNfIlSYCfhYdoDqaCelZn1ZPv1rd/preview' },
    { id: '26', title: 'Episodio 26 (Rastro de calor)', video: 'https://drive.google.com/file/d/1orMWb9zLMfCzrG5JbFGzsCDB016MDtRk/preview' }
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
        <Heading as="h1">Hora de Aventura - Temporada 2</Heading>
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
              to={`/series/hora_de_aventura/t2/${prevEpisode.id}`}
              colorScheme="teal"
              variant="outline"
            >
              Capítulo Anterior
            </Button>
          )}
          {nextEpisode && (
            <Button
              as={Link}
              to={`/series/hora_de_aventura/t2/${nextEpisode.id}`}
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
              to={`/series/hora_de_aventura/t2/${ep.id}`}
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

export default HoraDeAventuraT2;
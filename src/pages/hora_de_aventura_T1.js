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

function HoraDeAventuraT1() {
  const episodes = [
    { id: '1', title: 'Episodio 1 (Pánico en la fiesta del palacio)', video: 'https://drive.google.com/file/d/1y-jyzh-wUJ_UgVHdtzZ8x0mDtyAZplhX/preview' },
    { id: '2', title: 'Episodio 2 (Problemas en el espacio grumoso)', video: 'https://drive.google.com/file/d/19w_NPV645SqhyCowq8dRiP5WEqxwRs8C/preview' },
    { id: '3', title: 'Episodio 3 (Prisioneros del amor)', video: 'https://drive.google.com/file/d/1hG01RnNA2WcjY0_rmpklWj6hDGurADvQ/preview' },
    { id: '4', title: 'Episodio 4 (Tronquitos)', video: 'https://drive.google.com/file/d/1glZci3TrMgmj0n6JuIRivc8S6o8trbXs/preview' },
    { id: '5', title: 'Episodio 5 (El enchiridion)', video: 'https://drive.google.com/file/d/1vhjzKrDoFw3CJ0p1iqsEZNGB0TRY3bt1/preview' },
    { id: '6', title: 'Episodio 6 (Danzarin)', video: 'https://drive.google.com/file/d/1sPSfr6aJSqfuy2UQDVlUJy2a25r_s8pA/preview' },
    { id: '7', title: 'Episodio 7 (Ricardio corazón de león)', video: 'https://drive.google.com/file/d/1_w4SppBVZyxe5w7YZtkGTyc3zeeRQhDv/preview' },
    { id: '8', title: 'Episodio 8 (Hombres de negocios)', video: 'https://drive.google.com/file/d/1G_H5mIZZc1vjDsuNfvayFGVwWxIvEpz0/preview' },
    { id: '9', title: 'Episodio 9 (Mis dos personas favoritas)', video: 'https://drive.google.com/file/d/1BQtvizWhHxdyrc7Oj2arZPY6rLkvtnH7/preview' },
    { id: '10', title: 'Episodio 10 (Recuerdos en la montaña)', video: 'https://drive.google.com/file/d/1qB0f8X_5N13z_If9OnGUMFIoKj5YtmxG/preview' },
    { id: '11', title: 'Episodio 11 (Magos)', video: 'https://drive.google.com/file/d/1ih6YPRV_fcHTfWYPjZTu2PoARqA4ZQ4A/preview' },
    { id: '12', title: 'Episodio 12 (Desalojo)', video: 'https://drive.google.com/file/d/1MMgjxd74ptVN8cQbzVGiAdMLe1SpI8TU/preview' },
    { id: '13', title: 'Episodio 13 (La ciudad de los ladrones)', video: 'https://drive.google.com/file/d/1rjmLcSQ_f3MAcP5N6EIIEIjnPq7oaU9j/preview' },
    { id: '14', title: 'Episodio 14 (El jardín de la bruja)', video: 'https://drive.google.com/file/d/1SeMeTYySSSXLoakaCBSdC02aQ0rZQn8n/preview' },
    { id: '15', title: 'Episodio 15 (Que es la vida)', video: 'https://drive.google.com/file/d/1Mqp7AeU2RGI2d2Dqad5zDm00-uJ-FHyy/preview' },
    { id: '16', title: 'Episodio 16 (Oceano de miedo)', video: 'https://drive.google.com/file/d/1y23daGB3l8fUSYE30l_v7FToloCknczK/preview' },
    { id: '17', title: 'Episodio 17 (Descongelando una boda)', video: 'https://drive.google.com/file/d/1hlCdcL7hftJmTNAuOH4Mbkp6EY_-e07g/preview' },
    { id: '18', title: 'Episodio 18 (La gruta)', video: 'https://drive.google.com/file/d/10C2jTOtoKEL9QVGRXrAPo_MZTwy5S_BJ/preview' },
    { id: '19', title: 'Episodio 19 (El duque)', video: 'https://drive.google.com/file/d/1-DWWhHEgRacZ9KyGOXpr2GiTqPh1a63w/preview' },
    { id: '20', title: 'Episodio 20 (Ciudad fenomeno)', video: 'https://drive.google.com/file/d/148R_mfk8e4GGhp5UfzOB7VSONgqxF0rY/preview' },
    { id: '21', title: 'Episodio 21 (Donny)', video: 'https://drive.google.com/file/d/1XXQAwLtHWQZohj8yfA61p_oGcyIhUeUS/preview' },
    { id: '22', title: 'Episodio 22 (Lacayo)', video: 'https://drive.google.com/file/d/15ZIDuIHyQqyLR8lamzsNoP1KYf0VAPCr/preview' },
    { id: '23', title: 'Episodio 23 (Fantaseando en un día lluvioso)', video: 'https://drive.google.com/file/d/16Nfwig0E_F5QaEk___1t489n5usLeWqF/preview' },
    { id: '24', title: 'Episodio 24 (Pero que hicieron)', video: 'https://drive.google.com/file/d/1TDfc0i2h0zpQ38s5u5yyo1Q07_l9Sfi_/preview' },
    { id: '25', title: 'Episodio 25 (Su héroe)', video: 'https://drive.google.com/file/d/1EcHSYfzrTHDT_cm6D4HU6mzNIv7ikCgJ/preview' },
    { id: '26', title: 'Episodio 26 (El triturador)', video: 'https://drive.google.com/file/d/1xSkFdcSe6ULieplrXYygfXYmqItT1W2a/preview' },
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
        <Heading as="h1">Hora de Aventura - Temporada 1</Heading>
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
              to={`/series/hora_de_aventura/t1/${prevEpisode.id}`}
              colorScheme="teal"
              variant="outline"
            >
              Capítulo Anterior
            </Button>
          )}
          {nextEpisode && (
            <Button
              as={Link}
              to={`/series/hora_de_aventura/t1/${nextEpisode.id}`}
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
              to={`/series/hora_de_aventura/t1/${ep.id}`}
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

export default HoraDeAventuraT1;
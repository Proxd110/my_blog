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

function ElIncreibleMundoDeGumballT4() {
  const episodes = [
    { id: '1', title: 'Episodio 1 (El regreso - El némesis)', video: 'https://drive.google.com/file/d/1AUix6oNwD5rQiezbWiNGzVcrgg0WGdcZ/preview' },
    { id: '2', title: 'Episodio 2 (El grupo - Los otros)', video: 'https://drive.google.com/file/d/1-xHQae7FtfXPGz5M3dxH4rAZNkA6QX8S/preview' },
    { id: '3', title: 'Episodio 3 (La firma - El cheque)', video: 'https://drive.google.com/file/d/1S-djxjg1dQ0aYcFq4fCT-tSCFRnP_4Jt/preview' },
    { id: '4', title: 'Episodio 4 (La peste - La venta)', video: 'https://drive.google.com/file/d/1-P_p8phtsRAlEVgQnDXjz4DGW7vbxsGq/preview' },
    { id: '5', title: 'Episodio 5 (El regalo - El estacionamiento)', video: 'https://drive.google.com/file/d/1kn7OtR1G4CjBEOwK3EBcMi03EZ83oqNs/preview' },
    { id: '6', title: 'Episodio 6 (La rutina - La mejora)', video: 'https://drive.google.com/file/d/1Yw8QhVnfwrXJ_X-aq6tKYI_bWxgzBq7P/preview' },
    { id: '7', title: 'Episodio 7 (La historieta - El romántico)', video: 'https://drive.google.com/file/d/1YGwH27j5f-QbcfuU2cyV2g-C3TNhkKOU/preview' },
    { id: '8', title: 'Episodio 8 (Los videos - El aprendiz)', video: 'https://drive.google.com/file/d/1yg-poELPkCsWDmA_OBE3HlaQWnzjawQf/preview' },
    { id: '9', title: 'Episodio 9 (El abrazo - El mal)', video: 'https://drive.google.com/file/d/1R8TRrO5ABoFbCRBgXeKxVEXzkiEGizzY/preview' },
    { id: '10', title: 'Episodio 10 (El origen - El origen parte 2)', video: 'https://drive.google.com/file/d/1tJlrzWzzSIPKQ8No3xGwL4jzUJjK_2ZO/preview' },
    { id: '11', title: 'Episodio 11 (El traidor - La novia)', video: 'https://drive.google.com/file/d/1qTPSRfKYZaEtTDRx2Nb48f78shL3Kago/preview' },
    { id: '12', title: 'Episodio 12 (El consejo - La señal)', video: 'https://drive.google.com/file/d/1DUgvNvfzruHR4WfBjbGqiumRJvqT6VRD/preview' },
    { id: '13', title: 'Episodio 13 (El parásito - El amor)', video: 'https://drive.google.com/file/d/10bkr6wDwchQeHe7BHGt8U-P9C61iYlY9/preview' },
    { id: '14', title: 'Episodio 14 (La incomodidad - El nido)', video: 'https://drive.google.com/file/d/1v80EwVoZEVnfPRYTFdN7xQRZU-0kAA5u/preview' },
    { id: '15', title: 'Episodio 15 (Los puntos - El autobús)', video: 'https://drive.google.com/file/d/1-xmF43n8zA-gQGiuTMKa6O43n9W8Amwu/preview' },
    { id: '16', title: 'Episodio 16 (La noche  - El malentendido)', video: 'https://drive.google.com/file/d/1hNPhA3I02Z31guq08DHoy6fHUk0wr8rn/preview' },
    { id: '17', title: 'Episodio 17 (Las raíces - La culpa)', video: 'https://drive.google.com/file/d/1QNkrk_XuCsh-tsO32yjLYdpu_3xN2vFO/preview' },
    { id: '18', title: 'Episodio 18 (La palmada - La detective)', video: 'https://drive.google.com/file/d/12V4-iDcxGyfBhKAJYfDEZO0C2Ex3lHXs/preview' },
    { id: '19', title: 'Episodio 19 (La furia - La recopilación)', video: 'https://drive.google.com/file/d/15CU8duglAEMHNXDIskF_X3yNKu01B9l2/preview' },
    { id: '20', title: 'Episodio 20 (El engaño - El desastre)', video: 'https://drive.google.com/file/d/12iokkGxXofP533Ed0thp78HvyzmbKbEG/preview' },
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
        <Heading as="h1">El Increíble Mundo de Gumball - Temporada 4</Heading>
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
              to={`/series/el_increible_mundo_de_gumball/t4/${prevEpisode.id}`}
              colorScheme="teal"
              variant="outline"
            >
              Capítulo Anterior
            </Button>
          )}
          {nextEpisode && (
            <Button
              as={Link}
              to={`/series/el_increible_mundo_de_gumball/t4/${nextEpisode.id}`}
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
              to={`/series/el_increible_mundo_de_gumball/t4/${ep.id}`}
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

export default ElIncreibleMundoDeGumballT4;
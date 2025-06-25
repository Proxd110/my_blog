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

function ElIncreibleMundoDeGumballT6() {
  const episodes = [
    { id: '1', title: 'Episodio 1 (El rival)', video: 'https://drive.google.com/file/d/1CBGlkty_EtSkLnVUE-LEx3qPVfW5zwD5/preview' },
    { id: '2', title: 'Episodio 2 (La dama)', video: 'https://drive.google.com/file/d/1NHoSgdEkaizDpE5y6znQ0oyofcwAwfgF/preview' },
    { id: '3', title: 'Episodio 3 (El tonto)', video: 'https://drive.google.com/file/d/1Ts4aT6PcpEgH0sFvDLI5OxSHbU_eVUI7/preview' },
    { id: '4', title: 'Episodio 4 (Los vegetales)', video: 'https://drive.google.com/file/d/1O-hByg1WhxjhIkzsmyDXNPQfRADuAY3J/preview' },
    { id: '5', title: 'Episodio 5 (El elegido)', video: 'https://drive.google.com/file/d/15npcEzV_4j65dmstPxMoGkXOxmOojBH_/preview' },
    { id: '6', title: 'Episodio 6 (El padre)', video: 'https://drive.google.com/file/d/1FaljhHQuLo3y9-aAa42uppSHBF_GFAlV/preview' },
    { id: '7', title: 'Episodio 7 (La incomodidad)', video: 'https://drive.google.com/file/d/1w-uKfPW6BS1VrgBp1Jsw5EkUtvvi3kEM/preview' },
    { id: '8', title: 'Episodio 8 (La jaula)', video: 'https://drive.google.com/file/d/1-l9_a4QbMduKWxptFQ9ozZeW31E82OXu/preview' },
    { id: '9', title: 'Episodio 9 (El vecino)', video: 'https://drive.google.com/file/d/1FNbPVbTgLt5b4Ua-AKlzGcVxTrcdFsf2/preview' },
    { id: '10', title: 'Episodio 10 (El cualquiera)', video: 'https://drive.google.com/file/d/1WbJy_3jkNmP_Eh11i0tpogYM7qiwIYaP/preview' },
    { id: '11', title: 'Episodio 11 (La fé)', video: 'https://drive.google.com/file/d/128RXKrwbuhgMtMjXLhsbWe7AzujGYwoi/preview' },
    { id: '12', title: 'Episodio 12 (El candidato)', video: 'https://drive.google.com/file/d/1YrLQJ8J6UrT_Xn8ULLTgCe8s9COaVkbF/preview' },
    { id: '13', title: 'Episodio 13 (El pacto)', video: 'https://drive.google.com/file/d/1XVkY_4nM9yFjtxqOR9JpHp5PNBcfX2Fg/preview' },
    { id: '14', title: 'Episodio 14 (La ficción)', video: 'https://drive.google.com/file/d/1qHqehpDbNfyDXqJBO_uJV4QMOWJIcQgQ/preview' },
    { id: '15', title: 'Episodio 15 (El cerebro)', video: 'https://drive.google.com/file/d/1AOClRW8nO5DX5kmDZcRIg_0uafuN5vNe/preview' },
    { id: '16', title: 'Episodio 16 (Los padres)', video: 'https://drive.google.com/file/d/1OnKK1eZ2GJSftXVh6DTdlzyCdWSsLojo/preview' },
    { id: '17', title: 'Episodio 17 (El fundador)', video: 'https://drive.google.com/file/d/1KOIxaN0mLnRT2VZ8yMM1GX8qScKkccw2/preview' },
    { id: '18', title: 'Episodio 18 (La lección)', video: 'https://drive.google.com/file/d/1CxgXN6J5I-joEkF9Q95WJ3xJyVXl7T9r/preview' },
    { id: '19', title: 'Episodio 19 (La inteligencia)', video: 'https://drive.google.com/file/d/1vyPNWafffrAydTw3ghXZoS9bwUme64oq/preview' },
    { id: '20', title: 'Episodio 20 (La poción)', video: 'https://drive.google.com/file/d/11dX-Bt3fN6Gkctv3QRSr0858iK_HVXrM/preview' },
    { id: '21', title: 'Episodio 21 (Historias Alternas)', video: 'https://drive.google.com/file/d/1MdWQ2FwKYyOtdaEwwHjPz1-Wjlx6sqGv/preview' },
    { id: '22', title: 'Episodio 22 (La transformación)', video: 'https://drive.google.com/file/d/1i_djzsSgTZ7XiLcoYPSJZyUOmY0Eir7F/preview' },
    { id: '23', title: 'Episodio 23 (La comprensión)', video: 'https://drive.google.com/file/d/1GvRAXXTzGMO6tcgBblXvBALuXnyCmy3C/preview' },
    { id: '24', title: 'Episodio 24 (El anuncio)', video: 'https://drive.google.com/file/d/1UWfEsA0u_LPRULo4t2Y5-am9OLld7NDg/preview' },
    { id: '25', title: 'Episodio 25 (Los espectros)', video: 'https://drive.google.com/file/d/1jnWMJvEXA4YxZhoqbdJnayoWRmTKtrm9/preview' },
    { id: '26', title: 'Episodio 26 (El hedor)', video: 'https://drive.google.com/file/d/1vvSEzzwvQKg6tkbfKe6nYDoBoslKNpQB/preview' },
    { id: '27', title: 'Episodio 27 (La consciencia)', video: 'https://drive.google.com/file/d/1JeoUKjumPIo5pyQUxxdJSEIQa-9gXW1h/preview' },
    { id: '28', title: 'Episodio 28 (El recibo)', video: 'https://drive.google.com/file/d/1HzBjA26T4NYmzQV5Uehr4IcjoMarGZM7/preview' },
    { id: '29', title: 'Episodio 29 (El drama)', video: 'https://drive.google.com/file/d/1APXXtQMR19uIXWoY1GQuidlwHomifmBH/preview' },
    { id: '30', title: 'Episodio 30 (La amiga)', video: 'https://drive.google.com/file/d/1ktjdYBxzrZgaWBNZ-4wJ96qeimROdRrA/preview' },
    { id: '31', title: 'Episodio 31 (La posesión)', video: 'https://drive.google.com/file/d/1GFlwAM_hHfpafms_BdNf2bBftg__Mwl_/preview' },
    { id: '32', title: 'Episodio 32 (El amo)', video: 'https://drive.google.com/file/d/1y2PX5EhehARkXi8dxEl9iCMssJWPjzOM/preview' },
    { id: '33', title: 'Episodio 33 (El silencio)', video: 'https://drive.google.com/file/d/18L3tCxLklno92lVlGQmVORrqmbXoP-8Z/preview' },
    { id: '34', title: 'Episodio 34 (El futuro)', video: 'https://drive.google.com/file/d/1BIKR0UeK87Ve8fl_3Yx0oTADyG82NuAZ/preview' },
    { id: '35', title: 'Episodio 35 (El deseo)', video: 'https://drive.google.com/file/d/1DZHghGmC19LT4PtmfdkAQc3BmEgbLZ0g/preview' },
    { id: '36', title: 'Episodio 36 (La fábrica)', video: 'https://drive.google.com/file/d/1CK7ZsOyGvW5YVtvAsuAEIrsqbcSMD7d1/preview' },
    { id: '37', title: 'Episodio 37 (El agente)', video: 'https://drive.google.com/file/d/1j1r_MRseEb-pGP1rDSxo04P1fgDxhYQ2/preview' },
    { id: '38', title: 'Episodio 38 (La red)', video: 'https://drive.google.com/file/d/1f6QODQldDHcVyux1E8-OxP6q6J1b5RvN/preview' },
    { id: '39', title: 'Episodio 39 (El desastre)', video: 'https://drive.google.com/file/d/1gVWfJC2YW9LT-iLwbDF_GpLxt3r7xRqw/preview' },
    { id: '40', title: 'Episodio 40 (El corazón)', video: 'https://drive.google.com/file/d/1k3wX6F8tq0UoSVjZfaRTHWNREIgjxJVW/preview' },
    { id: '41', title: 'Episodio 41 (La revuelta)', video: 'https://drive.google.com/file/d/1rVcvU2ymhYBnrVTt7iOtHauVPHY5HKy7/preview' },
    { id: '42', title: 'Episodio 42 (Las decisiones)', video: 'https://drive.google.com/file/d/1v4KG600uWVUQZJjlykVMd10UgMdZvgO2/preview' },
    { id: '43', title: 'Episodio 43 (Los mejores amigos)', video: 'https://drive.google.com/file/d/1LfVRa1wWK0c-OO8xGgfXMSqTFXwgHz2n/preview' },
    { id: '44', title: 'Episodio 44 (La inquisición)', video: 'https://drive.google.com/file/d/1NMZ5nJSlL0y7IRhppNhHoDSsZHCAKb_k/preview' },
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
        <Heading as="h1">El Increíble Mundo de Gumball - Temporada 6</Heading>
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
              to={`/series/el_increible_mundo_de_gumball/t6/${prevEpisode.id}`}
              colorScheme="teal"
              variant="outline"
            >
              Capítulo Anterior
            </Button>
          )}
          {nextEpisode && (
            <Button
              as={Link}
              to={`/series/el_increible_mundo_de_gumball/t6/${nextEpisode.id}`}
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
              to={`/series/el_increible_mundo_de_gumball/t6/${ep.id}`}
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

export default ElIncreibleMundoDeGumballT6;
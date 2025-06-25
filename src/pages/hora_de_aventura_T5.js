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

function HoraDeAventuraT5() {
  const episodes = [
    { id: '1', title: 'Episodio 1 (Finn el humano)', video: 'https://drive.google.com/file/d/1iT2UpzZ5746Axf4gK7YNBJx_8MeVgW9n/preview' },
    { id: '2', title: 'Episodio 2 (Jake el perro)', video: 'https://drive.google.com/file/d/1UeRfv2yQByv3XSL3UOUhNqQSddOJ40i-/preview' },
    { id: '3', title: 'Episodio 3 (Otras cinco fábulas cortas)', video: 'https://drive.google.com/file/d/1qdHyioeW9Jizs55nZ-KnLz8tnnhzNqDs/preview' },
    { id: '4', title: 'Episodio 4 (Arriba del árbol)', video: 'https://drive.google.com/file/d/1d-SNpB0pQGwKogO6xsJNoEISu4lVNdMk/preview' },
    { id: '5', title: 'Episodio 5 (Toda la gente pequeña)', video: 'https://drive.google.com/file/d/1UtlBq0F8Q3H5y2xMaj1-bVDkEr32KPt2/preview' },
    { id: '6', title: 'Episodio 6 (Jake el papá)', video: 'https://drive.google.com/file/d/18s1mz929SV8pGAHiwk2zcL7wfnNToFIU/preview' },
    { id: '7', title: 'Episodio 7 (Davey)', video: 'https://drive.google.com/file/d/1kePZZrYEKJ0W_juKfjAHpQSZuNm_jeT9/preview' },
    { id: '8', title: 'Episodio 8 (Calabozo misterioso)', video: 'https://drive.google.com/file/d/1hDEP_aeRAUEGkMFh0hAxGb9N4uCi0Ncv/preview' },
    { id: '9', title: 'Episodio 9 (Todo es tu culpa)', video: 'https://drive.google.com/file/d/12qNuY31Q2lbf6NTpAGtyAngmFDr2V14d/preview' },
    { id: '10', title: 'Episodio 10 (Pequeñín)', video: 'https://drive.google.com/file/d/1aaiGHU17TYclfKt5qO-FOEV22dPU-TxY/preview' },
    { id: '11', title: 'Episodio 11 (Muchachito malo)', video: 'https://drive.google.com/file/d/13mw5RFL_0bj20wUVTkR8oxr4Fx2a1hI6/preview' },
    { id: '12', title: 'Episodio 12 (La cripta de los huesos)', video: 'https://drive.google.com/file/d/1oKRGk_C3olQrPCuIjASD8JU7Eda6MBIi/preview' },
    { id: '13', title: 'Episodio 13 (El gran pajaro humano)', video: 'https://drive.google.com/file/d/1zBhnVGnYVtLTBAT1Y-WN9s44yCie-B1j/preview' },
    { id: '14', title: 'Episodio 14 (Simón y Marcy)', video: 'https://drive.google.com/file/d/1v6SwH5-alDNgh1AHkt4mROCUFvb7AxZv/preview' },
    { id: '15', title: 'Episodio 15 (Una falla es una falla)', video: 'https://drive.google.com/file/d/14FkTb_adqIIEL7LnYxXXJn01Lt7D9_bs/preview' },
    { id: '16', title: 'Episodio 16 (Fantasía de cojines)', video: 'https://drive.google.com/file/d/1m-Ut3uIUZ80J_YUmzRsajHnr-zCOaXmc/preview' },
    { id: '17', title: 'Episodio 17 (BMO extraviado)', video: 'https://drive.google.com/file/d/1x86hBW9BfDACJZyFKmohy2MuEIWzQ2M-/preview' },
    { id: '18', title: 'Episodio 18 (El banquete de la princesa)', video: 'https://drive.google.com/file/d/1NKyVhsNWBCRjJ3DH-d7uTJ6Mt9Hygttg/preview' },
    { id: '19', title: 'Episodio 19 (Jame Baxter el caballo)', video: 'https://drive.google.com/file/d/1H7aEdlijwFbPWQubk0c1MiE5RqArY--r/preview' },
    { id: '20', title: 'Episodio 20 (¡Shh, silencio!)', video: 'https://drive.google.com/file/d/1Dn2oOraqSzJO_PsKIMdssql6ZmCzJIaS/preview' },
    { id: '21', title: 'Episodio 21 (El pretendiente)', video: 'https://drive.google.com/file/d/11vV_ozi23AT6LAvaS5y-1sY0NikxS5rg/preview' },
    { id: '22', title: 'Episodio 22 (Terminó la fiesta, isla de Señorita)', video: 'https://drive.google.com/file/d/1kKomV_kUi0ofsM0EMx6pBLKY_04tEWOm/preview' },
    { id: '23', title: 'Episodio 23 (Un último trabajo)', video: 'https://drive.google.com/file/d/1Pp5eZ64Tn7ldKhNhS6uLvaL4LqKEyKSg/preview' },
    { id: '24', title: 'Episodio 24 (Otras cinco pequeñas fábulas más)', video: 'https://drive.google.com/file/d/1_jg70MG65fRChQeuQoAqTep97YGNE7ev/preview' },
    { id: '25', title: 'Episodio 25 (El caso de la princesa Grumosa)', video: 'https://drive.google.com/file/d/1FNID-u6DP0_nT1503rgAbDh7pFMXrtYO/preview' },
    { id: '26', title: 'Episodio 26 (Solo magos, bobos no)', video: 'https://drive.google.com/file/d/1hvhCLzA785pffZNzSiY65CbiMLlYq_rj/preview' },
    { id: '27', title: 'Episodio 27 (El traje de Jake)', video: 'https://drive.google.com/file/d/1jdEpaTXCV-mRNhi5UDmJoHlsHu_vE9sI/preview' },
    { id: '28', title: 'Episodio 28 (Ser más)', video: 'https://drive.google.com/file/d/1Jhl0Tf07_2CEAzxIg3sSnGRQ2j9biVM1/preview' },
    { id: '29', title: 'Episodio 29 (La bruja del cielo)', video: 'https://drive.google.com/file/d/1Jf_oQKuReu-zAg6Bb_cmgetvr5t6E9Mq/preview' },
    { id: '30', title: 'Episodio 30 (Fuego y hielo)', video: 'https://drive.google.com/file/d/1xx1AO--Phc8l1qAgp1IqyfBlt-ZB4ezw/preview' },
    { id: '31', title: 'Episodio 31 (Muy mayor)', video: 'https://drive.google.com/file/d/1QUZ6EV99aHcHzD6_2r2tO3VZfEqjFQUI/preview' },
    { id: '32', title: 'Episodio 32 (Tierra y agua)', video: 'https://drive.google.com/file/d/1PVJ8OciJxCPcGqKaD8GpGbprlvDatowA/preview' },
    { id: '33', title: 'Episodio 33 (Hora del sandwich)', video: 'https://drive.google.com/file/d/13tZzgZjwj1GmN1G3PdlxqLVUBq7jFXal/preview' },
    { id: '34', title: 'Episodio 34 (El baúl)', video: 'https://drive.google.com/file/d/1sA9bhniGEmWiF43eknnFW0EtQ9ldaGwY/preview' },
    { id: '35', title: 'Episodio 35 (Juegos de amor)', video: 'https://drive.google.com/file/d/1FFsPP_4U5f2efcipHClduwEBxu7nFJk4/preview' },
    { id: '36', title: 'Episodio 36 (El tren calabozo)', video: 'https://drive.google.com/file/d/1wNFrLWG62GvUGIGFLqd9_eLvxc0zPVNn/preview' },
    { id: '37', title: 'Episodio 37 (El principe en la caja)', video: 'https://drive.google.com/file/d/1IXSf6HOYuxbFN7DqQz6GQG85UPKM-dpQ/preview' },
    { id: '38', title: 'Episodio 38 (Hambre roja)', video: 'https://drive.google.com/file/d/1Z6E__Os2R8erXQUQCk3Opc-vq4e4rQNB/preview' },
    { id: '39', title: 'Episodio 39 (Arreglamos un camión)', video: 'https://drive.google.com/file/d/16NZ419ij1oOk-VRFPpempWnlDwSw_0IC/preview' },
    { id: '40', title: 'Episodio 40 (Cita de juego)', video: 'https://drive.google.com/file/d/1tj88boXGnQh6QTCabCdqEL9BcCJ8OEUr/preview' },
    { id: '41', title: 'Episodio 41 (El pozo)', video: 'https://drive.google.com/file/d/1_H39x9JuI2_XA_anNB63LkrCYMY88zj2/preview' },
    { id: '42', title: 'Episodio 42 (James)', video: 'https://drive.google.com/file/d/1YMOqSDY2pzti5dEs6Jg8xAP6sMMwQBKG/preview' },
    { id: '43', title: 'Episodio 43 (El hombre cerveza de raíz)', video: 'https://drive.google.com/file/d/13k5jEC-xUjEfW_YIi9hftHXmT-faxyjH/preview' },
    { id: '44', title: 'Episodio 44 (Boda manzana)', video: 'https://drive.google.com/file/d/1FFDPAZETfvSaGQPA1Xxh3jwMWKx_OWUE/preview' },
    { id: '45', title: 'Episodio 45 (La espada de pasto)', video: 'https://drive.google.com/file/d/1MmZyCXTvxQjD_-0cPleiKm_qKaWhd8EW/preview' },
    { id: '46', title: 'Episodio 46 (Chiclobot)', video: 'https://drive.google.com/file/d/1CdDQYACWt2riBXx_ya0zRkgefFnPx5m3/preview' },
    { id: '47', title: 'Episodio 47 (El trono rojo)', video: 'https://drive.google.com/file/d/1jJfuf4xnS4vF3L40Jm_eNmOg5bdIfxaF/preview' },
    { id: '48', title: 'Episodio 48 (Betty)', video: 'https://drive.google.com/file/d/1LCFxDSnqraYmDWVuk0H5N4qzzffyCP_Q/preview' },
    { id: '49', title: 'Episodio 49 (Mal momento)', video: 'https://drive.google.com/file/d/1t_oPfilZkpcUe07_m-lJqzuXtucq3QWm/preview' },
    { id: '50', title: 'Episodio 50 (Limoncito (Parte 1))', video: 'https://drive.google.com/file/d/1tBYl7DIJi8fGFSCnP9jSqFlE9VoGwcYu/preview' },
    { id: '51', title: 'Episodio 51 (Limoncito (Parte 2))', video: 'https://drive.google.com/file/d/1GimM7SKooxXXMj6_bxi4kDtKF6ZjmF-6/preview' },
    { id: '52', title: 'Episodio 52 (Los últimos deseos de Billy)', video: 'https://drive.google.com/file/d/1kLs3e6WzqCp8nEbWOyf7rHuzRWXNRVis/preview' },
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
        <Heading as="h1">Hora de Aventura - Temporada 5</Heading>
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
              to={`/series/hora_de_aventura/t5/${prevEpisode.id}`}
              colorScheme="teal"
              variant="outline"
            >
              Capítulo Anterior
            </Button>
          )}
          {nextEpisode && (
            <Button
              as={Link}
              to={`/series/hora_de_aventura/t5/${nextEpisode.id}`}
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
              to={`/series/hora_de_aventura/t5/${ep.id}`}
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

export default HoraDeAventuraT5;
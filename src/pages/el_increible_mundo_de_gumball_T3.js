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

function ElIncreibleMundoDeGumballT3() {
  const episodes = [
    { id: '1', title: 'Episodio 1 (Los niños - La fanática)', video: 'https://drive.google.com/file/d/19_t3CPF_W56H5f60Z1M4KQoH4b_MIgU8/preview' },
    { id: '2', title: 'Episodio 2 (El entrenador - La alegría)', video: 'https://drive.google.com/file/d/17O6FdBX3kx5v15ji-Loft3aeUbQ0eGJs/preview' },
    { id: '3', title: 'Episodio 3 (El cachorro - La receta)', video: 'https://drive.google.com/file/d/1Y9a7Demm7otm6S8UyUi69KfT39_zzXf1/preview' },
    { id: '4', title: 'Episodio 4 (El nombre - Los extras)', video: 'https://drive.google.com/file/d/1RdhNkqvKrcNTSxumIowiUvioswTsHkGm/preview' },
    { id: '5', title: 'Episodio 5 (Las quejas - Las vacaciones)', video: 'https://drive.google.com/file/d/1sRk4yMOPT3doENRoU77N1Q0xrtkedB46/preview' },
    { id: '6', title: 'Episodio 6 (El fraude - El vacío)', video: 'https://drive.google.com/file/d/1hGKGjnQ0CDDb5jho6_T4Ihs2ahJz8RMB/preview' },
    { id: '7', title: 'Episodio 7 (El jefe - El movimiento)', video: 'https://drive.google.com/file/d/115O_WsN5Zwkc-SqN9Sttr3YcL1gaXANw/preview' },
    { id: '8', title: 'Episodio 8 (La ley - La alergia)', video: 'https://drive.google.com/file/d/1vq0RpWI1jE_oo5sJduSa7H3iPuQVwUD8/preview' },
    { id: '9', title: 'Episodio 9 (Las madres - La contraseña)', video: 'https://drive.google.com/file/d/1KWdzuc8EOk8OcL-A99Musg5GXBA4Jqif/preview' },
    { id: '10', title: 'Episodio 10 (Los procrastinadores - El caparazón)', video: 'https://drive.google.com/file/d/1VtGZBJBGDT0NMCH0OOpgLLkTf58NfvSk/preview' },
    { id: '11', title: 'Episodio 11 (La carga - Los hermanos)', video: 'https://drive.google.com/file/d/1bouN4f-04MrkMDgPXhsFYEAJykYz7-AJ/preview' },
    { id: '12', title: 'Episodio 12 (El espejo - El hombre)', video: 'https://drive.google.com/file/d/1kJntOa2EcNfR8HHe6SyrDXSF5-IPZER8/preview' },
    { id: '13', title: 'Episodio 13 (La pizza - La mentira)', video: 'https://drive.google.com/file/d/1uB_e1O6Vq4yAm6YHv36FQEmU9lpKOPqb/preview' },
    { id: '14', title: 'Episodio 14 (La mariposa - La pregunta)', video: 'https://drive.google.com/file/d/1xgqvs9DXGncB2zMz1vIXF1hWs_MCqfRI/preview' },
    { id: '15', title: 'Episodio 15 (El santo - El amigo)', video: 'https://drive.google.com/file/d/1QWYXzu6uz_WUQLnflngaaR0Idvk9D0B0/preview' },
    { id: '16', title: 'Episodio 16 (El oráculo - La seguridad)', video: 'https://drive.google.com/file/d/1AyP2xFoQ_hg-0omWwb3xcpT1RRYYlHXW/preview' },
    { id: '17', title: 'Episodio 17 (La sociedad - El aguafiestas)', video: 'https://drive.google.com/file/d/19rufHitqsEg_7qi6dYfiIWkIjySY23cT/preview' },
    { id: '18', title: 'Episodio 18 (La cuenta regresiva - El don nadie)', video: 'https://drive.google.com/file/d/1ZzMG-6YHGtxklOT711lJ8jfiQtz_aqel/preview' },
    { id: '19', title: 'Episodio 19 (El amargado - El huevo)', video: 'https://drive.google.com/file/d/162XbiuCXaBhCoeKYHL21YlhGpbHBFWQs/preview' },
    { id: '20', title: 'Episodio 20 (El triángulo - El dinero)', video: 'https://drive.google.com/file/d/142rYx6rVtVT-gDi6uoSA21m8mJRVQGnh/preview' },
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
        <Heading as="h1">El Increíble Mundo de Gumball - Temporada 3</Heading>
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
              to={`/series/el_increible_mundo_de_gumball/t3/${prevEpisode.id}`}
              colorScheme="teal"
              variant="outline"
            >
              Capítulo Anterior
            </Button>
          )}
          {nextEpisode && (
            <Button
              as={Link}
              to={`/series/el_increible_mundo_de_gumball/t3/${nextEpisode.id}`}
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
              to={`/series/el_increible_mundo_de_gumball/t3/${ep.id}`}
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

export default ElIncreibleMundoDeGumballT3;
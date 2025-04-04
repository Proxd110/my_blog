import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Heading,
  Text,
  VStack,
  Tag,
  useColorModeValue,
} from '@chakra-ui/react';

function MoviePlayer() {
  const { id } = useParams();

  const movies = [
    {
      id: '1',
      title: 'Las Crónicas de Narnia: El León, la Bruja y el Armario',
      video: 'https://drive.google.com/file/d/1l0Gz5C2VTD-2rH9tkgqDI4gFfipvXIJ5/preview',
      categories: ['Fantasía', 'Aventura', 'Familiar'],
      description: 'Cuatro hermanos descubren un mundo mágico detrás de un armario, donde deben enfrentarse a una bruja malvada y cumplir una profecía.',
    },
    {
      id: '2',
      title: 'Las Crónicas de Narnia: El Príncipe Caspian',
      video: 'https://drive.google.com/file/d/1CDaet1xNM7wRk1STGPcM1edNIhlKxFPn/preview',
      categories: ['Fantasía', 'Aventura', 'Acción'],
      description: 'Los hermanos Pevensie regresan a Narnia para ayudar al Príncipe Caspian a reclamar su trono y restaurar la paz en el reino.',
    },
    {
      id: '3',
      title: 'Las Crónicas de Narnia: La Travesía del Viajero del Alba',
      video: 'https://drive.google.com/file/d/14Kt73fzNu1x1evfR3VQJFDcAUt8037Yt/preview',
      categories: ['Fantasía', 'Aventura', 'Familiar'],
      description: 'Edmund, Lucy y su primo Eustace se embarcan en un viaje épico a bordo del Viajero del Alba para encontrar a los siete lores perdidos.',
    },
    {
      id: '4',
      title: 'Krampus',
      video: 'https://drive.google.com/file/d/1W2b1JZrsvGwZR-A9e0jVRjoNSYIdXEGn/preview',
      categories: ['Mitología', 'Terror', 'Fantasía', 'Folclore', 'Suspenso'],
      description: 'Krampus, un ser cornudo y encadenado, recorre tierras heladas con su saco y vara para castigar a los desobedientes.',
    },
    {
      id: '5',
      title: 'Happy Feet 2',
      video: 'https://drive.google.com/file/d/1lmVXmD0JIXP48dfiMkT4JkbcXvVH46q6/preview',
      categories: ['Animada', 'Familiar', 'Musical', 'Aventura', 'Comedia'],
      description: 'Mumble y su hijo Erik enfrentan un mundo sacudido por fuerzas poderosas mientras buscan unir a las naciones pingüinas para salvar su hogar.',
    },
    {
      id: '6',
      title: 'Los Increibles 1',
      video: 'https://drive.google.com/file/d/1ri7LHdrc40jLpUEkpuAlsINTQbzcLw8_/preview',
      categories: ['Animada', 'Familiar', 'Acción', 'Aventura', 'Superhéroes'],
      description: 'Bob Parr y su familia de superhéroes ocultan sus poderes, pero una misión los lleva a enfrentar a un villano que amenaza al mundo.',
    },
    {
      id: '7',
      title: 'Los Increibles 2',
      video: 'https://drive.google.com/file/d/1SFFQtPsFDl66snNcSEvcZMUVypdpb_gG/preview',
      categories: ['Animada', 'Familiar', 'Acción', 'Aventura', 'Superhéroes'],
      description: 'Helen lidera una campaña para traer de vuelta a los superhéroes, mientras Bob cuida a la familia y un nuevo villano surge.',
    },
    {
      id: '8',
      title: 'Turning Red',
      video: 'https://drive.google.com/file/d/1LweGs0ciX4vQ5X2LjYuJMmgVN4k57CtX/preview',
      categories: ['Animada', 'Familiar', 'Comedia', 'Fantasía', 'Coming-of-age'],
      description: 'Mei, una adolescente, se transforma en un panda rojo gigante al emocionarse, mientras lidia con su familia y la pubertad.',
    },
    {
      id: '9',
      title: 'Trailer Oficial de Minecraft WB',
      video: 'https://drive.google.com/file/d/1TtvA8tq_IlPng4DPfZt8UCdRUPLAOb28/preview',
      categories: ['Animada', 'Aventura', 'Fantasía', 'Acción'],
      description: 'Un grupo de aventureros se embarca en un épico viaje por el mundo de Minecraft para detener al Dragón del End antes de que destruya su hogar.',
    },
    {
      id: '10',
      title: 'Minecraft la película WB',
      video: 'https://drive.google.com/file/d/1_cXqXG1HFNeGDdW7gyRsETTJ6yOW575w/preview',
      categories: ['Animada', 'Aventura', 'Fantasía', 'Acción'],
      description: 'Un grupo de aventureros se embarca en un épico viaje por el mundo de Minecraft para detener al Dragón del End antes de que destruya su hogar.',
    },
  ];

  const movie = movies.find((m) => m.id === id);

  const bg = useColorModeValue('gray.100', 'gray.800');
  const color = useColorModeValue('black', 'white');

  if (!movie) {
    return (
      <Box p={4} bg={bg} color={color} minH="calc(100vh - 64px)">
        <Heading as="h1">Película no encontrada</Heading>
      </Box>
    );
  }

  return (
    <Box p={4} bg={bg} color={color} minH="calc(100vh - 64px)">
      <VStack spacing={4} align="start">
        <Heading as="h1">{movie.title}</Heading>
        <Box>
          {movie.categories.map((category, index) => (
            <Tag key={index} mr={2} colorScheme="teal">
              {category}
            </Tag>
          ))}
        </Box>
        <Text>{movie.description}</Text>
        <Box w="100%" maxW="800px">
          <iframe
            src={movie.video}
            width="100%"
            height="450px"
            allow="autoplay"
            allowFullScreen // Agregamos este atributo para habilitar pantalla completa
            title={movie.title}
          />
        </Box>
      </VStack>
    </Box>
  );
}

export default MoviePlayer;
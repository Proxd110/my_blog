import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  SimpleGrid,
  Image,
  Text,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

function Movies() {
  const movies = [
    {
      id: '1',
      title: 'Las Crónicas de Narnia: El León, la Bruja y el Armario',
      poster: 'images/narnia1.jpg', // Nueva ruta
      video: 'https://drive.google.com/file/d/1l0Gz5C2VTD-2rH9tkgqDI4gFfipvXIJ5/preview',
      categories: ['Fantasía', 'Aventura', 'Familiar'],
      description: 'Cuatro hermanos descubren un mundo mágico detrás de un armario, donde deben enfrentarse a una bruja malvada y cumplir una profecía.',
    },
    {
      id: '2',
      title: 'Las Crónicas de Narnia: El Príncipe Caspian',
      poster: 'images/narnia2.jpg', // Nueva ruta
      video: 'https://drive.google.com/file/d/1CDaet1xNM7wRk1STGPcM1edNIhlKxFPn/preview',
      categories: ['Fantasía', 'Aventura', 'Acción'],
      description: 'Los hermanos Pevensie regresan a Narnia para ayudar al Príncipe Caspian a reclamar su trono y restaurar la paz en el reino.',
    },
    {
      id: '3',
      title: 'Las Crónicas de Narnia: La Travesía del Viajero del Alba',
      poster: 'images/narnia3.jpg', // Nueva ruta
      video: 'https://drive.google.com/file/d/14Kt73fzNu1x1evfR3VQJFDcAUt8037Yt/preview',
      categories: ['Fantasía', 'Aventura', 'Familiar'],
      description: 'Edmund, Lucy y su primo Eustace se embarcan en un viaje épico a bordo del Viajero del Alba para encontrar a los siete lores perdidos.',
    },
    {
      id: '4',
      title: 'Krampus',
      poster: 'images/Krampus.jpg', // Nueva ruta
      video: 'https://drive.google.com/file/d/1W2b1JZrsvGwZR-A9e0jVRjoNSYIdXEGn/preview',
      categories: ['Mitología', 'Terror', 'Fantasía', 'Folclore', 'Suspenso'],
      description: 'Krampus, un ser cornudo y encadenado, recorre tierras heladas con su saco y vara para castigar a los desobedientes.',
    },
    {
      id: '5',
      title: 'Happy Feet 2',
      poster: 'images/Happy Feet 2.jpg', // Nueva ruta
      video: 'https://drive.google.com/file/d/1lmVXmD0JIXP48dfiMkT4JkbcXvVH46q6/preview',
      categories: ['Animada', 'Familiar', 'Musical', 'Aventura', 'Comedia'],
      description: 'Mumble y su hijo Erik enfrentan un mundo sacudido por fuerzas poderosas mientras buscan unir a las naciones pingüinas para salvar su hogar.',
    },
    {
      id: '6',
      title: 'Los Increibles 1',
      poster: 'images/Los Increibles 1.jpg', // Nueva ruta
      video: 'https://drive.google.com/file/d/1ri7LHdrc40jLpUEkpuAlsINTQbzcLw8_/preview',
      categories: ['Animada', 'Familiar', 'Acción', 'Aventura', 'Superhéroes'],
      description: 'Bob Parr y su familia de superhéroes ocultan sus poderes, pero una misión los lleva a enfrentar a un villano que amenaza al mundo.',
    },
    {
      id: '7',
      title: 'Los Increibles 2',
      poster: 'images/Los Increibles 2.jpg', // Nueva ruta
      video: 'https://drive.google.com/file/d/1SFFQtPsFDl66snNcSEvcZMUVypdpb_gG/preview',
      categories: ['Animada', 'Familiar', 'Acción', 'Aventura', 'Superhéroes'],
      description: 'Helen lidera una campaña para traer de vuelta a los superhéroes, mientras Bob cuida a la familia y un nuevo villano surge.',
    },
    {
      id: '8',
      title: 'Turning Red',
      poster: 'images/Turning Red.jpg', // Nueva ruta
      video: 'https://drive.google.com/file/d/1LweGs0ciX4vQ5X2LjYuJMmgVN4k57CtX/preview',
      categories: ['Animada', 'Familiar', 'Comedia', 'Fantasía', 'Coming-of-age'],
      description: 'Mei, una adolescente, se transforma en un panda rojo gigante al emocionarse, mientras lidia con su familia y la pubertad.',
    },
    {
      id: '9',
      title: 'Trailer Oficial de Minecraft WB',
      poster: 'images/Minecraft_Trailer.jpg', // Nueva ruta
      video: 'https://drive.google.com/file/d/1TtvA8tq_IlPng4DPfZt8UCdRUPLAOb28/preview',
      categories: ['Animada', 'Aventura', 'Fantasía', 'Acción'],
      description: 'Un grupo de aventureros se embarca en un épico viaje por el mundo de Minecraft para detener al Dragón del End antes de que destruya su hogar.',
    },
    {
      id: '10',
      title: 'Minecraft la película WB',
      poster: 'images/minecraft la pelicula.jpg', // Nueva ruta
      video: 'https://drive.google.com/file/d/1_cXqXG1HFNeGDdW7gyRsETTJ6yOW575w/preview',
      categories: ['Animada', 'Aventura', 'Fantasía', 'Acción'],
      description: 'Un grupo de aventureros se embarca en un épico viaje por el mundo de Minecraft para detener al Dragón del End antes de que destruya su hogar.',
    },
    {
      id: '11',
      title: 'Como entrenar a tu dragón 1',
      poster: 'images/Como entrenar a tu dragon 1.jpg', // Nueva ruta
      video: 'https://drive.google.com/file/d/1h2bcF8mjfNNCPSkXHjkD5O25MKw9xCCu/preview',
      categories: ['Animada', 'Aventura', 'Fantasía', 'Acción'],	
      description: 'Un joven vikingo llamado Hipo se convierte en el primer humano en domesticar a un dragón, lo que cambia la relación entre humanos y dragones.',
    },
    {
      id: '12',
      title: 'Harry Potter y la piedra filosofal',
      poster: 'images/Harry Potter y la camara filosofal.jpg', // Nueva ruta
      video: 'https://drive.google.com/file/d/12XsmmuBh2vYkXoKAKSwp-uHVnBX9g9fJ/preview',
      categories: ['Fantasía', 'Aventura', 'Acción', 'Magia'],
      description: 'Harry Potter, un niño huérfano, descubre que es un mago y asiste a la Escuela de Magia Hogwarts, donde enfrenta desafíos y hace amigos.',
    },
    {
      id: '13',
      title: 'Harry Potter y la cámara secreta',
      poster: 'images/Harry Potter y la camara secreta.jpg', // Nueva ruta
      video: 'https://drive.google.com/file/d/1BMJS13ZCDV3XkuXkIDIN8g_7OZ_AKkgD/preview',
      categories: ['Fantasía', 'Aventura', 'Acción', 'Magia'],
      description: 'Harry Potter regresa a Hogwarts para su segundo año, donde descubre un oscuro secreto y enfrenta a un misterioso enemigo.',
    },
    {
      id: '14',
      title: 'Harry Potter y el prisionero de Azkaban',
      poster: 'images/Harry Potter y el prisionero de Azkabán.jpg',
      video: 'https://drive.google.com/file/d/1LbkmwXesyt9IDvrRUEYqIaKtQQRjh8ns/preview',
      categories: ['Fantasía', 'Aventura', 'Acción', 'Magia'],
      description: 'Harry Potter regresa a Hogwarts para su tercer año, donde descubre la verdad sobre su pasado y enfrenta a un peligroso prisionero.',
    },
    {
      id: '15',
      title: 'Harry Potter y el cáliz de fuego',
      poster: 'images/Harry Potter y el cáliz de fuego.jpg',
      video: 'https://drive.google.com/file/d/1b-q43sJis7Rt6tcRDxd1CbxNe7pr75M9/preview',
      categories: ['Fantasía', 'Aventura', 'Acción', 'Magia'],
      description: 'Harry Potter es inesperadamente seleccionado para participar en el Torneo de los Tres Magos, donde enfrenta peligros mortales y descubre un oscuro complot.',
    },
  ];

  const bg = useColorModeValue('gray.100', 'gray.800');
  const cardBg = useColorModeValue('gray.200', 'gray.700');
  const color = useColorModeValue('black', 'white');

  return (
    <Box p={4} bg={bg} minH="calc(100vh - 64px)">
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={4}>
        {movies.map((movie) => (
          <Box
            key={movie.id}
            bg={cardBg}
            rounded="md"
            overflow="hidden"
            _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s' }}
          >
            <Image
              src={movie.poster}
              alt={movie.title}
              objectFit="cover"
              h="300px"
              w="100%"
              fallbackSrc="https://via.placeholder.com/300x450?text=Poster+No+Disponible"
            />
            <Box p={3}>
              <Text fontSize="lg" fontWeight="bold" color={color} mb={2}>
                {movie.title}
              </Text>
              <Button
                as={Link}
                to={`/movies/${movie.id}`}
                colorScheme="teal"
                size="sm"
                w="100%"
              >
                Ver ahora
              </Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Movies;
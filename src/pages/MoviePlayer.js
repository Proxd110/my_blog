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
      video: 'https://drive.google.com/file/d/1YeXnWGtS4avqZwi4J-S73BTonPmObFAG/preview',
      categories: ['Animada', 'Familiar', 'Acción', 'Aventura', 'Superhéroes'],
      description: 'Bob Parr y su familia de superhéroes ocultan sus poderes, pero una misión los lleva a enfrentar a un villano que amenaza al mundo.',
    },
    {
      id: '7',
      title: 'Los Increibles 2',
      video: 'https://drive.google.com/file/d/1mjVARRRShynH53M5HzwVVDMxbsEa9P6P/preview',
      categories: ['Animada', 'Familiar', 'Acción', 'Aventura', 'Superhéroes'],
      description: 'Helen lidera una campaña para traer de vuelta a los superhéroes, mientras Bob cuida a la familia y un nuevo villano surge.',
    },
    {
      id: '8',
      title: 'Turning Red',
      video: 'https://drive.google.com/file/d/1Adop2Sx5IsK1mFeokdUC4KVR0090tnzJ/preview',
      categories: ['Animada', 'Familiar', 'Comedia', 'Fantasía', 'Coming-of-age'],
      description: 'Mei, una adolescente, se transforma en un panda rojo gigante al emocionarse, mientras lidia con su familia y la pubertad.',
    },
    {
      id: '9',
      title: 'Minecraft la película WB',
      video: 'https://drive.google.com/file/d/1QDhSPb7CFHXSPRaDKgoowgCDOkC3kSs7/preview',
      categories: ['Animada', 'Aventura', 'Fantasía', 'Acción'],
      description: 'Un grupo de aventureros se embarca en un épico viaje por el mundo de Minecraft para detener al Dragón del End antes de que destruya su hogar.',
    },
    {
      id: '10',
      title: 'Como Entrenar a tu Dragón 1',
      video: 'https://drive.google.com/file/d/1h2bcF8mjfNNCPSkXHjkD5O25MKw9xCCu/preview',
      categories: ['Animada', 'Aventura', 'Fantasía', 'Acción'],
      description: 'Un joven vikingo llamado Hipo se convierte en el primer humano en befriending un dragón, lo que cambia la relación entre humanos y dragones.',
    },
    {
      id: '11',
      title: 'Barbie en la princesa y la plebeya',
      video: 'https://drive.google.com/file/d/1c_5NWnmDpcKtze-TQr5JxKDADmea14_g/preview',
      categories: ['Animada', 'Familiar', 'Aventura', 'Comedia', 'Musical'],
      description: 'Barbie y su amiga se convierten en una princesa y una plebeya, descubriendo la importancia de la amistad y la valentía mientras enfrentan desafíos.',
    },
    {
      id: '12',
      tittle: 'Norbit',
      video: 'https://drive.google.com/file/d/1MzTn09KHEuu2mL3sYgT5GMGLs85piVL_/preview',
      categories: ['Comedia', 'Romántica'],
      description: 'Norbit, un hombre tímido y maltratado, se encuentra atrapado en un matrimonio con una mujer dominante. Su vida da un giro inesperado cuando se reencuentra con su amor de la infancia, Kate.',
    },
    {
      id: '13',
      title: 'Nosferatu',
      video: 'https://drive.google.com/file/d/1RMk1tM8JfusiujK3cTVRGRVdgFgYpv7P/preview',
      categories: ['Terror', 'Clásico'],
      description: 'Un joven agente inmobiliario viaja a Transilvania para cerrar un trato con el misterioso conde Orlok, solo para descubrir que es un vampiro sediento de sangre. La historia se desarrolla en un ambiente gótico y sombrío, con imágenes icónicas que han influido en el cine de terror.',
    },
    {
      id: '14',
      title: 'Lilo Y Stitch la película',
      video: 'https://drive.google.com/file/d/1J_LLyHcwmLpNLK6QIxPt80suErBEiM-H/preview',
      categories: ['Familiar', 'Aventura', 'Comedia'],
      description: 'Lilo, una niña hawaiana, adopta a Stitch, un experimento alienígena fugitivo. Juntos, enfrentan desafíos y aprenden sobre la familia y la amistad en un viaje lleno de aventuras.',
    }
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
import React, { useState } from 'react';
import {
  Box,
  SimpleGrid,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';

function Movies() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedMovie, setSelectedMovie] = useState(null);

  const movies = [
    { title: 'Película 1', url: 'https://drive.google.com/file/d/xxx1/preview', poster: 'https://via.placeholder.com/200x300?text=Película+1' },
    { title: 'Película 2', url: 'https://drive.google.com/file/d/xxx2/preview', poster: 'https://via.placeholder.com/200x300?text=Película+2' },
    { title: 'Película 3', url: 'https://drive.google.com/file/d/xxx3/preview', poster: 'https://via.placeholder.com/200x300?text=Película+3' },
    { title: 'Película 4', url: 'https://drive.google.com/file/d/xxx4/preview', poster: 'https://via.placeholder.com/200x300?text=Película+4' },
    { title: 'Película 5', url: 'https://drive.google.com/file/d/xxx5/preview', poster: 'https://via.placeholder.com/200x300?text=Película+5' },
  ];

  const bg = useColorModeValue('gray.100', 'gray.800');
  const cardBg = useColorModeValue('gray.200', 'gray.700');
  const color = useColorModeValue('black', 'white');

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    onOpen();
  };

  return (
    <Box p={4} bg={bg} minH="calc(100vh - 64px)">
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={4}>
        {movies.map((movie, index) => (
          <Box
            key={index}
            bg={cardBg}
            rounded="md"
            overflow="hidden"
            cursor="pointer"
            _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s' }}
            onClick={() => handleMovieClick(movie)}
          >
            <Image src={movie.poster} alt={movie.title} objectFit="cover" h="300px" w="100%" />
            <Box p={3}>
              <Text fontSize="lg" fontWeight="bold" color={color}>
                {movie.title}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      {/* Modal para reproducir la película */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedMovie?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedMovie && (
              <Box>
                <iframe
                  src={selectedMovie.url}
                  width="100%"
                  height="400px"
                  allow="autoplay"
                  title={selectedMovie.title}
                />
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Movies;
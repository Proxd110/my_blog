import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Button,
  Switch,
  Stack,
  useColorMode,
  useColorModeValue,
  Collapse,
  HStack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MoviePlayer from './pages/MoviePlayer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Series from './pages/Series';
import InfinityTrain from './pages/infinity_train';
import InfinityTrainT1 from './pages/infinity_train_T1';
import InfinityTrainT2 from './pages/infinity_train_T2';
import InfinityTrainT3 from './pages/infinity_train_T3';
import InfinityTrainT4 from './pages/infinity_train_T4';

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('gray.100', 'gray.800');
  const color = useColorModeValue('gray.800', 'white');
  const hoverBg = useColorModeValue('gray.300', 'gray.700');
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg={bg}
      color={color}
      position="sticky"
      top="0"
      zIndex="10"
      boxShadow="md"
    >
      <Button
        display={{ base: 'flex', md: 'none' }}
        onClick={toggleMenu}
        rightIcon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        variant="outline"
        colorScheme="teal"
      >
        MENÚ
      </Button>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        display={{ base: 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
        spacing={4}
      >
        <Button as={Link} to="/" variant="ghost" _hover={{ bg: hoverBg }}>
          Inicio
        </Button>
        <Button as={Link} to="/about" variant="ghost" _hover={{ bg: hoverBg }}>
          Sobre mí
        </Button>
        <Button as={Link} to="/portfolio" variant="ghost" _hover={{ bg: hoverBg }}>
          Mi portafolio
        </Button>
        <Button as={Link} to="/movies" variant="ghost" _hover={{ bg: hoverBg }}>
          Ver películas
        </Button>
        <Button as={Link} to="/series" variant="ghost" _hover={{ bg: hoverBg }}>
          Ver series
        </Button>
      </Stack>
      <Collapse in={isOpen} animateOpacity>
        <Stack
          direction="column"
          width="full"
          bg={bg}
          p={4}
          display={{ md: 'none' }}
          spacing={4}
        >
          <Button as={Link} to="/" variant="ghost" _hover={{ bg: hoverBg }} onClick={toggleMenu}>
            Inicio
          </Button>
          <Button as={Link} to="/about" variant="ghost" _hover={{ bg: hoverBg }} onClick={toggleMenu}>
            Sobre mí
          </Button>
          <Button as={Link} to="/portfolio" variant="ghost" _hover={{ bg: hoverBg }} onClick={toggleMenu}>
            Mi portafolio
          </Button>
          <Button as={Link} to="/movies" variant="ghost" _hover={{ bg: hoverBg }} onClick={toggleMenu}>
            Ver películas
          </Button>
          <Button as={Link} to="/series" variant="ghost" _hover={{ bg: hoverBg }} onClick={toggleMenu}>
            Ver series
          </Button>
        </Stack>
      </Collapse>
      <HStack>
        <Switch
          isChecked={colorMode === 'dark'}
          onChange={toggleColorMode}
          colorScheme="teal"
        />
      </HStack>
    </Flex>
  );
}

function App() {
  const bg = useColorModeValue('gray.100', 'gray.800');

  return (
    <Box minH="100vh" bg={bg}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MoviePlayer />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/series" element={<Series />} />
        <Route path="/series/infinity_train" element={<InfinityTrain />} />
        <Route path="/series/infinity_train/t1/:episodeId?" element={<InfinityTrainT1 />} />
        <Route path="/series/infinity_train/t2/:episodeId?" element={<InfinityTrainT2 />} />
        <Route path="/series/infinity_train/t3/:episodeId?" element={<InfinityTrainT3 />} />
        <Route path="/series/infinity_train/t4/:episodeId?" element={<InfinityTrainT4 />} />
      </Routes>
    </Box>
  );
}

export default App;
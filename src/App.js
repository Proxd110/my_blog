import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Button,
  Switch,
  Stack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MoviePlayer from './pages/MoviePlayer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('gray.100', 'gray.800');
  const color = useColorModeValue('gray.800', 'white');
  const hoverBg = useColorModeValue('gray.300', 'gray.700');

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
      <Stack direction="row" spacing={4}>
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
      </Stack>
      <Switch
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
        colorScheme="teal"
      />
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
      </Routes>
    </Box>
  );
}

export default App;
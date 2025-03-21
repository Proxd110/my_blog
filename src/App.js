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
import About from './pages/About';
import Portfolio from './pages/Portfolio';

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('gray.100', 'gray.800'); // Fondo adaptable
  const color = useColorModeValue('gray.800', 'white'); // Color de texto adaptable
  const hoverBg = useColorModeValue('gray.300', 'gray.700'); // Color al hacer hover

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
      boxShadow="md" // Añade sombra para mejor definición
    >
      <Stack direction="row" spacing={4}>
        <Button as={Link} to="/" variant="ghost" _hover={{ bg: hoverBg }}>
          Inicio
        </Button>
        <Button as={Link} to="/" variant="ghost" _hover={{ bg: hoverBg }}>
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
        isChecked={colorMode === 'dark'} // Marcado cuando está en modo oscuro
        onChange={toggleColorMode}
        colorScheme="teal"
      />
    </Flex>
  );
}

function App() {
  const bg = useColorModeValue('gray.100', 'gray.800'); // Fondo adaptable para el app

  return (
    <Box minH="100vh" bg={bg}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Box>
  );
}

export default App;
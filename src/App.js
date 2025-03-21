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
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'; // Ahora que tienes @chakra-ui/icons, esto debería funcionar
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
      {/* Botón de hamburguesa con texto "MENÚ" (visible solo en móviles) */}
      <Button
        display={{ base: 'flex', md: 'none' }} // Visible en móviles, oculto en pantallas grandes
        onClick={toggleMenu}
        rightIcon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        variant="outline"
        colorScheme="teal"
      >
        MENÚ
      </Button>

      {/* Enlaces de navegación (visible en pantallas grandes) */}
      <Stack
        direction={{ base: 'column', md: 'row' }} // Columna en móviles, fila en pantallas grandes
        display={{ base: 'none', md: 'flex' }} // Oculto en móviles por defecto, visible en pantallas grandes
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
      </Stack>

      {/* Menú desplegable en móviles */}
      <Collapse in={isOpen} animateOpacity>
        <Stack
          direction="column"
          width="full"
          bg={bg}
          p={4}
          display={{ md: 'none' }} // Visible solo en móviles
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
        </Stack>
      </Collapse>

      {/* Switch para el modo oscuro */}
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
      </Routes>
    </Box>
  );
}

export default App;
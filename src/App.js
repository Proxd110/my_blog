import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Button,
  Switch,
  Stack,
} from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/color-mode';
import Home from './pages/Home';
import Movies from './pages/Movies';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="gray.800"
      color="white"
      position="sticky"
      top="0"
      zIndex="10"
    >
      <Stack direction="row" spacing={4}>
        <Button as={Link} to="/" variant="ghost" _hover={{ bg: 'gray.700' }}>
          Sobre mí
        </Button>
        <Button as={Link} to="/portfolio" variant="ghost" _hover={{ bg: 'gray.700' }}>
          Mi portafolio
        </Button>
        <Button as={Link} to="/movies" variant="ghost" _hover={{ bg: 'gray.700' }}>
          Ver películas
        </Button>
      </Stack>
      <Switch
        isChecked={colorMode === 'light'}
        onChange={toggleColorMode}
        colorScheme="teal"
      />
    </Flex>
  );
}

function App() {
  return (
    <Box>
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
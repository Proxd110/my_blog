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
import HoraDeAventura from './pages/hora_de_aventura';
import HoraDeAventuraT1 from './pages/hora_de_aventura_T1';
import HoraDeAventuraT2 from './pages/hora_de_aventura_T2';
import HoraDeAventuraT3 from './pages/hora_de_aventura_T3';
import HoraDeAventuraT4 from './pages/hora_de_aventura_T4';
import HoraDeAventuraT5 from './pages/hora_de_aventura_T5';
import HoraDeAventuraT6 from './pages/hora_de_aventura_T6';
import HoraDeAventuraT7 from './pages/hora_de_aventura_T7';
import HoraDeAventuraT8 from './pages/hora_de_aventura_T8';
import HoraDeAventuraT9 from './pages/hora_de_aventura_T9';
import HoraDeAventuraT10 from './pages/hora_de_aventura_T10';
import ElIncreibleMundoDeGumball from './pages/el_increible_mundo_de_gumball';
import ElIncreibleMundoDeGumballT1 from './pages/el_increible_mundo_de_gumball_T1';
import ElIncreibleMundoDeGumballT2 from './pages/el_increible_mundo_de_gumball_T2';
import ElIncreibleMundoDeGumballT3 from './pages/el_increible_mundo_de_gumball_T3';
import ElIncreibleMundoDeGumballT4 from './pages/el_increible_mundo_de_gumball_T4';
import ElIncreibleMundoDeGumballT5 from './pages/el_increible_mundo_de_gumball_T5';
import ElIncreibleMundoDeGumballT6 from './pages/el_increible_mundo_de_gumball_T6';
import ElCircoDigital from './pages/el_circo_digital';
import ElCircoDigitalT1 from './pages/el_circo_digital_T1';

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
        <Route path="/series/hora_de_aventura" element={<HoraDeAventura />} />
        <Route path="/series/hora_de_aventura/t1/:episodeId?" element={<HoraDeAventuraT1 />} />
        <Route path="/series/hora_de_aventura/t2/:episodeId?" element={<HoraDeAventuraT2 />} />
        <Route path="/series/hora_de_aventura/t3/:episodeId?" element={<HoraDeAventuraT3 />} />
        <Route path="/series/hora_de_aventura/t4/:episodeId?" element={<HoraDeAventuraT4 />} />
        <Route path="/series/hora_de_aventura/t5/:episodeId?" element={<HoraDeAventuraT5 />} />
        <Route path="/series/hora_de_aventura/t6/:episodeId?" element={<HoraDeAventuraT6 />} />
        <Route path="/series/hora_de_aventura/t7/:episodeId?" element={<HoraDeAventuraT7 />} />
        <Route path="/series/hora_de_aventura/t8/:episodeId?" element={<HoraDeAventuraT8 />} />
        <Route path="/series/hora_de_aventura/t9/:episodeId?" element={<HoraDeAventuraT9 />} />
        <Route path="/series/hora_de_aventura/t10/:episodeId?" element={<HoraDeAventuraT10 />} />
        <Route path="/series/el_increible_mundo_de_gumball" element={<ElIncreibleMundoDeGumball />} />
        <Route path="/series/el_increible_mundo_de_gumball/t1/:episodeId?" element={<ElIncreibleMundoDeGumballT1 />} />
        <Route path="/series/el_increible_mundo_de_gumball/t2/:episodeId?" element={<ElIncreibleMundoDeGumballT2 />} />
        <Route path="/series/el_increible_mundo_de_gumball/t3/:episodeId?" element={<ElIncreibleMundoDeGumballT3 />} />
        <Route path="/series/el_increible_mundo_de_gumball/t4/:episodeId?" element={<ElIncreibleMundoDeGumballT4 />} />
        <Route path="/series/el_increible_mundo_de_gumball/t5/:episodeId?" element={<ElIncreibleMundoDeGumballT5 />} />
        <Route path="/series/el_increible_mundo_de_gumball/t6/:episodeId?" element={<ElIncreibleMundoDeGumballT6 />} />
        <Route path="/series/el_circo_digital" element={<ElCircoDigital />} />
        <Route path="/series/el_circo_digital/t1/:episodeId?" element={<ElCircoDigitalT1 />} />
      </Routes>
    </Box>
  );
}

export default App;
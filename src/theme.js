import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  initialColorMode: 'light', // Modo claro por defecto
  useSystemColorMode: false,
  colors: {
    brand: {
      500: '#7928CA',
    },
  },
});

export default theme;
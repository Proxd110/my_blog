import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark', // Tema oscuro por defecto
    useSystemColorMode: false,
  },
});

export default theme;
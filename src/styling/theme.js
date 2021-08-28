import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: '#2062a3',
  },
  fonts: {
    heading: "Open Sans",
    body: "Raleway",
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  }
});

export default theme;
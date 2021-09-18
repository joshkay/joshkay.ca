import { extendTheme } from '@chakra-ui/react';
import Button from 'theme/components/button';
import Timeline from 'theme/components/timeline';
import PortfolioListing from 'theme/components/portfolioListing';

const theme = extendTheme({
  colors: {
    primary: '#2062a3',
    lochmara: {
      300: '#4D81B5',
      400: '#2062a3',
      500: '#1A4E82'
    }
  },
  fonts: {
    heading: "Open Sans",
    body: "Raleway",
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  components: {
    Button,
    Timeline,
    PortfolioListing
  }
});

export default theme;
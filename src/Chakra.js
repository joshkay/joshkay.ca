import {
  ChakraProvider,
  cookieStorageManager,
  //localStorageManager,
} from "@chakra-ui/react";
import theme from 'theme';

import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";

export const Chakra = ({ cookies, children }) => 
{
  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManager(cookies)
      : undefined;

  return (
    <ChakraProvider 
      theme={theme} 
      colorModeManager={colorModeManager}
    >
      {children}
    </ChakraProvider>
  )
}

export const getServerSideProps = ({ req }) =>
{
  return {
    props: {
      // first time users will not have any cookies and you may not return
      // undefined here, hence ?? is necessary
      cookies: req.headers.cookie ?? "",
    },
  }
}

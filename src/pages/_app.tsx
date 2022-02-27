import { ChakraProvider } from "@chakra-ui/react";
import { ParallaxProvider } from "react-scroll-parallax";

import theme from "../theme";
import { AppProps } from "next/app";
import Fonts from "../font";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ParallaxProvider>
        <Fonts />
        <Component {...pageProps} />
      </ParallaxProvider>
    </ChakraProvider>
  );
}

export default MyApp;

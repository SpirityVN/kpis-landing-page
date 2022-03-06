import { ChakraProvider } from "@chakra-ui/react";
import { ParallaxProvider } from "react-scroll-parallax";

import theme from "../theme";
import { AppProps } from "next/app";
import Fonts from "../font";
import "../styles/globals.scss";
import { MetaMaskProvider } from "metamask-react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <MetaMaskProvider>
        <Fonts />
        <Component {...pageProps} />
      </MetaMaskProvider>
    </ChakraProvider>
  );
}

export default MyApp;

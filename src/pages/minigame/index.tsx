import type { NextPage } from "next";
import MiniGameScreen from "../../screens/minigame";
import ethers from "ethers";
import React, { useEffect, useState } from "react";
import { Box, Text, useToast } from "@chakra-ui/react";
import { isBrowser } from "react-device-detect";
import Head from "next/head";
const chainId = 97;
const MiniGame: NextPage = () => {
  const toast = useToast();
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    try {
      if (window.ethereum.networkVersion !== chainId) {
        window.ethereum
          .request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: `0x${Number(chainId).toString(16)}` }],
          })
          .catch((err: any) => {
            if (err.code === 4902) {
              window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainName: "Binance Smart Chain testnet",
                    chainId: `0x${Number(chainId).toString(16)}`,
                    nativeCurrency: {
                      name: "Binance Smart Chain Testnet",
                      decimals: 18,
                      symbol: "BNB",
                    },
                    rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545"],
                  },
                ],
              });
            } else {
              toast({
                title: "Metamask error.",
                description: err?.message,
                status: "error",
                duration: 3000,
                position: "top-right",
                isClosable: true,
              });
            }
          });
      }
    } catch (err: any) {
      setError(true);
    }
  }, []);

  return (
    <div>
      <Head>
        <title>King playing in the space | Minigame</title>
        <meta
          name="description"
          content="King playing in the space, well well well"
        />
        <meta property="og:title" content="King playing in the space" />
        <meta
          property="og:description"
          content="In the 22nd century, people began to move in space more easily. So this is an opportunity for them to exploit resources on other planets and build new societies. To do that, each person or a group of people (called a Guild) is required to mine resources on earth or buy them from other people or groups of miners through the market to build spaceships and launch them into space. Sure, when you discover a new planet, you will be rewarded with ESPACE tokens."
        />
        <meta property="og:image" content="/thumbnail.jpeg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isBrowser ? (
        <Box backgroundColor={"#282c34"} width={"100%"} height={"100vh"}>
          {!error && <MiniGameScreen />}
          {error && (
            <Box
              display={"flex"}
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <Text color={"white"} textAlign="center">
                You should install metamask extension!
              </Text>
            </Box>
          )}
        </Box>
      ) : (
        <Text
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
          height={"100vh"}
        >
          {" "}
          Sorry, We&apos;re trying to build the interface for mobile device
        </Text>
      )}
    </div>
  );
};

export default MiniGame;

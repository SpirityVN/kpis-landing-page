import type { NextPage } from "next";
import MiniGameScreen from "../../screens/minigame";
import ethers from "ethers";
import React, { useEffect, useState } from "react";
import { Box, Text, useToast } from "@chakra-ui/react";

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
                    chainName: "Polygon Mainnet",
                    chainId: ethers.utils.hexValue(chainId),
                    nativeCurrency: {
                      name: "Binance Smart Chain Testnet",
                      decimals: 18,
                      symbol: "BNB",
                    },
                    rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545"],
                  },
                ],
              });
            }
            toast({
              title: "Metamask error.",
              description: err?.message,
              status: "error",
              duration: 3000,
              position: "top-right",
              isClosable: true,
            });
          });
      }
    } catch (err: any) {
      setError(true);
    }
  }, []);

  return (
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
  );
};

export default MiniGame;

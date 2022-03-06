import {
  Avatar,
  Box,
  Button,
  Center,
  Divider,
  Grid,
  GridItem,
  Icon,
  Image,
  Stack,
  StackDivider,
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useMetaMask } from "metamask-react";
import React, { useEffect, useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import useContract from "../../hooks/use-contract";
import { wei2ether } from "../../utils";
import BuyTurn from "./components/buy-turn";
import ConnectWallet from "./components/connect-wallet";
import Game from "./components/game";
type Props = {};

export default function MiniGameScreen() {
  const { account, chainId, status } = useMetaMask();
  const {
    minesweeperContract,
    priceOfTurn,
    turnOfAccount,
    updateTurnOfAccount,
    totalSupply,
  } = useContract({ status: status, account: account });

  return (
    <Grid templateColumns="repeat(3, 1fr)" height={"100%"} padding={10}>
      <GridItem
        colSpan={2}
        display="flex"
        flexDirection={"column"}
        justifyContent="center"
        alignItems={"center"}
      >
        <Text
          textTransform={"uppercase"}
          color="white"
          fontWeight={"bold"}
          fontSize={30}
          letterSpacing={"0.05rem"}
          marginBottom={"30px"}
        >
          Minesweeper 100
        </Text>
        <Game />
      </GridItem>
      <GridItem colSpan={1}>
        <VStack
          spacing={4}
          divider={<StackDivider borderColor="gray.200" opacity={0.1} />}
          alignItems={"flex-end"}
          height={"100%"}
        >
          <ConnectWallet />
          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            width={"100%"}
            display={"flex"}
            padding={3}
            alignItems={"center"}
          >
            <Stat color={"white"}>
              <StatLabel>You have</StatLabel>

              <StatNumber>{turnOfAccount ? turnOfAccount : '_._'} TURNS</StatNumber>
            </Stat>
            {account && <BuyTurn
              priceOfTurn={priceOfTurn}
              minesweeperContract={minesweeperContract}
              updateTurnOfAccount={updateTurnOfAccount}
            />}
          </Box>
          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            width={"100%"}
            display={"flex"}
            padding={3}
          >
            <Stat color={"white"}>
              <StatLabel>Total supply</StatLabel>
              <StatNumber>{wei2ether(totalSupply)} BNB</StatNumber>
            </Stat>
            <Image src="/assets/dizzy-face.svg" width={"50px"} />
          </Box>
          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            width={"100%"}
            display={"flex"}
            padding={3}
            flexDirection={"column"}
            overflowY={"hidden"}
            height={"calc(100% - 18.75rem)"}
          >
            <Text
              color={"white"}
              fontWeight={"bold"}
              letterSpacing={"0.05rem"}
              fontSize={"20px"}
              textTransform={"uppercase"}
              marginBottom={"20px"}
            >
              Open history
            </Text>
            <Stack spacing={4}>
              <Box
                bg="white"
                borderRadius={"lg"}
                height={"4.6rem"}
                width={"100%"}
                padding={3}
                display="flex"
                alignItems={"center"}
                gap={4}
              >
                
                <Avatar src={`https://avatars.dicebear.com/api/croodles-neutral/${account}.svg`} />

                <Stack spacing={0}>
                  <Text fontSize={12} letterSpacing={0.5}>
                    0x1e3e...daqe
                  </Text>
                  <Text fontSize={13} fontWeight={"medium"}>
                    you have received 1% of the total supply
                  </Text>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </VStack>
      </GridItem>
    </Grid>
  );
}

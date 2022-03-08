import {
  Alert,
  AlertIcon,
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
  useToast,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useMetaMask } from "metamask-react";
import React, { useEffect, useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import useContract, { MINESWEEPER_CONTRACT } from "../../hooks/use-contract";
import { wei2ether } from "../../utils";
import BuyTurn from "./components/buy-turn";
import ConnectWallet from "./components/connect-wallet";
import Game from "./components/game";
import SocketIOClient, { Socket } from "socket.io-client";
import { baseUrl, getMiniGameCommon, getHistory } from "./services/api.service";
import { beautifyAddress, beautifyNumber } from "../../utils";
import Document from "./components/document";
type Props = {};

export default function MiniGameScreen() {
  const { account, status } = useMetaMask();
  const [socket, setSocket] = useState<Socket | undefined>();
  const [totalSupply, setTotalSupply] = useState<string | undefined>("0");
  const [wasOpen, setWasOpen] = useState<number[] | undefined>([]);
  const [history, setHistory] = useState<any[]>([]);
  const toast = useToast();
  const {
    minesweeperContract,
    priceOfTurn,
    turnOfAccount,
    updateTurnOfAccount,
    statusContract,
  } = useContract(account as string);

  const updateCell = (payload: any) => {
    setWasOpen(payload?.was_open);
    setTotalSupply(payload?.total_supply);
  };
 
  const updateTotalSupply = (payload: any) => {
    setTotalSupply(payload.balance);
  };
  const _getData = async () => {
    try {
      let response = await getMiniGameCommon(MINESWEEPER_CONTRACT);

      if (response) {
        setTotalSupply(response?.total_supply);
        setWasOpen(response?.was_open);
      }
      let history = await getHistory();
      history && setHistory(history);
    } catch (err: any) {
      toast({
        title: "Network error.",
        description: err.message,
        status: "error",
      });
    }
  };
  const updateHistory = (payload: any) => {
    let _history = [payload, ...history];
    setHistory([..._history]);
  };
  React.useEffect(() => {
    let socket = SocketIOClient(baseUrl, {
      transports: ["websocket", "polling"],
    });
    // socket.emit("PING_PONG", {value: 123})
    _getData();
    socket.on("RECEIVER_OPEN_CELL", updateCell);
    socket.on("RECEIVER_HISTORY", updateHistory);
    socket.on("RECEIVER_TOTAL_SUPPLY", updateTotalSupply);
    setSocket(socket);
  }, []);

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
        >
          Minesweeper 100
        </Text>
        <Text color="white" marginBottom={30}>
          {MINESWEEPER_CONTRACT}
        </Text>
        {account && (
          <Game
            wasOpen={wasOpen}
            socket={socket}
            minesweeperContract={minesweeperContract}
            updateTurnOfAccount={updateTurnOfAccount}
          />
        )}
        {!account && (
          <>
            <Image
              src="/assets/sleeping-face.svg"
              width={"100px"}
              marginBottom={"30px"}
            />
            <Alert status="warning" width={"29%"} borderRadius={"xl"}>
              <AlertIcon />
              Please connect wallet.
            </Alert>
          </>
        )}
      </GridItem>
      <GridItem colSpan={1}>
        <VStack
          spacing={4}
          divider={<StackDivider borderColor="gray.200" opacity={0.1} />}
          alignItems={"flex-end"}
          height={"100%"}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"100%"}
          >
            <Document />
            <ConnectWallet />
          </Box>

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

              <StatNumber>
                {turnOfAccount ? turnOfAccount : "_._"} TURNS
              </StatNumber>
            </Stat>
            {account && (
              <BuyTurn
                priceOfTurn={priceOfTurn}
                minesweeperContract={minesweeperContract}
                updateTurnOfAccount={updateTurnOfAccount}
                socket={socket}
              />
            )}
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
              <StatNumber>
                {beautifyNumber(wei2ether(totalSupply))} BNB
              </StatNumber>
            </Stat>
            <Stat color={"white"}>
              <StatLabel>Game status</StatLabel>
              <StatNumber>{statusContract ? "PAUSED" : "RUNNING"}</StatNumber>
            </Stat>
            <Stat color={"white"}>
              <StatLabel>Expected supply</StatLabel>
              <StatNumber>10 BNB</StatNumber>
            </Stat>
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
              History
            </Text>
            <Stack spacing={4}>
              {history.length > 0 &&
                history.slice(0,4)?.map((value, index) => {
                  return (
                    <Box
                      key={index}
                      bg="white"
                      borderRadius={"lg"}
                      height={"4.6rem"}
                      width={"100%"}
                      padding={3}
                      display="flex"
                      alignItems={"center"}
                      gap={4}
                    >
                      <Avatar
                        src={`https://avatars.dicebear.com/api/croodles-neutral/${value?.address}.svg`}
                      />

                      <Stack spacing={0}>
                        <Text fontSize={12} letterSpacing={0.5}>
                          {beautifyAddress(value?.address, 6, 4)}
                        </Text>
                        <Text fontSize={13} fontWeight={"medium"}>
                          {value?.message}
                        </Text>
                      </Stack>
                    </Box>
                  );
                })}
            </Stack>
          </Box>
        </VStack>
      </GridItem>
    </Grid>
  );
}

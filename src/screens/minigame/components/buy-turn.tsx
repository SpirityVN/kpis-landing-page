import { CheckIcon } from "@chakra-ui/icons";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import { BigNumberish, ethers } from "ethers";
import { useMetaMask } from "metamask-react";
import React, { useState } from "react";
import { FaCoins, FaShoppingBag } from "react-icons/fa";
import { Minesweeper } from "../../../contracts/Minesweeper";
import useContract from "../../../hooks/use-contract";
import { wei2ether } from "../../../utils";

type Props = {
  priceOfTurn: BigNumberish;
  minesweeperContract: Minesweeper | undefined;
  updateTurnOfAccount: any;
};

export default function BuyTurn({
  priceOfTurn,
  minesweeperContract,
  updateTurnOfAccount,
}: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [turn, setTurn] = useState<number>(0);
  const [amount, setAmount] = useState<BigNumberish>("");
  const [loading, setLoading] = useState<boolean>(false);
  const toast = useToast();
  const handleSetTurn = (value: any) => {
    if (value && priceOfTurn) {
      setTurn(value);
      setAmount(ethers.BigNumber.from(priceOfTurn).mul(value));
    }
  };
  const handleBuyTurn = async () => {
    try {
      setLoading(true);
      let tx = await minesweeperContract?.buyTurn(turn, { value: amount });
      let txr = await tx?.wait();
      if (txr) {
        updateTurnOfAccount();
        setLoading(false);
      }
    } catch (error: any) {
      setLoading(false);
      toast({
        title: "Buy turn error.",
        description: error?.message,
        status: "error",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });
    }
  };
  return (
    <>
      <Button
        leftIcon={<FaShoppingBag />}
        colorScheme="pink"
        variant="solid"
        onClick={onOpen}
      >
        Buy turn
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Buy</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {" "}
            <InputGroup>
              <Input
                placeholder="Enter number of turns"
                onChange={(e: any) => handleSetTurn(e.target.value)}
              />
            </InputGroup>
            <Text
              fontWeight={"medium"}
              fontSize={"12px"}
              opacity={0.5}
              margin={2}
            >
              {turn} turns = {wei2ether(amount)} BNB
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme={"pink"}
              onClick={handleBuyTurn}
              isLoading={loading}
            >
              Buy now
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

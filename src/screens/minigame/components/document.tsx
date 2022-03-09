import {
  Image,
  Button,
  Box,
  Flex,
  Text,
  Badge,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
  StackDivider,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { FaReadme } from "react-icons/fa";

type Props = {};

export default function Document({}: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        leftIcon={<FaReadme />}
        colorScheme="blue"
        variant="solid"
        onClick={onOpen}
      >
        Readme
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Rule: Open the box to receive gifts</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack divider={<StackDivider borderColor="black" opacity={0.1} />}>
              <Flex>
                <Image src="/assets/bomb.svg" />
                <Box ml="3">
                  <Text fontWeight="bold">
                    Bomb Bomb
                    <Badge ml="1" colorScheme="pink">
                      x50
                    </Badge>
                  </Text>
                  <Text fontSize="sm">
                    You will lose all turns when you open it.
                  </Text>
                </Box>
              </Flex>
              <Flex>
                <Image src="/assets/party-popper.svg" width={30} />
                <Box ml="3">
                  <Text fontWeight="bold">
                    Bubble
                    <Badge ml="1" colorScheme="pink">
                      x20
                    </Badge>
                  </Text>
                  <Text fontSize="sm">You will only lose one turn.</Text>
                </Box>
              </Flex>
              <Flex>
                <Image src="/assets/dizzy-face.svg" width={30} />
                <Box ml="3">
                  <Text fontWeight="bold">
                    Winner
                    <Badge
                      ml="1"
                      bgGradient="linear(to-l, #7928CA, #FF0080)"
                      color={"white"}
                    >
                      x1
                    </Badge>
                  </Text>
                  <Text fontSize="sm">
                    You will receive 100% of the total supply.
                  </Text>
                </Box>
              </Flex>
              <Flex>
                <Image src="/assets/ethereum-coin.svg" width={30} />
                <Box ml="3">
                  <Text fontWeight="bold">
                    Penny
                    <Badge ml="1" colorScheme="green">
                      x13
                    </Badge>
                  </Text>
                  <Text fontSize="sm">
                    You will receive 1% of the total supply.
                  </Text>
                </Box>
              </Flex>
              <Flex>
                <Image src="/assets/ethereum-coin-x2.svg" width={30} />
                <Box ml="3">
                  <Text fontWeight="bold">
                    Double a Penny
                    <Badge ml="1" colorScheme="green">
                      x5
                    </Badge>
                  </Text>
                  <Text fontSize="sm">
                    You will receive 2% of the total supply.
                  </Text>
                </Box>
              </Flex>
              <Flex>
                <Image src="/assets/gold.svg" width={30} />
                <Box ml="3">
                  <Text fontWeight="bold">
                    Gold Bar
                    <Badge ml="1" colorScheme="green">
                      x8
                    </Badge>
                  </Text>
                  <Text fontSize="sm">
                    You will receive 3% of the total supply.
                  </Text>
                </Box>
              </Flex>
              <Flex>
                <Image src="/assets/big-gold.svg" width={30} />
                <Box ml="3">
                  <Text fontWeight="bold">
                    Gold Mine
                    <Badge ml="1" colorScheme="green">
                      x3
                    </Badge>
                  </Text>
                  <Text fontSize="sm">
                    You will receive 4% of the total supply.
                  </Text>
                </Box>
              </Flex>
            </Stack>

            {/* 13 Giai 1
              5 giai 2
              /assets/party-popper.svg
              8 giai 3
              3 giai 4
              1 giai dac biet
              20 khong giai
              51 qua min  */}
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

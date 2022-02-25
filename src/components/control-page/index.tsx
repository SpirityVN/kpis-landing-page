import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";

export default function ControlPage() {
  return (
    <Box position={"absolute"} top={"40%"}>
      <VStack spacing={3} align="stretch" padding={10}>
        <Flex alignItems={"center"} gap={28}>
          <Box width={"100px"} height={1} backgroundColor={"white"} />
          <Text textTransform={"uppercase"} color="white">overview</Text>
        </Flex>
        <Flex alignItems={"center"} gap={28}>
          <Box
            width={"50px"}
            height={1}
            backgroundColor={"#C4C4C4"}
            opacity={0.5}
          />
          {/* <Text textTransform={"uppercase"}>overview</Text> */}
        </Flex>
        <Flex alignItems={"center"} gap={28}>
          <Box
            width={"50px"}
            height={1}
            backgroundColor={"#C4C4C4"}
            opacity={0.5}
          />
          {/* <Text textTransform={"uppercase"}>overview</Text> */}
        </Flex>
      </VStack>
    </Box>
  );
}

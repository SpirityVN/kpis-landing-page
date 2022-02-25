import { Text } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <Text
      fontFamily={"parabole"}
      textAlign={"center"}
      position={"fixed"}
      bottom={0}
      left={0}
      padding={10}
      width={"100%"}
    >
      Scroll
    </Text>
  );
}

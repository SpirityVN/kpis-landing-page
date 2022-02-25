import React from "react";
import { Box, Icon } from "@chakra-ui/react";
import { FiShare2 } from "react-icons/fi";

export default function Share() {
  return (
    <Box
      as="button"
      height="50px"
      width="50px"
      lineHeight="1.2"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      border="2px"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={"transparent"}
      borderRadius="50%"
      borderColor="#c4c4c4"
      _hover={{ borderColor: "#ffffff" }}
      _active={{
        bg: "#ffffff",
        transform: "scale(0.98)",
        borderColor: "#ffffff",
      }}
    >
      <Icon
        as={FiShare2}
        fontSize={19}
        color={"#c4c4c4"}
        _active={{ color: "#ffffff" }}
      />
    </Box>
  );
}

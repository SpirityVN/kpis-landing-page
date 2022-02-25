import React from "react";
import { Box, Icon } from "@chakra-ui/react";
import { TiMediaPause } from "react-icons/ti";

export default function Pause() {
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
      _hover={{ borderColor: "#ffffff" , color: '#ffffff'}}
      _active={{
        bg: "#ffffff",
        transform: "scale(0.98)",
        borderColor: "#ffffff",
      }}
    >
      <Icon
        as={TiMediaPause}
        fontSize={19}
        color={"#ffffff"}
        _active={{ color: "#ffffff" }}
      />
    </Box>
  );
}

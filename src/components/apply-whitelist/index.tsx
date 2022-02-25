import React from "react";
import { Box, Text } from "@chakra-ui/react";

import styles from "./style.module.scss";
export default function ApplyWhitelist() {
  return (
    <Box
      as="button"
      height="50px"
      minWidth={"192px"}
      lineHeight="1.2"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      border="2px"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={"transparent"}
      borderRadius="36px"
      zIndex={9999}
      borderColor="#c4c4c4"
      _hover={{ borderColor: "#ffffff", color: "white" }}
      _active={{
        bg: "#ffffff",
        transform: "scale(0.98)",
        borderColor: "#ffffff",
      }}
    >
      <Text textTransform={"uppercase"} fontSize={14}>apply whitelist</Text>
    </Box>
  );
}

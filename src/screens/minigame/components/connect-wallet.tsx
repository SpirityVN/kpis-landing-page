import { Box, Button, Icon, Text, Image, Avatar } from "@chakra-ui/react";
import React, { useState } from "react";
import { useMetaMask } from "metamask-react";
import { beautifyAddress } from "../../../utils";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/croodles-neutral";

export default function ConnectWallet() {
  const { status, connect, account } = useMetaMask();

  return (
    <Button
      isLoading={status === "connecting" ? true : false}
      disabled={status === "connected" ? true : false}
      height="50px"
      minWidth={"192px"}
      lineHeight="1.2"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      border="2px"
      onClick={connect}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={"transparent"}
      color={"white"}
      borderRadius="lg"
      zIndex={9999}
      borderColor="#c4c4c4"
      _hover={{ borderColor: "#ffffff", color: "white" }}
      _active={{
        bg: "#ffffff",
        transform: "scale(0.98)",
        borderColor: "#ffffff",
      }}
      _focus={{
        outline: 0,
      }}
    >
      {status === "connected" && (
        <Avatar
          src={`https://avatars.dicebear.com/api/croodles-neutral/${account}.svg`}
          size={"xs"}
          left={"-10px"}
        />
      )}
      <Text fontSize={14}>
        {status === "notConnected" && "CONNECT WALLET"}
        {status === "unavailable" && "MetaMask not available "}
        {status === "connected" && beautifyAddress(account, 6, 4)}
      </Text>
    </Button>
  );
}

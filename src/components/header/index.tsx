import { Box, Grid, GridItem, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { LogoGray, LogoWhite } from "../../assets/icons";
import ApplyWhitelist from "../apply-whitelist";
import Share from "../share";

export default function Header() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6} padding={10} >
      <GridItem w="100%" h="10" display={"flex"} alignItems={"center"} gap={12}>
        <Text
          cursor={"pointer"}
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          fontSize={16}
          zIndex={9999}
          _hover={{ color: "white" }}
        >
          Marketplace
        </Text>
        <Text
          cursor={"pointer"}
          fontSize={16}
          zIndex={9999}
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          _hover={{ color: "white" }}
        >
          Whitepaper
        </Text>
      </GridItem>
      <GridItem w="100%" h="10" textAlign={"center"}>
        <Icon
          as={LogoGray}
          fontSize={50}
          filter={"drop-shadow(0px 0px 5px #ffffff);"}
        />
      </GridItem>
      <GridItem
        w="100%"
        h="10"
        display={"flex"}
        justifyContent={"flex-end"}
        gap={6}
      >
        <ApplyWhitelist />
        <Share />
      </GridItem>
    </Grid>
  );
}

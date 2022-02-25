import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Box, Icon, Text } from "@chakra-ui/react";
import { LogoWhite } from "../../assets/icons";

type Props = {
  show: boolean;
};

export default function WaitingScreen({ show }: Props) {
  useEffect(() => {
    let isSubscribed = true;
    if (show && isSubscribed) {
      gsap.to("#logo", 2, {
        "--color": "18px",
        repeat: -1,
        yoyo: true,
      });
    }
    return () => {
      isSubscribed = false;
    };
  }, [show]);
  return show ? (
    <Box display={"flex"} flexDirection={"column"} height={"100vh"}>
      <Icon
        id="logo"
        flex={"1 0 auto"}
        margin={"auto"}
        as={LogoWhite}
        fontSize={100}
        filter={"drop-shadow(0px 0px var(--color) #ffffff);"}
        textShadow={"0px 4px 11px rgba(255, 255, 255, 0.5)"}
      />
      <Text textAlign={"center"} flexShrink={0} padding={10} color="white">Spirity Inc.</Text>
    </Box>
  ) : null;
}

import { background, Box, Button, Center, Image } from "@chakra-ui/react";
import React from "react";

type Props = {
  isOpen: boolean,
  itemId?: number,
  value: number,
};

export default function Cell({isOpen, itemId, value}: Props) {
  return (
    !isOpen? (<Box
      borderRadius={18}
      width={50}
      height={50}
      onClick={() => console.log(value)}
      background={"linear-gradient(225deg, #2b2f38, #24282f);"}
      boxShadow={"-5px 5px 12px #22252c, 5px -5px 12px #2e333c;"}
      _active={{
        background: "#282c34",
        boxShadow: "inset -5px 5px 12px #22252c, inset 5px -5px 12px #2e333c;",
      }}
    />): (
      <Box  borderRadius={18}
      width={50}
      height={50}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      background={"#282c34"}
      boxShadow={"inset -5px 5px 12px #22252c, inset 5px -5px 12px #2e333c;"}
     >
        <Image src="/assets/dizzy-face.svg" width={"30px"}/>
      </Box>
    )
  );
}

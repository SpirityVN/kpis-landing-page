import { background, Box, Button, Center, Image } from "@chakra-ui/react";
import React from "react";

type Props = {
  isOpen: boolean;
  itemId?: number;
  value?: number;
  onClick: any;
  isLoading: boolean;
  size: number;
};

const generateItem = (itemId: number | undefined) => {
  switch (itemId) {
    case 0:
      return "/assets/bomb.svg";
    case 1:
      return "/assets/ethereum-coin.svg";
    case 2:
      return "/assets/ethereum-coin-x2.svg";
    case 3:
      return "/assets/gold.svg";
    case 4:
      return "/assets/big-gold.svg";
    case 5:
      return "/assets/party-popper.svg";
    case 100:
      return "/assets/dizzy-face.svg";
    default:
      break;
  }
};
export default function Cell({
  isOpen,
  itemId,
  value,
  onClick,
  size,
  isLoading,
}: Props) {
  return !isOpen ? (
    <Button
      borderRadius={`${size * 18 / 50}px`}
      width={`${size}px`}
      height={`${size}px`}
      isLoading={isLoading}
      onClick={onClick}
      background={"linear-gradient(225deg, #2b2f38, #24282f);"}
      boxShadow={"-5px 5px 12px #22252c, 5px -5px 12px #2e333c;"}
      _active={{
        background: "#282c34",
        boxShadow: "inset -5px 5px 12px #22252c, inset 5px -5px 12px #2e333c;",
      }}
      _loading={{
        background: "#282c34",
        boxShadow: "inset -5px 5px 12px #22252c, inset 5px -5px 12px #2e333c;",
      }}
      _focus={{
        outline: 0,
      }}
    />
  ) : (
    <Box
      borderRadius={18}
      width={`${size}px`}
      height={`${size}px`}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      background={"#282c34"}
      boxShadow={"inset -5px 5px 12px #22252c, inset 5px -5px 12px #2e333c;"}
    >
      {<Image src={generateItem(itemId)} width={"30px"} />}
    </Box>
  );
}

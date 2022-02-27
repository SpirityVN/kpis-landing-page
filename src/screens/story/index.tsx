import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  hidden: boolean;
};

export default function StoryScreen({ hidden }: Props) {
  return (
    <div id="screen" className={hidden ? "active-hidden" : ""}>
      <Box textAlign={"center"} position={"relative"} top={"8%"}>
        <Image
          src={"/assets/member.png"}
          position={"absolute"}
          top={0}
          float={"right"}
          maxWidth={"20rem"}
          width={"20rem"}
          right={20}
        />
        <Text
          fontWeight={"bold"}
          fontSize={30}
          marginBottom={10}
          color={"white"}
        >
          Story
        </Text>
        <Text lineHeight={2} marginBottom={10}>
          In the 22nd century, people began to move in space more easily. So{" "}
          <br />
          this is an opportunity for them to exploit resources on other planets{" "}
          <br />
          and build new societies. To do that, each person or a group of people
          <br />
          (called a Guild) is required to mine resources on earth or buy them
          <br />
          from other people or groups of miners through the market to build
          <br />
          spaceships and launch them into space. Sure, when you discover a new
          <br />
          planet, you will be rewarded with ESPACE tokens.
          <br />
        </Text>
        <Text lineHeight={2} fontWeight={"medium"}>
          I hope to accompany you guys to build this game.
        </Text>
        <Text fontWeight={"bold"} color={"white"}>
          Thank you guys
        </Text>
      </Box>
    </div>
  );
}

import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Pause from "../../components/pause";
type Props = {};

export default function OverviewScreen({}: Props) {
  return (
    <div>
      {/* <Box
        as={"img"}
        src="/assets/overview-banner.png"
        position={"fixed"}
        top={0}
        left={0}
        width={"auto"}
        minHeight={"100%"}
        backgroundSize={"conver"}
        zIndex={-1}
      /> */}
      <video autoPlay muted loop id="myVideo">
        <source src="/assets/Clip.mp4" type="video/mp4" />
      </video>
      <Header />

      <Box padding={10} position={"absolute"} top={"20%"}>
        <Text
          textTransform={"uppercase"}
          fontWeight={"bold"}
          fontSize={18}
          color={"white"}
        >
          Smart contract
        </Text>
        <Text fontSize={13} fontWeight={500}>
          0x5E232d2DC21070269b...8F3920A6e69b032
        </Text>
      </Box>
      <Flex
        padding={10}
        position={"absolute"}
        top={"65%"}
        alignItems="center"
        width={"100%"}
        justifyContent="space-between"
      >
        <Box>
          <Flex gap={5}>
            <Box>
              <Image src="/assets/video1.png" />
              <Box position={"absolute"} bottom={"39%"} left={"8%"}>
                <Pause />
              </Box>
            </Box>

            <Image src="/assets/video2.png" />
            <Image src="/assets/video3.png" />
          </Flex>
        </Box>
        <Box>
          <Text
            textTransform={"uppercase"}
            fontWeight="bold"
            fontSize={48}
            color={"white"}
          >
            king playing in
          </Text>
          <Image src="/assets/the-space-stroke.svg" float={"right"} />
        </Box>
      </Flex>
      <Footer />
    </div>
  );
}

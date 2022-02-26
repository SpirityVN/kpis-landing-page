import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import styles from "./style.module.scss";
import Pause from "../../components/pause";

interface Props {
  hidden: boolean;
}
export default function OverviewScreen({ hidden }: Props) {
  return (
    <div id="screen" className={hidden ? "active-hidden" : ""}>
      <motion.div
        initial={{ x: -100, y: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{
          duration: 0.9,
        }}
      >
        <Box padding={10} position={"relative"} top={"25%"} width={"50%"}>
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
      </motion.div>

      <Flex
        padding={10}
        position={"relative"}
        top={"35%"}
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
        <motion.div
          initial={{ x: 100, y: 0, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{
            duration: 0.9,
          }}
        >
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
        </motion.div>
      </Flex>
    </div>
  );
}

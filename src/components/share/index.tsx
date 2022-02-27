import React, { useState } from "react";
import { Box, Icon, VStack } from "@chakra-ui/react";
import { FiShare2 } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import {
  FaDiscord,
  FaFacebookF,
  FaMediumM,
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import CircleButton from "../circle-button";
import { motion } from "framer-motion";

const SocialNetwork = [
  {
    id: 0,
    icon: FaFacebookF,
  },
  {
    id: 1,
    icon: FaTwitter,
  },
  {
    id: 2,
    icon: FaTelegramPlane,
  },
  {
    id: 3,
    icon: FaYoutube,
  },
  {
    id: 4,
    icon: FaMediumM,
  },
  {
    id: 5,
    icon: FaDiscord,
  },
];

export default function Share() {
  const [show, setShow] = useState(false);
  return (
    <VStack spacing={4} align="stretch" zIndex={9999}>
      <Box>
        <CircleButton onClick={() => setShow(!show)}>
          <Icon
            as={!show ? FiShare2 : IoMdClose}
            fontSize={19}
            color={"#c4c4c4"}
            _active={{ color: "#ffffff" }}
          />
        </CircleButton>
      </Box>
      <motion.nav initial={false} animate={show ? "open" : "closed"}>
        <motion.ul
          style={{ listStyle: "none" }}
          variants={{
            open: {
              transition: { staggerChildren: 0.07, delayChildren: 0.2 },
            },
            closed: {
              transition: { staggerChildren: 0.05, staggerDirection: -1 },
            },
          }}
        >
          {SocialNetwork.map((value: any) => {
            return (
              <motion.li
                style={{ marginBottom: "10px" }}
                key={value.id}
                variants={{
                  open: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      y: 10,
                    },
                  },
                  closed: {
                    y: 50,
                    opacity: 0,
                    transition: {
                      y: { stiffness: 1000 },
                    },
                  },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <CircleButton>
                  <Icon
                    as={value.icon}
                    fontSize={19}
                    color={"#ffffff"}
                    _active={{ color: "#ffffff" }}
                  />
                </CircleButton>
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.nav>
    </VStack>
  );
}

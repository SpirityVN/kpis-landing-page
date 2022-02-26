import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Page } from "../../types";
import styles from "./style.module.scss";

// const Page = ["overview", "backed by", "our team"];


interface Props {
  page: Page[]
  currentPage: number
  handlePageChange(number: number | string | undefined): void;
}

export default function ControlPage({ page, currentPage, handlePageChange }: Props) {
  
  return (
    <Box position={"absolute"} top={"40%"}>
      <VStack spacing={3} align="stretch" padding={10}>
        {page.map((value: Page, index: number) => {
          return (
            <Flex alignItems={"center"} gap={28} key={index}>
              <motion.div
                onClick={() => handlePageChange(value.id)}
                className={styles.section}
                whileHover={{ width: 100 }}
                animate={{
                  width: value.id === currentPage ? 100 : 50,
                  backgroundColor: value.id === currentPage ? "#ffffff" : "#c4c4c4",
                  opacity: value.id === currentPage ? 1 : 0.5,
                }}
              />
              {value.id === currentPage && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <Text textTransform={"uppercase"} color="white">
                    {value.title}
                  </Text>
                </motion.div>
              )}
            </Flex>
          );
        })}
      </VStack>
    </Box>
  );
}

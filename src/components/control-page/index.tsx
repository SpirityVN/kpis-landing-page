import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import styles from "./style.module.scss";

// const Page = ["overview", "backed by", "our team"];
type Page = {
  id: number;
  title: string;
  active: boolean;
};
const PageProps: Page[] = [
  {
    id: 0,
    title: "overview",
    active: true,
  },
  {
    id: 1,
    title: "backed by",
    active: false,
  },
  {
    id: 2,
    title: "our team",
    active: false,
  },
];

export default function ControlPage() {
  const [page, selectPage] = useState(PageProps);
  const handleSelectPage = (target: Page) => {
    try {
      let prevPage = page.find((value) => value.active === true);

      if (prevPage) {
        let indexOfPrevPage = page.indexOf(prevPage);
        page[indexOfPrevPage].active = false;
      }
      let currentPage = page.find((value) => value.id === target.id);
      if (currentPage) {
        let indexOfCurrentPage = page.indexOf(currentPage);
        page[indexOfCurrentPage].active = true;
      }
      selectPage([...page]);
    } catch (err: any) {
      console.log(err);
    }
  };
  return (
    <Box position={"absolute"} top={"40%"}>
      <VStack spacing={3} align="stretch" padding={10}>
        {page.map((value: Page, index: number) => {
          return (
            <Flex alignItems={"center"} gap={28} key={index}>
              <motion.div
                onClick={() => handleSelectPage(value)}
                className={styles.section}
                whileHover={{ width: 100 }}
                animate={{
                  width: value.active ? 100 : 50,
                  backgroundColor: value.active ? "#ffffff" : "#c4c4c4",
                  opacity: value.active ? 1 : 0.5,
                }}
              />
              {value.active && (
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

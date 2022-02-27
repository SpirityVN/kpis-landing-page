import { Box, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./style.module.scss";
type Props = {
  hidden: boolean;
};

export default function ComingSoonScreen({ hidden }: Props) {
  return (
    <Box
      id="screen"
      className={hidden ? "active-hidden" : ""}
      display={"flex"}
      justifyContent="center"
      position={"relative"}
      top={"25%"}
    >
      <div className={styles.glitch}>
        <div className={styles.line}>COMING SOON</div>
        <div className={styles.line}>COMING SOON</div>
        <div className={styles.line}>COMING SOON</div>
        <div className={styles.line}>COMING SOON</div>
        <div className={styles.line}>COMING SOON</div>
        <div className={styles.line}>COMING SOON</div>
        <div className={styles.line}>COMING SOON</div>
        <div className={styles.line}>COMING SOON</div>
        <div className={styles.line}>COMING SOON</div>
      </div>
    </Box>
  );
}

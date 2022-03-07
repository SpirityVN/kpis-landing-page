import { Stack, useToast, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import React, { useState } from "react";
import { Socket } from "socket.io-client";
import { Minesweeper } from "../../../contracts/Minesweeper";
import Cell from "./cell-game";
import { pattern } from "./pattern";

type Props = {
  wasOpen: number[] | undefined;
  socket: Socket | undefined;
  minesweeperContract: Minesweeper | undefined;
  updateTurnOfAccount: any;
};
const row = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Game({
  wasOpen,
  socket,
  minesweeperContract,
  updateTurnOfAccount,
}: Props) {
  const toast = useToast();
  const [target, setTarget] = useState<number>(-1);
  const handleOpen = async (key: number) => {
    try {
      setTarget(key);
      let tx = await minesweeperContract?.openCell(key);
      let txr = await tx?.wait();
      if (txr) {
        let openCellEvent = txr.events?.filter(
          (data) => data.event === "OpenCell"
        );
        console.log(openCellEvent);
        socket?.emit("SEND_OPEN_CELL", {
          eventId: 1,
          event: openCellEvent,
        });
        updateTurnOfAccount();
        setTarget(-1);
      }
    } catch (error: any) {
      toast({
        position: "top-right",
        title: "Error from contract!",
        description: error?.data.message,
        status: "error",
      });
      setTarget(-1);
    }
  };
  return wasOpen ? (
    <Stack spacing={4}>
      {row.map((value) => {
        return (
          <Wrap spacing={4} key={value}>
            {pattern.slice(value * 10, value * 10 + 10).map((index) => {
              return (
                <Cell
                  isOpen={wasOpen[index] !== -1 ? true : false}
                  key={index}
                  value={index}
                  isLoading={target === index ? true : false}
                  onClick={() => handleOpen(index)}
                  itemId={wasOpen[index]}
                />
              );
            })}
          </Wrap>
        );
      })}
    </Stack>
  ) : null;
}

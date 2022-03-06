import { Stack, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import Cell from "./cell-game";
import { pattern, wasOpen } from "./pattern";

type Props = {};
const row = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Game({}: Props) {
  return (
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
                  itemId={wasOpen[index]}
                />
              );
            })}
          </Wrap>
        );
      })}
    </Stack>
  );
}

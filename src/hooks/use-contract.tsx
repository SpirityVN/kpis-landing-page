import React, { useState } from "react";
import { Minesweeper__factory } from "../contracts/factories/Minesweeper__factory";
import { Minesweeper } from "../contracts/Minesweeper";
import { BigNumberish, ethers } from "ethers";

type Props = {
  status: any;
  account: any;
};
const MINESWEEPER_CONTRACT = "0x1eB3b4ecb77F504156e0710E42AbCFBb3ce6001b";
export default function useContract({ status, account }: Props) {
  const [minesweeperContract, setMinesweeperContract] = useState<
    Minesweeper | undefined
  >(undefined);
  const [priceOfTurn, setPriceOfTurn] = useState<any>(undefined);
  const [turnOfAccount, setTurnOfAccount] = useState<number | undefined>(0);
  const [totalSupply, setTotalSupply] = useState<BigNumberish | undefined>(
    undefined
  );
  const updateTurnOfAccount = async () => {
    const _turn = await minesweeperContract?.turns(account as string);
    setTurnOfAccount(_turn);
  };
  const initialize = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    let _contract: Minesweeper = Minesweeper__factory.connect(
      MINESWEEPER_CONTRACT,
      signer
    );
    const _price = await _contract.priceOfTurn();
    const _turn = await _contract.turns(account as string);
    const _totalSupply = await _contract.getBalance();
    setTurnOfAccount(_turn);
    setPriceOfTurn(_price);
    setMinesweeperContract(_contract);
    setTotalSupply(_totalSupply);
  };
  React.useEffect(() => {
    if (status && account) {
      // let _contract = Minesweeper__factory.connect(MINESWEEPER_CONTRACT, )
      initialize();
    }
  }, [status, account]);
  return {
    minesweeperContract,
    priceOfTurn,
    turnOfAccount,
    updateTurnOfAccount,
    totalSupply,
  };
}

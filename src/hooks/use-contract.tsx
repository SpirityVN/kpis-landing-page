import React, { useState } from "react";
import { Minesweeper__factory } from "../contracts/factories/Minesweeper__factory";
import { Minesweeper } from "../contracts/Minesweeper";
import { BigNumberish, ethers } from "ethers";

export const MINESWEEPER_CONTRACT = "0x944aF3899cF7c857417469c218d007adC13376a4";

export default function useContract(account: string) {
  const [minesweeperContract, setMinesweeperContract] = useState<
    Minesweeper | undefined
  >(undefined);
  const [priceOfTurn, setPriceOfTurn] = useState<any>(undefined);
  const [statusContract, setStatusContract] = useState<boolean | undefined>(undefined);
  const [turnOfAccount, setTurnOfAccount] = useState<number | undefined>(
    undefined
  );
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
    const _statusContract = await _contract.paused();
    setTurnOfAccount(_turn);
    setPriceOfTurn(_price);
    setMinesweeperContract(_contract);
    setTotalSupply(_totalSupply);
    setStatusContract(_statusContract);
  };
  React.useEffect(() => {
    if (account) {
      initialize();
    }
  }, [account]);
  return {
    minesweeperContract,
    priceOfTurn,
    turnOfAccount,
    updateTurnOfAccount,
    totalSupply,
    statusContract
  };
}

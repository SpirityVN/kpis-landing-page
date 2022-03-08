import { ethers } from "ethers";

export const wei2ether = (num: number | any) => {
  if (!num) return "_._";
  try {
    return ethers.utils.formatEther(num.toString() || "0");
  } catch (e) {
    return "";
  }
};
export const beautifyNumber = (num: string | undefined) => {
    if(num) return parseFloat(num).toFixed(2);
}
export const beautifyAddress = (
  address: string | null | undefined,
  start: number,
  end: number
) => {
  let first = address?.substring(0, start);
  let second = address?.substring(address.length - end, address.length);
  return first + "..." + second;
};

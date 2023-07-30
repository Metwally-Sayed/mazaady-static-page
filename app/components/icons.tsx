import Image from "next/image";
import React from "react";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { VscSend } from "react-icons/vsc";
import GoldenStarIcon from "../Group 1337.png";
import SilverStarIcon from "../Group 1338.png";

type Props = {};

export const DownIcon = (props: Props) => {
  return (
    <div className=" cursor-pointer h-[24px] w-[24px] rounded-md bg-white bg-no-repeat bg-origin-padding shadow-2xl">
      <RiArrowDownSLine size={24} />
    </div>
  );
};

export const UpIcon = (props: Props) => {
  return (
    <div className=" cursor-pointer h-[24px] w-[24px] rounded-md bg-white bg-no-repeat bg-origin-padding shadow-2xl">
      <RiArrowUpSLine size={24} />
    </div>
  );
};

export const GoldenStar = (props: Props) => {
  return (
    <div>
      <Image src={GoldenStarIcon} alt={""} width={17} height={17} />
    </div>
  );
};

export const SilverStar = (props: Props) => {
  return (
    <div>
      <Image src={SilverStarIcon} alt={""} width={17} height={17} />
    </div>
  );
};

export const SendIcon = (props: Props) => {
  return (
    <div className="mx-auto">
      <VscSend size={24} />{" "}
    </div>
  );
};

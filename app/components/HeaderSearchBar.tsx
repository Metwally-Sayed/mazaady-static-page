"use client";

import React from "react";
import Image from "next/image";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { AiTwotoneHeart } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import { useState, useEffect } from "react";

import logo from "../Layer 2.png";
import Link from "next/link";

type Props = {};

const HeaderSearchBar = (props: Props) => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(windowSize);

  return (
    <div className="w-full h-[146px] flex flex-col ">
      <section className="h-1/2 w-full flex flex-row justify-center py-4">
        <div className="h-[45px] w-[30%] ">
          <Image src={logo} alt={"logo"} />
        </div>
        <div className="h-[45px] w-[69%] flex flex-row-reverse ">
          <button className=" text-right text-[#D20653] bg-[#D20653]/[10%] w-[17%] pr-4 lg:text-lg truncate text-sm font-Tajawal rounded-[5px] flex items-center justify-center ">
            <BiChevronDown size={24} />
            مزاد مباشر متعدد
          </button>
          <input
            placeholder="ابحث هنا"
            type="text"
            className="bg-[#D20653]/[10%] border-2 border-r-white w-[90%] text-right pr-3 rounded-[5px]"
          />
          <button className="h-[45px] w-[64px] bg-[#D20653] rounded-[5px] text-white flex justify-center items-center">
            <HiOutlineSearch size={24} />
          </button>
        </div>
      </section>
      <section className="h-1/2 bg-gradient-to-tl from-[#9B0257] to-[#D20653] flex justify-between w-full items-center">
        {windowSize.width <= 700 ? null : (
          <div className="p-3 flex w-1/2 text-white">
            <div className="w-auto pr-7 ">
              {" "}
              <div className="w-[83px] h-[29px] rounded-xl bg-[#FF951D] text-white text-[16px] font-bold flex items-center justify-evenly ">
                {" "}
                <BiChevronDown size={24} />
                <div className=" text-end">عربيه</div>
              </div>
            </div>
            <div className="lg:w-[7%]">
              <RiMoneyDollarBoxFill size={24} />
            </div>
            <div className="lg:w-[7%]">
              {" "}
              <AiTwotoneHeart size={24} />
            </div>
            <div className="lg:w-[7%]">
              {" "}
              <IoIosNotifications size={24} />
            </div>
          </div>
        )}

        <div className=" p-3 flex flex-row-reverse lg:w-1/2 w-full justify-start text-white font-[16px] ">
          <Link className="lg:w-[13%] text-end mx-2" href={"/"}>
            الرئيسية
          </Link>
          <Link className="lg:w-[13%] text-end mx-2" href={"/"}>
            التصنيفات
          </Link>
          <Link className="lg:w-[13%] text-end mx-2" href={"/"}>
            مشترياتى
          </Link>
          <Link className="lg:w-[13%] text-end mx-2" href={"/"}>
            حسابى
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HeaderSearchBar;

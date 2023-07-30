import React from "react";

type Props = {};

const PriceCards = (props: Props) => {
  return (
    <div className="h-[157px] bg-white rounded-md bg-no-repeat bg-origin-padding shadow-2xl px-[13px] pt-[13px] w-[100%]">
      <div className="bg-[#414141] rounded-md flex justify-between h-[40px] text-white items-center px-3 mb-3">
        <p>22-1-2022</p>
        <p>تاريخ البث</p>
      </div>
      <div className="flex justify-between items-center ">
        <div className="h-[76px] w-[49%] bg-[#44215D]/[10%] rounded-md text-[#44215D]">
          <p className="text-center">القيمة الحالية بعد الضريبة</p>
          <p className="text-center mt-2 font-bold text-2xl">
            {" "}
            <span className=" font-bold text-base text-">$</span> 5050
          </p>
        </div>
        <div className="h-[76px] w-[49%] bg-[#44215D] rounded-md text-white">
          <p className="text-center">القيمة الحالية بعد الضريبة</p>
          <p className="text-center mt-2 font-bold text-2xl">
            {" "}
            <span className=" font-bold text-base text-">$</span> 5050
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceCards;

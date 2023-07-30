import React from "react";
import { DownIcon, GoldenStar, SendIcon, SilverStar, UpIcon } from "./icons";

type Props = {};

const InfoSection = (props: Props) => {
  return (
    <>
      <div className="lg:w-[55%] w-full flex flex-col items-end  ">
        {/* Slider section */}
        <div className="flex w-full">
          <div className=" h-[558px] w-full bg-white rounded-md bg-no-repeat bg-origin-padding shadow-2xl flex flex-col mr-2 ">
            <img
              className="w-full h-[379px] rounded-md"
              src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
            <div className="p-[10px]">
              <div className="flex justify-end">
                <div className="pr-5 flex">
                  <GoldenStar />
                  <GoldenStar />
                  <GoldenStar />
                  <GoldenStar />
                  <SilverStar />
                </div>
                <div className=" text-[#44215D]">
                  <h3 className="text-[16px] font-bold text-right h-[24px]">
                    اسم البائع
                  </h3>
                  <p className="text-[12px] h-[17px]">+966598398</p>
                </div>
                <div className="w-[44px] h-[44px] mx-2">
                  <img
                    className="w-[44px] h-[44px] rounded-full "
                    src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=48&q=100"
                    alt="profile"
                  />
                </div>
              </div>
              <div className="my-[14px] px-2">
                <h2 className="h-[29px] font-bold text-[#414141] lg:text-[20px] md:text-[16px] w-full mb-5 lg:mb-0 text-right">
                  شراء مجموعة من السيارات من موديلات 1990
                </h2>
                <p className="text-[12px] text-[#808080] text-right">
                  code 1234
                </p>
              </div>
              <div className="flex lg:flex-row-reverse flex-col-reverse justify-between w-full">
                <div className=" text-[#D20653] flex lg:justify-between justify-around lg:w-[31%] w-full mt-2 ">
                  <div className="bg-[#D20653]/[10%] h-[38px] lg:w-[72px] w-[50px] flex justify-center items-center rounded">
                    +10000
                  </div>
                  <div className="bg-[#D20653]/[10%] h-[38px] lg:w-[72px] flex justify-center items-center rounded">
                    +10000
                  </div>
                  <div className="bg-[#D20653]/[10%] h-[38px] lg:w-[72px] flex justify-center items-center rounded">
                    +10000
                  </div>
                </div>
                <div className="flex flex-row-reverse justify-between ">
                  <div>
                    <input
                      type="text"
                      placeholder="اكتب المبلغ"
                      className="lg:w-[195px] w-[50%] h-[38px] border border-gray-300 rounded px-1 text-right"
                    />
                  </div>
                  <div>
                    <button className=" bg-gradient-to-tl from-[#9B0257] to-[#D20653] text-white h-[38px] w-[89px] text-[13px] ">
                      تأكيد
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col items-end my-auto justify-around ">
            <div className="flex justify-center w-full shadow-2xl mb-2">
              <UpIcon />
            </div>
            <div className="w-[78px] h-[78px] mb-2">
              <img
                className="w-[78px] h-[78px] rounded-md shadow-2xl"
                src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
            </div>
            <div className="w-[78px] h-[78px] mb-2">
              <img
                className="w-[78px] h-[78px] rounded-md shadow-2xl"
                src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
            </div>
            <div className="w-[78px] h-[78px] mb-2">
              <img
                className="w-[78px] h-[78px] rounded-md shadow-2xl"
                src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
            </div>
            <div className="w-[78px] h-[78px] mb-2">
              <img
                className="w-[78px] h-[78px] rounded-md shadow-2xl"
                src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
            </div>
            <div className="w-[78px] h-[78px] mb-2">
              <img
                className="w-[78px] h-[78px] rounded-md shadow-2xl"
                src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
            </div>
            <div className=" flex justify-center w-full shadow-2xl ">
              <DownIcon />
            </div>
          </div>
        </div>
        {/* comments section*/}
        <div className="mt-[34px] xl:w-[90%] w-full  bg-white rounded-md bg-no-repeat bg-origin-padding shadow-2xl flex flex-col xl:mr-20 mr-0 h-[134px] p-[10px] mb-10 ">
          <h3 className="text-[#414141] text-[20px] font-bold text-right">
            ارسال رسالة الى البائع
          </h3>
          <p className="text-[#414141] lg:text-[14px] text-[12px] text-right">
            يمكنك في وقت البث المباشر ارسال رسالة الى البائع للاستفسار
          </p>
          <div className="w-full flex mt-2 justify-between ">
            <button className=" bg-gradient-to-tl from-[#9B0257] to-[#D20653] text-white rounded-full w-[44px] h-[44px] flex justify-center items-center ">
              <SendIcon />
            </button>
            <input
              placeholder="اكتب سؤالك"
              className="w-[93%] h-[38px] rounded-2xl bg-[#F3F3F3] border border-gray-300 px-2 text-right"
              type="text"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoSection;

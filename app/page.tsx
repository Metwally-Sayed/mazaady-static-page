import Image from "next/image";
import Slider from "./components/InfoSection";
import InfoSection from "./components/InfoSection";
import PriceCards from "./components/PriceCards";

export default function Home() {
  return (
    <section className="pt-[48Px] flex w-full justify-center flex-col-reverse md:flex-row">
      <div className="lg:w-[25%] w-full flex flex-col justify-start mr-5">
        <PriceCards />

        {/* competitors */}
        <div className="h-[338px] bg-white rounded-md bg-no-repeat bg-origin-padding shadow-2xl px-[13px] pt-[13px] w-[100%] mt-6">
          <h2 className="text-[#1D1D1D] text-[20px] text-right">المتنافسون</h2>
          <div className="flex flex-row-reverse justify-between mt-3">
            <div className="flex justify-end">
              <div className=" text-[#44215D]">
                <h3 className="text-[16px] font-bold text-right h-[24px]">
                  اسم المزايد{" "}
                </h3>
                <p className="text-[12px] text-[#808080] h-[17px]">13:59:00</p>
              </div>
              <div className="w-[44px] h-[44px] mx-2">
                <img
                  className="w-[44px] h-[44px] rounded-full "
                  src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=48&q=100"
                  alt="profile"
                />
              </div>
            </div>
            <div className=" h-[32px] w-[55px] bg-[#FDBC01]/[10%] text-center flex justify-center items-center text-xl text-[#FF951D] ">
              +20
            </div>
          </div>
          <div className="flex flex-row-reverse justify-between mt-3">
            <div className="flex justify-end">
              <div className=" text-[#44215D]">
                <h3 className="text-[16px] font-bold text-right h-[24px]">
                  اسم المزايد{" "}
                </h3>
                <p className="text-[12px] text-[#808080] h-[17px]">13:59:00</p>
              </div>
              <div className="w-[44px] h-[44px] mx-2">
                <img
                  className="w-[44px] h-[44px] rounded-full "
                  src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=48&q=100"
                  alt="profile"
                />
              </div>
            </div>
            <div className=" h-[32px] w-[55px] bg-[#FDBC01]/[10%] text-center flex justify-center items-center text-xl text-[#FF951D] ">
              +20
            </div>
          </div>
          <div className="flex flex-row-reverse justify-between mt-3">
            <div className="flex justify-end">
              <div className=" text-[#44215D]">
                <h3 className="text-[16px] font-bold text-right h-[24px]">
                  اسم المزايد{" "}
                </h3>
                <p className="text-[12px] text-[#808080] h-[17px]">13:59:00</p>
              </div>
              <div className="w-[44px] h-[44px] mx-2">
                <img
                  className="w-[44px] h-[44px] rounded-full "
                  src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=48&q=100"
                  alt="profile"
                />
              </div>
            </div>
            <div className=" h-[32px] w-[55px] bg-[#FDBC01]/[10%] text-center flex justify-center items-center text-xl text-[#FF951D] ">
              +20
            </div>
          </div>
          <div className="flex flex-row-reverse justify-between mt-3">
            <div className="flex justify-end">
              <div className=" text-[#44215D]">
                <h3 className="text-[16px] font-bold text-right h-[24px]">
                  اسم المزايد{" "}
                </h3>
                <p className="text-[12px] text-[#808080] h-[17px]">13:59:00</p>
              </div>
              <div className="w-[44px] h-[44px] mx-2">
                <img
                  className="w-[44px] h-[44px] rounded-full "
                  src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=48&q=100"
                  alt="profile"
                />
              </div>
            </div>
            <div className=" h-[32px] w-[55px] bg-[#FDBC01]/[10%] text-center flex justify-center items-center text-xl text-[#FF951D] ">
              +20
            </div>
          </div>
          <div className="flex flex-row-reverse justify-between mt-3">
            <div className="flex justify-end">
              <div className=" text-[#44215D]">
                <h3 className="text-[16px] font-bold text-right h-[24px]">
                  اسم المزايد{" "}
                </h3>
                <p className="text-[12px] text-[#808080] h-[17px]">13:59:00</p>
              </div>
              <div className="w-[44px] h-[44px] mx-2">
                <img
                  className="w-[44px] h-[44px] rounded-full "
                  src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=48&q=100"
                  alt="profile"
                />
              </div>
            </div>
            <div className=" h-[32px] w-[55px] bg-[#FDBC01]/[10%] text-center flex justify-center items-center text-xl text-[#FF951D] ">
              +20
            </div>
          </div>
        </div>

        {/* Fees */}
        <div className="h-[290px] bg-white rounded-md bg-no-repeat bg-origin-padding shadow-2xl px-[13px] pt-[13px] w-[100%] mt-6">
          <div className="h-[43px] bg-[#707070]/[10%] rounded-md px-[13px]  w-[100%] mb-2 flex flex-row-reverse justify-between items-center ">
            <p>القيمة الابتدائية</p>
            <h2 className="text-[#707070] font-bold text-[24px]">5000</h2>
          </div>
          <div className="h-[43px] bg-[#707070]/[10%] rounded-md px-[13px]  w-[100%] mb-2 flex flex-row-reverse justify-between items-center ">
            <p>القيمة التقريبية</p>
            <h2 className="text-[#707070] font-bold text-[24px]">5000</h2>
          </div>
          <div className="h-[43px] bg-[#707070]/[10%] rounded-md px-[13px]  w-[100%] mb-2 flex flex-row-reverse justify-between  items-center">
            <p>العربون</p>
            <h2 className="text-[#707070] font-bold text-[24px]">5000</h2>
          </div>
          <div className="h-[43px] bg-[#707070]/[10%] rounded-md px-[13px]  w-[100%] mb-2 flex flex-row-reverse justify-between items-center ">
            <p>سعر الشراء الفورى</p>
            <h2 className="text-[#707070] font-bold text-[24px]">5000</h2>
          </div>
          <div className="h-[43px] bg-[#707070]/[10%] rounded-md px-[13px]  w-[100%] mb-2 flex flex-row-reverse justify-between items-center">
            <p>قيمة ذيادة المزاد</p>
            <h2 className="text-[#707070] font-bold text-[24px]">5000</h2>
          </div>
        </div>
      </div>
      <InfoSection />
    </section>
  );
}

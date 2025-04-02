import Image from "next/image";
import ellipsis from "@/public/icon-ellipsis.svg";

interface Data {
  title: string;
  current: number;
  previous: number;
  color: string;
  img_src: string;
  timeframes: string;
}

function Card({ title, current, previous, color, img_src, timeframes }: Data) {
  return (
    <div className="relative my-[20px] rounded-2xl overflow-hidden flex flex-col min-w-[230px] min-h-[160px] md:min-w-[260px] md:min-h-[230px] md:my-0" style={{ backgroundColor: color }}>
      {/* Top Section with Icon */}
      <div className="flex justify-end items-center p-4 relative -top-[24px]">
        <Image src={img_src} width={60} height={60} alt="Icon"/>
      </div>

      {/* Dark Content Section (90% height, starts from bottom) */}
      <div className="absolute bottom-0 w-full h-[80%] bg-[#1e204c] p-3 flex flex-col gap-2 rounded-t-2xl hover:bg-[#34397b] hover:cursor-pointer z-10  md:p-6">
        {/* Title & Options */}
        <div className="flex justify-between items-center">
          <p className="font-medium text-white md:text-xl">{title}</p>
          <Image
            src={ellipsis}
            width={20}
            height={20}
            alt="Options"
            className="cursor-pointer opacity-75 hover:opacity-100"
          />
        </div>

        {/* Hours Section */}
        <div className="flex justify-between w-full md:flex-col ">
          <p className="text-3xl md:text-5xl font-semibold text-white mr-5 md:my-2 md:mb-3 ">{current}hrs</p>
          <p className="text-gray-400 text-sm ">
            Last {timeframes}: {previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;

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
    <div className=" w-[300px] mx-auto my-3 rounded-2xl overflow-hidden z-10 flex flex-col">
      {/* Colored Background (Top Section) - Will expand on hover */}
      <div 
        className={`h-[100px] flex justify-end items-center p-3 -mt-8 `} 
        style={{ backgroundColor: color }}
      >
        <Image src={img_src} width={60} height={60} alt="Icon" className="h-auto"/>
      </div>

      {/* Dark Content Section */}
      <div className="bg-[#1e204c] -mt-8 min-h-[100px] p-4 flex-1 flex flex-col gap-1 rounded-2xl">
        {/* Top Section with Title & Ellipsis */}
        <div className=" flex justify-between items-center">
          <p className=" font-medium text-white">{title}</p>
          <Image
            src={ellipsis}
            width={20}
            height={20}
            alt="Options"
            className="cursor-pointer opacity-75 hover:opacity-100 overflow-hidden  hover:brightness-200 filter "
            style={{ width: "auto", height: "auto" }}
          />
        </div>

        {/* Middle Section with Hours */}
        <div className="flex justify-between items-center mb-2">
          <p className="text-2xl font-semibold text-white">{current}hrs</p>
          <p className="text-gray-400 text-sm">
            Last {timeframes}: {previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;

import Image from "next/image";
import jeremy from "@/public/image-jeremy.png";

interface ForBtn {
  select: number;
  setSelect: (num: number) => void;
}

function Profile({ select, setSelect }: ForBtn) {
  return (
    <div className="relative mx-auto bg-[#1e204c] rounded-2xl overflow-hidden mb-3 ">
      {/* Profile Header */}
      <div className="flex md:flex-col gap-4 p-4 py-10 bg-[#5847e9] rounded-2xl  ">
        {/* Profile Image */}
        <div className="bg-white rounded-full p-[3px] w-16 h-16 ">
          <Image 
            src={jeremy} 
            alt="Jeremy Robson" 
            className="rounded-full"  
            style={{ width: "auto", height: "auto" }} 
            priority 
          />
        </div>

        {/* Name and Report Text */}
        <div className="text-white text-center   md:text-left md:mt-4 md:mb-16">
          <p className="text-sm md:text-lg opacity-70">Report for</p>
          <h1 className="text-lg md:text-4xl ">Jeremy Robson</h1>
        </div>
      </div>

      {/* Timeframe Selection */}
      <div className="flex justify-around py-3 md:flex-col md:items-start md:pl-3 ">
        {["Daily", "Weekly", "Monthly"].map((label, index) => (
          <button
            key={index}
            onClick={() => setSelect(index)}
            className={`px-3 py-2 text-sm md:text-lg transition-all 
              text-gray-400
              ${select === index ? "text-white" : "text-gray-400"} 
              hover:text-white`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}


export default Profile;

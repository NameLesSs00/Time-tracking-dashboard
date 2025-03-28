import Image from "next/image";
import jeremy from "@/public/image-jeremy.png";

interface ForBtn {
  select: number;
  setSelect: (num: number) => void;
}

function Profile({ select, setSelect }: ForBtn) {
  return (
    <div className="relative w-[300px] mx-auto bg-[#1e204c] rounded-2xl overflow-hidden mb-3">
      {/* Profile Header */}
      <div className="flex items-center gap-4 p-4 py-8 bg-[#5847e9] rounded-2xl">
        <div className="bg-white rounded-full p-[3px] w-16 h-16 flex items-center justify-center">
          <Image src={jeremy} alt="Jeremy Robson" className="rounded-full "  style={{ width: "auto", height: "auto" }} priority/>
        </div>
        <div className="text-white">
          <p className="text-sm opacity-80">Report for</p>
          <h1 className="text-lg font-semibold">Jeremy Robson</h1>
        </div>
      </div>

      {/* Timeframe Selection */}
      <div className="flex justify-around py-3">
        {["Daily", "Weekly", "Monthly"].map((label, index) => (
          <button
            key={index}
            onClick={() => setSelect(index)}
            className={`px-3 py-2 text-sm rounded-md transition-all 
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

import { PiCopyrightThin } from "react-icons/pi";

const Copyright = () => {
  return (
    <div className="flex items-center justify-center bg-gray-400 p-1 text-white">
      <span className="mr-2 font-thin">copyright to UrbanForge</span>
      <PiCopyrightThin />
      <span className="ml-2 font-thin">{new Date().getFullYear()}</span>
    </div>
  );
};

export default Copyright;

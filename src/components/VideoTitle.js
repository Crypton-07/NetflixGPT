import React from "react";
import { PlayIcon, InformationCircleIcon } from "@heroicons/react/24/solid";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[28%] md:pt-[20%] lg:pt-[17%] px-4 md:px-10 absolute bg-gradient-to-r from-black bg-opacity-100">
      <h1 className="text-md md:text-2xl lg:text-4xl font-bold text-white w-48 md:w-1/2 py-3">
        {title}
      </h1>
      <p className="hidden md:text-clip md:overflow-hidden md:block py-4 text-sm md:text-md lg:text-lg md:w-2/3 lg:w-[60%] text-white">
        {overview}
      </p>
      <div className="flex space-x-2 items-center md:pt-0">
        <button className="px-2 py-2 text-xs md:text-sm md:px-6 md:py-2 bg-white text-white font-medium bg-opacity-25 hover:bg-opacity-100 hover:text-black rounded-sm flex items-center space-x-1 transition ease-in duration-100">
          <PlayIcon className="w-4 md:w-6" /> <span>Play</span>
        </button>
        <button className="px-2 py-2 text-xs md:text-sm md:px-6 md:py-2 bg-white text-white font-medium bg-opacity-25 hover:bg-opacity-100 hover:text-black  rounded-sm flex items-center space-x-1 transition ease-in duration-100">
          <InformationCircleIcon className="w-4 md:w-6" />
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

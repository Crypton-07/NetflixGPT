import React from "react";
import { PlayIcon, InformationCircleIcon } from "@heroicons/react/24/solid";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video sm:pt-[20%] md:pt-[25%] lg:pt-[20%] px-20 absolute bg-gradient-to-r from-black bg-opacity-100">
      <h1 className="text-4xl font-bold text-white">{title}</h1>
      <p className="py-4 text-md sm:w-2/3 lg:w-1/3 text-white">{overview}</p>
      <div className="flex space-x-2 items-center ">
        <button className="px-6 py-2 bg-white text-white font-medium bg-opacity-25 hover:bg-opacity-100 hover:text-black  rounded-sm flex items-center space-x-1 transition ease-in duration-100">
          <PlayIcon width={20} /> <span>Play</span>
        </button>
        <button className="px-6 py-2 bg-white text-white font-medium bg-opacity-25 hover:bg-opacity-100 hover:text-black  rounded-sm flex items-center space-x-1 transition ease-in duration-100">
          <InformationCircleIcon width={20} /> <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

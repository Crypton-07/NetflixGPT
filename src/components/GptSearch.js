import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMAGE } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10 ">
        <img className="h-screen w-screen  object-cover" src={BG_IMAGE} alt="BG_Image" />
      </div>
      <div className="w-full h-screen bg-black bg-opacity-[0.82] overflow-auto pt-[30%] md:pt-[15%] lg:pt-[10%]">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;

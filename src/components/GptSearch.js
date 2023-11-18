import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMAGE } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="w-full h-screen bg-black bg-opacity-[0.82] overflow-auto">
      <div className="fixed -z-10 ">
        <img
          src={BG_IMAGE}
          alt="BG_Image"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;

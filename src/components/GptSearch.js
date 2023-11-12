import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMAGE } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="h-screen">
      <div className="absolute -z-10">
        <img className="w-screen h-screen" src={BG_IMAGE} alt="BG_Image" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;

import React from "react";
import { tmdbImageUrl } from "../utils/constants";

const MovieCard = ({ movie }) => {
  const { poster_path, title } = movie;
  if (!poster_path) return null;
  return (
    <div className="hover:scale-95 transition ease-in duration-200 rounded-sm">
      <div className="w-32 md:w-40 lg:w-52 h-auto py-1 px-1">
        <img src={`${tmdbImageUrl}${poster_path}`} alt={"MovieCard"} />
      </div>
      {/* <p
        className={`text-white text-xs md:text-sm font-medium text-center py-2 my-auto w-full h-18 md:h-14 overflow-hidden`}
      >
        {title}
      </p> */}
    </div>
  );
};

export default MovieCard;

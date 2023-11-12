import React from "react";
import { tmdbImageUrl } from "../utils/constants";

const MovieCard = ({ movie }) => {
  const { poster_path, title } = movie;
  return (
    <div className="hover:scale-95 transition ease-in duration-200 rounded-sm">
      <div className="w-48 p-1">
        <img src={`${tmdbImageUrl}${poster_path}`} alt={"MovieCard"} />
      </div>
      <p className="text-white text-sm font-medium my-auto text-center py-1">{title}</p>
    </div>
  );
};

export default MovieCard;

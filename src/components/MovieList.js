import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movie }) => {

  return (
    <div className="pl-3 md:pl-10 md:pr-2">
      <h1 className="text-lg md:text-2xl text-white font-semibold py-2">{title}</h1>
      <div className="flex overflow-auto ">
        <div className="flex space-x-1 items-center shadow-md ">
          {movie?.map((item, i) => {
            return <MovieCard key={item?.id} movie={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

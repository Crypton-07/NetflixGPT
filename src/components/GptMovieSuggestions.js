import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  return (
    <div className="text-white w-full mt-4 overflow-y-auto">
      <div>
        {movieNames.map((moviename, i) => (
          <MovieList
            key={moviename}
            title={moviename}
            movie={movieResults[i]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;

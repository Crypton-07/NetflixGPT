import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  // console.log(movies);
  return (
    movies && (
      <div className=" bg-black">
        <div className="md:-mt-10 lg:-mt-72 relative z-20">
          <MovieList title={"Now Playing"} movie={movies?.nowPlayingMovies} />
          <MovieList title={"Popular"} movie={movies?.popularMovies} />
          <MovieList title={"Top Rated"} movie={movies?.topRatedMovies} />
          <MovieList title={"Upcoming"} movie={movies?.upcomingMovies} />
          <MovieList title={"Horror"} movie={movies?.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;

import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies && (
      <div className=" bg-black">
        <div className="-mt-10 pt-6 md:pt-0 md:-mt-12 lg:-mt-64 relative z-20">
          <MovieList title={"Now Playing"} movie={movies?.nowPlayingMovies} />
          <MovieList title={"Upcoming"} movie={movies?.upcomingMovies} />
          <MovieList title={"Popular"} movie={movies?.popularMovies} />
          <MovieList title={"Top Rated"} movie={movies?.topRatedMovies} />
          <MovieList title={"Animation"} movie={movies?.animeMovies} />
          <MovieList title={"Horror"} movie={movies?.horrorMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addAnimeMovies } from "../utils/movieSlice";

const useAnimeMovie = () => {
  const dispatch = useDispatch();
  const animeMovies = useSelector((store) => store.movies.animeMovies);
  const getAnimeMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=16",
      options
    );

    const json = await data.json();
    dispatch(addAnimeMovies(json?.results));
  };
  useEffect(() => {
    !animeMovies && getAnimeMovie();
  }, []);
};

export default useAnimeMovie;

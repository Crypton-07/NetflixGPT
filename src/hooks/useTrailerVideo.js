import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  // ? Here we are subscribing to our redux store to reduce the api call on each page load or navigation.
  // const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  const getMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      options
    );
    const json = await data.json();
    const filterData = json?.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    //? Here we are checking that does my trailerVideo exist in my redux store? If yes the return else call the function to fetch the trailer.
    // !trailerVideo && 
    getMovieTrailer();
  }, []);
};

export default useTrailerVideo;

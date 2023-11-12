import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { options } from "../utils/constants";

const useUpcomingMovies = () => {
      const dispatch = useDispatch();
      const getUpcomingMovies = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/upcoming?page=1",
          options
        );
        const json = await data.json();
  
        dispatch(addUpcomingMovies(json?.results));
      };

      useEffect(() => {
        getUpcomingMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

}

export default useUpcomingMovies;
import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopular from "../hooks/usePopular";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import useHorroMovie from "../hooks/useHorroMovie";
import useAnimeMovie from "../hooks/useAnimeMovie";

const Browse = () => {
  useNowPlayingMovie();
  usePopular();
  useTopRatedMovies();
  useUpcomingMovies();
  useHorroMovie();
  useAnimeMovie();
  const gpt = useSelector((store) => store?.gpt?.showGptSearch);
  return (
    <div>
      <Header />
      {gpt ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/* 
      MainContainer
       - VideoBackground
       - VideoTitle
      SecondaryContainer
       - MovieList * n
         - cards * n
       
      */}
    </div>
  );
};

export default Browse;

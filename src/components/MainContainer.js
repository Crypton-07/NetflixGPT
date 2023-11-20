import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useEffect, useState } from "react";
// import { useEffect } from "react";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  const [videoTrailer, setVideoTrailer] = useState(null);
  useEffect(() => {
    if (!movies) return;
    const randomIndex = Math.floor(Math.random() * movies?.length);
    setVideoTrailer(movies[randomIndex]);
  }, [movies]);
  if (!videoTrailer) return;
  const { title, overview, id } = videoTrailer;

  return (
    <div className="pt-[28%] md:pt-0 bg-black">
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;

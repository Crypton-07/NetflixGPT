import React, { useRef } from "react";
import { lang } from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { options } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSearchSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(
    (store) => store?.config?.selectedLanguage
  );
  const searchText = useRef(null);
  const fetchSearchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      options
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearch = async () => {
    console.log(searchText.current.value);
    //? Make an api call to gpt api and get the movie results.
    const query = `Act as a movie recommendation system and suggest some movies for the query ${searchText.current.value}. Only give me movie names of 5 movie, comma separated like the example results given ahead. Example like Tiger, Leo, Gaddar, Sholay, Don.`;
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });
    // console.log(gptResults.choices);
    if (!gptResults.choices) {
      // Todo : Write error handling
    }
    const gptSuggestedMovies =
      gptResults.choices?.[0]?.message?.content.split(", ");
    // console.log(gptSuggestedMovies);
    const promiseArray = gptSuggestedMovies.map((movie) =>
      fetchSearchMovieTMDB(movie)
    );
    const tmdbResult = await Promise.all(promiseArray);
    // console.log(tmdbResult);
    dispatch(
      addGptMovieResult({
        movieResults: tmdbResult,
        movieNames: gptSuggestedMovies,
      })
    );
  };
  return (
    <div className="pt-[15%] md:pt[12%] lg:pt-[10%] flex justify-center items-center">
      <form
        className="w-2/4 grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="py-3 px-4 m-2 bg-black bg-opacity-90 text-white border border-red-600 rounded-md 
          col-span-9 focus:outline-none font-medium"
          type="text"
          placeholder={lang[selectedLanguage].gptPlaceholder}
        />
        <button
          className="py-3 my-2 mx-2 bg-red-600 text-white rounded-md col-span-2"
          onClick={handleGptSearch}
        >
          {lang[selectedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

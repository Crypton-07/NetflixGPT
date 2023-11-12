import React from "react";
import { lang } from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const selectedLanguage = useSelector(
    (store) => store?.config?.selectedLanguage
  );
  return (
    <div className="pt-[15%] flex justify-center items-center">
      <form className="w-3/4 grid grid-cols-12">
        <input
          className="py-2 px-4 m-2 bg-black text-white border border-red-600 rounded-md col-span-9 focus:outline-none font-medium"
          type="text"
          placeholder={lang[selectedLanguage].gptPlaceholder}
        />
        <button
          className="my-2 mx-2 bg-red-600 text-white rounded-md col-span-3"
          onClick={(e) => e.preventDefault()}
        >
          {lang[selectedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

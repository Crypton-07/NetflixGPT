import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-screen h-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="BG_Image"
        />
      </div>
      <div className="absolute w-8/12 sm:w-6/12 md:w-4/12 lg:w-3/12  p-12 bg-black bg-opacity-90 my-40 mx-auto right-0 left-0 text-white">
        <form className="" autoComplete="off">
          <h1 className="font-semibold text-3xl my-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Enter your name"
              className="py-3 px-2 mx-auto my-4 w-full rounded-md bg-gray-800 outline-none focus:ring-red-600 focus:ring-1"
            />
          )}
          <input
            autoComplete="new-password"
            type="text"
            placeholder="Email Address"
            className="py-3 px-2 mx-auto my-4 w-full rounded-md bg-gray-800 outline-none focus:ring-red-600 focus:ring-1"
          />

          <input
            autoComplete="new-password"
            type="password"
            placeholder="Password"
            className="py-3 px-2 mx-auto my-4 w-full rounded-md bg-gray-800 outline-none focus:ring-red-600 focus:ring-1 "
          />
          <button className="py-3 my-2 w-full bg-red-700 rounded-md">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="my-4 cursor-pointer text-gray-500">
            {isSignInForm
              ? "New to Netflix ? "
              : "Already have a netflix account ? "}
            <span
              className="hover:underline text-white"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? "Sign up now" : "Sign In"}.
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

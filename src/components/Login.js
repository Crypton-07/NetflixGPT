import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handleButtonClick = () => {
    const message = checkValidData(
      email?.current?.value,
      password?.current?.value,
      name?.current?.value
    );
    console.log(message);
    setErrMessage(message);
    if (message) return;
    //? Now you can write logic for sign in / sign up
    if (!isSignInForm) {
      // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/72659001?v=4",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
              // ...
            })
            .catch((error) => {
              // An error occurred
              setErrMessage(error.message);
              // ...
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorMessage);
        });
    }
  };
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
      <div className="absolute w-9/12 sm:w-6/12 md:w-5/12 lg:w-3/12 p-12 bg-black bg-opacity-90 my-20 mx-auto right-0 left-0 text-white">
        <form
          onSubmit={(e) => e.preventDefault()}
          className=""
          autoComplete="off"
        >
          <h1 className="font-semibold text-3xl my-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Enter your name"
              className="py-3 px-2 mx-auto my-4 w-full rounded-md bg-gray-800 outline-none focus:ring-red-600 focus:ring-1"
            />
          )}
          <input
            ref={email}
            autoComplete="new-password"
            type="text"
            placeholder="Email Address"
            className="py-3 px-2 mx-auto my-4 w-full rounded-md bg-gray-800 outline-none focus:ring-red-600 focus:ring-1"
          />

          <input
            ref={password}
            autoComplete="new-password"
            type="password"
            placeholder="Password"
            className="py-3 px-2 mx-auto my-4 w-full rounded-md bg-gray-800 outline-none focus:ring-red-600 focus:ring-1 "
          />
          <p className="text-red-500 font-medium text-md py-2 w-full">
            {errMessage}
          </p>
          <button
            className="py-3 my-2 w-full bg-red-700 rounded-md"
            onClick={handleButtonClick}
          >
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

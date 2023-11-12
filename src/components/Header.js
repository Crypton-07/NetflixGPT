import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, supportedLanguages } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSearchSlice";
import { prefferedLanguages } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showOptions = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const handleGptSearch = () => {
    // Toggle GPT search
    dispatch(toggleGptSearch());
  };
  const handleLangChange = (e) => {
    dispatch(prefferedLanguages(e.target.value));
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when commponent unmounts.
    return () => unsubscribe();
  }, [navigate, dispatch]);
  return (
    <div className="w-screen absolute px-2 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <div>
        <img width={150} src={LOGO} alt="Logo" />
      </div>
      {user && (
        <div className="flex justify-between space-x-1 items-center">
          <div>
            {showOptions && (
              <select
                className="py-2 px-2 bg-black text-white font-medium focus:outline-none"
                onChange={handleLangChange}
              >
                {supportedLanguages.map((lang) => {
                  return (
                    <option key={lang.identifier} value={lang.identifier}>
                      {lang.name}
                    </option>
                  );
                })}
              </select>
            )}
          </div>
          <button
            className="py-2 px-2 text-white font-medium rounded-sm bg-purple-600"
            onClick={handleGptSearch}
          >
            {showOptions ? "Home" : "Ask GPT?"}
          </button>
          <img
            className="rounded-sm cursor-pointer"
            width={40}
            src={user?.photoURL}
            alt="usericon"
          />
          <button
            className="mx-2 px-1 py-2 bg-red-600 rounded-sm text-white font-semibold"
            onClick={handleSignOut}
          >
            {`Hello, ${user?.displayName}`}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

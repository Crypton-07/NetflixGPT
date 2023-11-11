import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
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
        <div className="flex justify-between items-center">
          <img
            className="rounded-sm cursor-pointer"
            width={40}
            src={user?.photoURL}
            alt="usericon"
          />
          <button
            className="mx-2 px-2 py-2 bg-red-600 rounded-sm text-white font-semibold"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

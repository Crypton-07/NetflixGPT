import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
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
  return (
    <div className="w-screen absolute px-2 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <div>
        <img
          width={150}
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Logo"
        />
      </div>
      {user && (
        <div className="flex justify-between items-center">
          <img
            className="rounded-sm cursor-pointer"
            width={40}
            src={user.photoURL}
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

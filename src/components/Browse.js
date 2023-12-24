import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Browse = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between">
      <Header />

      <div className="z-10">
        <button
          onClick={() => {
            const auth = getAuth();
            signOut(auth)
              .then(() => {
                // Sign-out successful.
              })
              .catch((error) => {
                // An error happened.
              });

            navigate("/");
          }}

          className="bg-red-500 "
        >
          SignOut
        </button>
      </div>
    </div>
  );
};

export default Browse;

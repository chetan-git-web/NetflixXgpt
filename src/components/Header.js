import React from 'react'
import { useSelector } from 'react-redux'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from 'react';

const Header = () => {
  const user = useSelector((store) => store.user)
  const navigate = useNavigate();

  const dispatch = useDispatch();


  useEffect(() => {
    const authRemoval = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, uid } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => authRemoval();
  }, [])


  
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between'>

      <img className='w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" />
      
      {user ? <div className="z-10 m-4">
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

          className="bg-red-500 p-2 rounded-sm  hover:text-white"
        >
          SignOut
        </button>
      </div>:<></>}
    </div>
  )
}

export default Header

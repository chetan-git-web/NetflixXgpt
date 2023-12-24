import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { Navigate, RouterProvider, useNavigate } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {displayName , email, uid} = user;
        dispatch(addUser({uid:uid , email:email , displayName:displayName}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  },[])

  return (
    <div>
      <Login/>
    </div>
  );
};

export default Body;

import React from 'react'

import useHeader from '../hooks/useHeader';
import { getAuth, signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user)
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleButtonClick = (action) => {
    setIsOpen(false);
  };
  const handleOutsideClick = (event) => {

    // event.target retrun the element that we have clicked on 
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };


  useHeader()

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between'>
      <img className='w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" />

      {user ? <div className="z-10 m-4 space-x-10">
        <button onClick={() => {
          navigate("/GPTSearch");
        }} className="relative inline-block text-lg group">
          
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256"
            fill='#FFFFFF'>
            <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" ><g transform="scale(5.12,5.12)"><path d="M21,3c-9.39844,0 -17,7.60156 -17,17c0,9.39844 7.60156,17 17,17c3.35547,0 6.46094,-0.98437 9.09375,-2.65625l12.28125,12.28125l4.25,-4.25l-12.125,-12.09375c2.17969,-2.85937 3.5,-6.40234 3.5,-10.28125c0,-9.39844 -7.60156,-17 -17,-17zM21,7c7.19922,0 13,5.80078 13,13c0,7.19922 -5.80078,13 -13,13c-7.19922,0 -13,-5.80078 -13,-13c0,-7.19922 5.80078,-13 13,-13z"></path></g></g>
          </svg>
          
        </button>



        <div className="relative inline-block text-left" ref={dropdownRef}>
          <button
            type="button"
            onClick={toggleDropdown}
            className="inline-flex justify-center items-center  text-sm font-medium text-gray-700  rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          >
            <img src={'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'} className='w-10 rounded-md'></img>
          </button>

          {isOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                <div
                  className="block w-full text-left px-4 py-2 text-sm text-black font-bold "
                >
                  {user.displayName}
                </div>
                <div className="block w-48 text-left px-4 truncate text-sm text-black font-bold ">
                  {user.email}
                </div>
                <div className='w-full h-[1px] bg-gray-500 my-3'>
                  </div>
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
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  SignOut
                </button>

              </div>
            </div>
          )}
        </div>

      </div> : <></>}
    </div>
  )
}

export default Header

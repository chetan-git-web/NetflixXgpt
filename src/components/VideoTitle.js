import React from "react";
import { Link } from "react-router-dom";
const VideoTitle = ({ title, text, id }) => {
  return (
    <div className=" px-12 absolute bg-gradient-to-r from-black w-full aspect-video pt-[2rem] smartphone:pt-[4rem] tablet:pt-[6rem] laptop:pt-[8rem] desktop:pt-[10rem]">
      <h1 className="text-2xl smartphone:text-3xl tablet:text-4xl laptop:text-5xl desktop:text-6xl font-bold text-white truncate">
        {" "}
        {title}
      </h1>
      <p className=" display:inline py-2 text-[10px] smartphone:text-xs tablet:text-sm laptop:text-base desktop:text-lg no-scrollbar  text-white h-[2rem] smartphone:h-[4rem] tablet:h-[5rem] laptop:h-[6rem] desktop:h-[7rem] overflow-scroll ">
        {text}
      </p>
      <div className="flex space-x-2  mt-[1rem] smartphone:mt-[2rem] ">
        <Link to={"/content/" + id}>
          <button className="bg-white flex font-semibold rounded-md p-4 smartphone:p-5  laptop:p-6  w-[4rem] h-[1rem] smartphone:w-[5rem]  laptop:w-[6rem] smartphone:h-[2rem]  laptop:h-[3rem] justify-center items-center hover:opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-play"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />{" "}
            </svg>
            <h1>Play</h1>
          </button>
        </Link>
        
      </div>
    </div>
  );
};

export default VideoTitle;

import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContsainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {

  useNowPlayingMovies();



  return (
    <div className=" justify-between bg-black gap-y-2 ">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;

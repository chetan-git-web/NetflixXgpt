import React, { useEffect, useState } from 'react'
import { API_CALL } from "../utils/config"
import Moviecard from "./Moviecard"
import Shimmer from './Shimmer'
const Movieslist = ({number,string}) => {
  const [movielist, setmovieslist] = useState([]);
  useEffect(() => {
    const movies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page='+number, API_CALL)
      const json = await data.json();
      setmovieslist(json.results);
      console.log(json);

    }
    movies();
  }, [])


  return (
    <div className=' flex-row z-10 px-10'>
      <h1 className=' flex text-white z-10 relative text-xl p-6 font-bold'> {string}</h1>
      <div className='flex overflow-x-scroll z-10 no-scrollbar'>

        <div className='flex  gap-10 z-10'>
          {
            movielist.length === 0 ? <Shimmer /> : movielist.map((movie) => (
              <Moviecard image={movie.poster_path} id={movie.id} title={movie.original_title} overview={movie.overview} />
            ))
          }
        </div>
      </div>
    </div>

  )
}

export default Movieslist
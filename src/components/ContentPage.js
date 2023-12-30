import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_CALL } from "../utils/config"
import Header from './Header';


const ContentPage = () => {
  const { id } = useParams();
  const [movie, setmovie] = useState(null);
  useEffect(() => {
    const trailerFetcher = async () => {
      const data = await fetch("https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US", API_CALL)
      const json = await data.json();

      if(json.results.length==0){
        setmovie("NotAvailable");
        return;
      }
      const filterData = json.results.filter((video) => { return video.type === "Trailer" })
      const trailer = filterData.length ? filterData[0] : json.results[0];
      setmovie(trailer.key);
    }
    trailerFetcher();
  }, [])
  return (<>
    <div className='bg-black w-screen h-screen'>
      <Header />
      {
        movie === null?<></>:movie==="NotAvailable"? <div className='bg-black flex justify-center items-center w-screen h-screen'><h1 className='text-white text-3xl'>Video is currently not available</h1></div>:<iframe className=' w-screen h-screen ' src={"https://www.youtube.com/embed/" + movie + "?si=COyO53XZKiQSrQ19&amp;&autoplay=1&loop=1&showinfo=0"} frameBorder="0" allow="accelerometer " allowFullScreen></iframe>
      }
      
    </div>
  </>
  )
}

export default ContentPage
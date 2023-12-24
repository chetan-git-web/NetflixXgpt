import React, { useEffect, useState } from 'react'
import { API_CALL } from "../utils/config"
const VideoBackground = ({ id, image }) => {
  const [movie, setmovie] = useState(null);
  useEffect(() => {
    const trailerFetcher = async () => {
      console.log(id);
      const data = await fetch("https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US", API_CALL)
      const json = await data.json();
      const filterData = json.results.filter((video) => { return video.type === "Trailer" })
      const trailer = filterData.length ? filterData[0] : json.results[0];
      console.log(trailer);
      setmovie(trailer.key);
    }
    trailerFetcher();
  }, [])


  return (
    <div>
    <iframe className=' w-screen aspect-video'  src={"https://www.youtube.com/embed/"+movie+"?si=COyO53XZKiQSrQ19&amp;controls=0&amp;start=20&mute=1&autoplay=1"}  frameBorder="0" allow="accelerometer " allowFullScreen></iframe>

    </div>
  )
}
export default VideoBackground;

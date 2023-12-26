import React from 'react'
import { Link } from 'react-router-dom'
const VideoTitle = ({ title, text , id}) => {
  return (
    <div className=' px-12 absolute bg-gradient-to-r from-black w-screen aspect-video pt-[12rem]' >
      <h1 className='text-6xl font-bold text-white'> {title}</h1>
      <p className='py-6 text-lg w-1/4 text-white'>{text}</p>
      <div className='flex space-x-2'>
      <Link to={"/content/"+id}><button className='bg-white flex font-semibold p-6 rounded-md w-[6rem] h-[3rem] justify-center items-center hover:opacity-50'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24
        " fill="currentColor" class="bi bi-play" viewBox="0 0 16 16"> <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" /> </svg><h1>Play</h1></button></Link>
        <button className='bg-opacity-40 bg-white px-2 rounded-md text-black font-semibold w-[6rem] h-[3rem]'>More Info</button>

      </div>

    </div>
  )
}

export default VideoTitle
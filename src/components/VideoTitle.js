import React from 'react'

const VideoTitle = ({ title, text }) => {
  return (
    <div className='pt-36 px-12'>
      <h1 className='text-6xl font-bold'> {title}</h1>
      <p className='py-6 text-lg w-1/4'>{text}</p>
      <div className='flex space-x-10'>
        <button className='bg-white flex p-2 rounded-md'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24
        " fill="currentColor" class="bi bi-play" viewBox="0 0 16 16"> <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" /> </svg><h1>Play</h1></button>
        <button className='bg-opacity-5 p-2 rounded-md'>More Info</button>
      </div>

    </div>
  )
}

export default VideoTitle
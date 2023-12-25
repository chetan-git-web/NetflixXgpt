import React from 'react'

const Moviecard = ({image,id,title,overview}) => {
  return (
    <div className=' w-[300px] '>
      <img className='rounded-md' src={'https://image.tmdb.org/t/p/w500'+image}></img>
    </div>
  )
}

export default Moviecard
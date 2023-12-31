import React from 'react'
import { Link } from 'react-router-dom'

const Moviecard = ({ image, id, title, overview }) => {
  return (
    <Link to={"/content/"+id}>
      <div className='w-[8rem] smartphone:w-[9rem] tablet:w-[10rem] laptop:w-[11rem] desktop:w-[12rem]'>
        <img className='rounded-md' src={'https://www.themoviedb.org/t/p/w220_and_h330_face/' + image}></img>
      </div>
    </Link>
  )
}

export default Moviecard
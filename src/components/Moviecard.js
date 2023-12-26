import React from 'react'
import { Link } from 'react-router-dom'

const Moviecard = ({ image, id, title, overview }) => {
  return (
    <Link to={"/content/"+id}>
      <div className=' w-[200px] '>
        <img className='rounded-md' src={'https://www.themoviedb.org/t/p/w220_and_h330_face/' + image}></img>
      </div>
    </Link>
  )
}

export default Moviecard
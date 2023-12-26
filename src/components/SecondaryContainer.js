import React from 'react'

import Movieslist from './Movielist'
const SecondaryContainer = () => {
  
  return (<div className=''>
    
    <Movieslist number={1} string={"Recomended Movies"}/>
    <Movieslist number={2} string={"Popular Now Streaming"}/>
    <Movieslist number={3} string={"Netflix Originals"}/>
    <Movieslist number={4} string={"Top 20"}/>
    <Movieslist number={5} string={"HollyWood Binge"}/>

  </div>
  )
}

export default SecondaryContainer
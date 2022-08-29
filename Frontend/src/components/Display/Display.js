import React, { useEffect, useState } from 'react'
import Desktop from './Desktop';
import Mobile from './Mobile';
import './Display.css';

const Display = () => {

    const [width,setWidth] = useState(window.innerWidth)

    const changeIt = () =>{
     setWidth(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener('resize',changeIt)
    },[])

  return (
    <div>
            {(width<=786)?<Mobile/>:<Desktop/>}
    </div>
  )
}

export default Display;
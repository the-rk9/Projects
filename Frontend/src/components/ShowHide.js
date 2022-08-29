import React, { useState } from 'react'
import './ShowHide.css'

const ShowHide = () => {

    const [isToggle,setToggle] = useState(false)

    const toggleIt = () =>{
        if(isToggle){
          setToggle(false)
        }
        else{
          setToggle(true)
        }
    }
  return (
    <div>
    <div>
        <button type="submit" className="btn btn-primary" onClick={toggleIt}>Toggle</button> 
        </div>
        {
          isToggle && <div className='card'>Element Is Visible Now!</div>
        }
    </div>
  )
}

export default ShowHide;
import React, { useState } from 'react'
import "./AboutIcon.scss"
interface IAboutIcon{
color:string;
icon:string
}
export const AboutIcon = ({color,icon}:IAboutIcon) => {
    const [hover, setHover] = useState(false)
  return (
    <div className='d-flex icon'>
         <i className={icon}
         style={{
                color:hover ? color : "",
         }}
          onMouseEnter={()=>{
              setHover(true);
             console.log("Hola")
         }}
         onMouseLeave={()=>{
            setHover(false);
       }}
         ></i>
     </div>
  )
}

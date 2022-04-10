import React, { useEffect, useState } from 'react'
import "./SplashScreen.scss"
export const SplashScreen = () => {
const [loader, setLoader] = useState({fadeOut: false,div:true});

    useEffect(() => {
        setTimeout(() => {
           setLoader({
                fadeOut: true,
                div:true
           });
        }, 1500)
        setTimeout(() => {
            setLoader({
                 fadeOut: false,
                 div:false
            });
         }, 2000)
    }, [])

  return (
      <>
      {loader.div && <div className={loader.fadeOut?'bg-pre fadeOut':'bg-pre'}>

   
      <div className="loader">
  <ul>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <div className="cup"><span></span></div>
  </div>
  </div>}
      </>
  )
}

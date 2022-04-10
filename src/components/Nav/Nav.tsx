import React from 'react'
import './Nav.scss'
export const Nav = () => {
  return (
    <div className="container-nav">
        
        <ul>
            <li>
              <a href="#header"><i className="fa-solid fa-house"></i></a>
            </li>
            <li>
            <a href="#about-me"><i className="fa-solid fa-user"></i></a>
            </li>
            <li>
            <a href="#my-projects"><i className="fa-solid fa-suitcase"></i></a>
            </li>
            <li className="">
            <a href="#contact"><i className="fa-regular fa-address-book"></i></a>
            </li>
        </ul>
    </div>
  )
}

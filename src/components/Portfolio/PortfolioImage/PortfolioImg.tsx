import React from 'react'
import { IModal } from '../Portfolio'
import './PortfolioImg.scss'
export const PortfolioImg = (modal:IModal) => {
  return (
   <div className=' d-flex project'>
<div className='section d-flex'>
  <div>

  <h3>{modal.title}</h3>
  <p>{modal.description}</p>
  </div>
  
  <div>
    <div>
    <button className='btn btn-portfolio'> <i className="fa-solid fa-code"></i> View Code</button>

    <button className='btn btn-portfolio-outline'> <i className="fa-regular fa-eye"></i> Demo</button>
    </div>

  </div>
</div>
<div className='section'>
  
  <img src={modal.imgSrc} alt="" />
</div>
   </div>
  )
}

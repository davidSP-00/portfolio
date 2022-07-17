import React from 'react'
import { IModal } from '../Portfolio'
import './PortfolioImg.scss'
export const PortfolioImg = (modal:IModal) => {
  const setVideo = (video:string) => {
    switch ((video)) {
      case 'limmpio':
        return require('../../../assets/limppio.mp4')
        case 'wordles':
          return require('../../../assets/wordles.mp4')
  
      
    }
 }
 const setImage = (image:string) => {
  switch ((image)) {
    case 'limppioweb':
      return require('../../../assets/limppioweb.png')
    default:
      break;
  }
}
  const openWindow=(url:any)=>{

    window.open(url);
  }
  return (
   <div className=' d-flex project'>
<div className='section d-flex'>
  <div>

  <h3>{modal.title}</h3>
  <p>{modal.description}</p>
  </div>
  
  <div>
    <div>

    {modal.gitUrl&&<button className='btn btn-portfolio' onClick={()=>openWindow(modal.gitUrl)}> <i className="fa-solid fa-code"></i> View Code</button>}
{modal.url&&<button className='btn btn-portfolio-outline' onClick={()=>openWindow(modal.url)}> <i className="fa-regular fa-eye"></i> Demo</button>}
     </div>

  </div>
</div>
<div className='section'>
  {modal.video&&
  
<video loop autoPlay controls>
        <source
        
        src={setVideo(modal.video)}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
  }
 {modal.imgSrc&&  <img src={setImage(modal.imgSrc)} alt="" /> }
</div>
   </div>
  )
}

import React from 'react'
import { IModal } from '../Portfolio'
import './PortfolioImg.scss'
export const PortfolioImg = (modal:IModal) => {
  return (
    <div className="img-container" onClick={()=>{
      console.log({
        description:modal.description,
        imgSrc:modal.imgSrc,
        show:!modal.show,
        title:modal.title,
        url:modal.url,
        setModal:modal.setModal,
      })
        modal.setModal({
          description:modal.description,
          imgSrc:modal.imgSrc,
          show:!modal.show,
          title:modal.title,
          url:modal.url,
          setModal:modal.setModal,
        })
    }}>
                        <img src={modal.imgSrc} alt="" />
                        <div className="overlay"></div>
                        <div className="button"><a > Details </a></div>
                    </div>
  )
}

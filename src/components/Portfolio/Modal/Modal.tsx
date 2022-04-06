import React from 'react'
import { IModal } from '../Portfolio'
import "./Modal.scss"
export const Modal = ({ title, show,url, imgSrc, description, setModal }: IModal) => {

    const closeModal = (e: any) => {
        if (e.target.classList.value === 'modal') {
            setModal((prev) => { return { ...prev, show: !prev.show } })
        }
    }
    return (
        <>
            {show ? <div className="modal" onClick={closeModal}>

                {/*  <p>
 
         Hola fds fds fds fds fds fs fds
         </p> */}
                <div className='d-flex modal-div justify-content-center' onClick={closeModal}>
                    <div className='text' >
                        <h3>{title}</h3>
                        <div className='detail'>
                            {description}
                        </div>

                        <div>
                           {url &&<div>- <a href={`https://${url}`} target="_blank">{url}</a> -</div>} 
                        </div>
                    </div>
                    <img className="img" style={{
                        objectFit: 'cover',
                    }} height={450} /* width={250}  */ src={imgSrc} alt="" />

                    <i className="fa-solid fa-xmark" onClick={() => {
                        setModal((prev) => { return { ...prev, show: !prev.show } })
                    }}></i>
                </div>
            </div> : null}


        </>

    )
}

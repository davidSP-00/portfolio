import React from 'react'
import { Modal } from './Modal/Modal'
import "./Portfolio.scss"
import { PortfolioImg } from './PortfolioImage/PortfolioImg'
export const Portfolio = () => {
    return (
        <section className='d-flex portfolio-section' id="my-projects">
            <h2>My Projects</h2>

            <div>
Take a look at my latest projects.</div>
            <div className="d-flex head-title" >

                <div className='d-flex justify-content-center portfolio-container'>
                   
               <PortfolioImg/>
               
               <PortfolioImg/>
               
               <PortfolioImg/>
               
               <PortfolioImg/>
               
               <PortfolioImg/>
                </div>



            </div>

            <Modal></Modal>
        </section>
    )
}

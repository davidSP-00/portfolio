import React, { useState } from 'react'
import { Modal } from './Modal/Modal'
import "./Portfolio.scss"
import { PortfolioImg } from './PortfolioImage/PortfolioImg'

export interface IModal{
    show:boolean;
    imgSrc:string;
    title:string;
    description:string;
    setModal:React.Dispatch<React.SetStateAction<IModal>>;
}
export const Portfolio = () => {

    const [modal, setModal] = useState<IModal>({
        show: false,
        imgSrc: "",
        title: "",
        description: "",
        setModal:()=>{},
    })


    return (
        <>
          <section className='d-flex portfolio-section' id="my-projects">
            <h2>My Projects</h2>

            <div>
Take a look at my latest projects.</div>
            <div className="d-flex head-title" >

                <div className='d-flex justify-content-center portfolio-container'>
                   
               <PortfolioImg key={1}
               show={modal.show}
                imgSrc='https://www.creativefabrica.com/wp-content/uploads/2021/06/12/mountain-landscape-illustration-design-b-Graphics-13326021-1.jpg' 
                title='title1' description='description1'
                setModal={setModal}
               />
               
               <PortfolioImg key={2}
               show={modal.show}
                imgSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-FwfEt3GPrgggBPDLK_qObCQDzb4UkXFY1zFTcrO-p_j9EPJNeLPxW6VedNxWZCLkoGY&usqp=CAU' 
                title='title2' description='description2'
                setModal={setModal}
/>
               
               <PortfolioImg key={3}
               show={modal.show}
                imgSrc='https://static.educalingo.com/img/en/800/landscape.jpg' title='title3' description='description3'
                setModal={setModal}
/>
               
            {/*    <PortfolioImg/>
               
               <PortfolioImg/> */}
                </div>



            </div>

        </section>
        
        <Modal {...modal}></Modal>
        </>
      
    )
}

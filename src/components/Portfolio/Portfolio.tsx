import React, { useState } from 'react'
import { Modal } from './Modal/Modal'
import "./Portfolio.scss"
import { PortfolioImg } from './PortfolioImage/PortfolioImg'

export interface IModal {
    show: boolean;
    imgSrc: string;
    title: string;
    url?:string,
    description: string;
    setModal: React.Dispatch<React.SetStateAction<IModal>>;
}
export const Portfolio = () => {


    const myProjects = [
        {
            imgSrc: 'https://www.creativefabrica.com/wp-content/uploads/2021/06/12/mountain-landscape-illustration-design-b-Graphics-13326021-1.jpg',
            title: 'WordDays',
            description: 'My own wordle game app, but in this version you can login and collect the words you guess.      It was made with react native java Spring with Mysql in the backend.',
        },
        {
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-FwfEt3GPrgggBPDLK_qObCQDzb4UkXFY1zFTcrO-p_j9EPJNeLPxW6VedNxWZCLkoGY&usqp=CAU',
            title: 'MTU',
            description: 'Unibanca internal application, you can maintain and transfer files between servers. It was made with Angular and Java and Oracle on the backend.',
        },
        {
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-FwfEt3GPrgggBPDLK_qObCQDzb4UkXFY1zFTcrO-p_j9EPJNeLPxW6VedNxWZCLkoGY&usqp=CAU',
            title: 'MRU',
            description: 'Unibanca internal application, it was migrated from a legacy code to current technologies, which in this case was React.',
        },
        {
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-FwfEt3GPrgggBPDLK_qObCQDzb4UkXFY1zFTcrO-p_j9EPJNeLPxW6VedNxWZCLkoGY&usqp=CAU',
            title: 'Limmpio Landing Page',
            description: 'Landing page of my own Limmpio project.',
            url:'limppio.com'
        },
        {
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-FwfEt3GPrgggBPDLK_qObCQDzb4UkXFY1zFTcrO-p_j9EPJNeLPxW6VedNxWZCLkoGY&usqp=CAU',
            title: 'Limmpio App',
            description: 'Mobile application of Limppio project, it was made with angular and firebase, in this application you can put your location to book an appointment with cleaning staff, it also implements a payment gateway and authentication by SMS.',
        }
    ]
    const [modal, setModal] = useState<IModal>({
        show: false,
        imgSrc: "",
        title: "",
        description: "",
        url:"",
        setModal: () => { },
    })


    return (
        <>
            <section className='d-flex portfolio-section' id="my-projects">
                <h2>My Projects</h2>

                <div>
                    Take a look at my latest projects.</div>
                <div className="d-flex head-title" >

                    <div className='d-flex justify-content-center portfolio-container'>
                        {myProjects.map((project, index) =>
                            <PortfolioImg key={index}
                                {...project} setModal={setModal} show={modal.show} />)}

                    </div>



                </div>

            </section>

            <Modal {...modal}></Modal>
        </>

    )
}

import React, { useState } from 'react'
import { Modal } from './Modal/Modal'
import "./Portfolio.scss"
import { PortfolioImg } from './PortfolioImage/PortfolioImg'

export interface IModal {
    show: boolean;
    imgSrc?: string;
    title: string;
    url?:string,
    gitUrl?:string,
    description: string;
    video?:string,
    setModal: React.Dispatch<React.SetStateAction<IModal>>;
}
export const Portfolio = () => {


    const myProjects = [
        {
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-FwfEt3GPrgggBPDLK_qObCQDzb4UkXFY1zFTcrO-p_j9EPJNeLPxW6VedNxWZCLkoGY&usqp=CAU',
            title: 'MRU',
            description: 'Unibanca internal application, it was migrated from a legacy code to current technologies. This web platform generates transaction reports and send them by email to users.',
        },
        {
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-FwfEt3GPrgggBPDLK_qObCQDzb4UkXFY1zFTcrO-p_j9EPJNeLPxW6VedNxWZCLkoGY&usqp=CAU',
            title: 'MTU',
            description: 'Unibanca internal application, a platform for maintain and transfer files between servers. Use technologies like Websockets developed with Angular, Java and Oracle Database.',
        },
        {
            video:'wordles',
            title: 'WORDLES',
            gitUrl:'https://github.com/davidSP-00/WORDLES',
            description: 'My own wordle game app, but in this version you can login and collect the words you guess. It was made with react native java Spring with Mysql in the backend.',
        },
        {
            imgSrc: 'limppioweb',
            title: 'Limmpio Landing Page',
            description: 'Landing page of my own Limmpio project.',
            url:'https://www.limppio.com',
            gitUrl:'https://github.com/davidSP-00/limppio-web',
        },
        {
            title: 'Limmpio App',
            description: 'Mobile application of Limppio project, it was made with angular and firebase, in this application you can put your location to book an appointment with cleaning staff, it also implements a payment gateway and authentication by SMS.',
            gitUrl:'https://github.com/davidSP-00/limppio',
            video:'limmpio'
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
            <section className='d-flex portfolio-section justify-content-center' id="my-projects">
                <h2>My Projects</h2>

                <div className='title'>
                    Take a look at my latest projects.</div>
                <div className=" head-title" style={{alignSelf:'center'}} >

                        {myProjects.map((project, index) =>
                            <PortfolioImg key={index}
                                {...project} setModal={setModal} show={modal.show} />)}

                  


                </div>

            </section>

            <Modal {...modal}></Modal>
        </>

    )
}

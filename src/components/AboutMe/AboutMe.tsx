import React from 'react'
import { AboutIcon } from './AboutIcon/AboutIcon'
import "./AboutMe.scss"
export const AboutMe = () => {
    return (
        <section className=' d-flex about-me-section' id="about-me">
            <h2>About Me</h2>
            <div className="d-flex container-who flex-wrap" >
                <div className='who'>
                    <h3>
                        Who am I?
                    </h3>
                    <div className='text'>
                        I'm David Sullcaray, I have a Bachelor's degree in Computer and Systems Engineering.
                    </div>
                    <div className='text'>
                    I am a self-taught, proactive, efficient person who loves technology and always being up-to-date with new technologies.
                    </div>
                </div>
                <div className='who'>
                    <h3 >
                        My Skills:
                    </h3>
                    <div className='d-flex justify-content-center'>
                        <AboutIcon icon='fa-brands fa-react' color="#61dafb"/>
                        <AboutIcon icon='fa-brands fa-js' color="#f1e05a"/>
                        <AboutIcon icon='fa-brands fa-css3' color="#2965f1"/>
                       

                    </div>
                    <div className='d-flex justify-content-center'>
                    <AboutIcon icon='fa-brands fa-html5' color="#f06529"/>
                        <AboutIcon icon='fa-brands fa-java' color="#FAB9A8"/>
                        <AboutIcon icon='fa-brands fa-angular' color="#a6120d"/>
                  

                    </div>
                    <div className='d-flex justify-content-center'>
                        
                    {/* <AboutIcon icon='fa-brands fa-html5' color="#f06529"/> */}
                        <AboutIcon icon='fa-brands fa-bootstrap' color="#563d7c"/>
                        <AboutIcon icon='fa-brands fa-sass' color="#CD6799"/>
                      
                    </div>
               
                </div>

            </div>
           

        </section>
    )
}

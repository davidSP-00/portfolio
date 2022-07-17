import React from 'react'
import "./HeadSection.scss"
import img from '../../assets/profile.jpg'
export const HeadSection = () => {
    return (
        <section className=' d-flex head-section'>
            <div className="d-flex head-title" >
                <div style={{ margin: '2em' }}>
                    <img style={{ borderRadius: 1000, objectFit: "cover" ,border: "2px solid var(--color-bg-variant)"}}
                        width="170" height="170" src={img} alt="David" />

                </div>
                <div  className="description">
                    <h3>
                        Hello,
                    </h3>
                    <h1 >
                        I'm {"{"} David Sullcaray {"}"} 
                    </h1>
                    <h4 className='type'>
                        
                    </h4>
                    {/* <button className='down-CV'>Download CV</button> */}

                    <button className='linkedin'
                    onClick={()=>{
                        window.open('https://www.linkedin.com/in/davidsp00/',"_blank")
                    }}>Contact me on <i className="fa-brands fa-linkedin"></i></button>
                  
                    </div>
            </div>

        </section>
    )
}

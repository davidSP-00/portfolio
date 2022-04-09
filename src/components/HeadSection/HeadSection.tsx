import React from 'react'
import "./HeadSection.scss"

export const HeadSection = () => {
    return (
        <section className=' d-flex head-section'>
            <div className="d-flex head-title" >
                <div style={{ margin: '2em' }}>
                    <img style={{ borderRadius: 1000, objectFit: "cover" ,border: "2px solid var(--color-bg-variant)"}}
                        width="170" height="170" src="https://media-exp1.licdn.com/dms/image/C4D03AQGhOVXSEkh22A/profile-displayphoto-shrink_800_800/0/1597079232795?e=1654732800&v=beta&t=pEICEhF7mDdIpEOAh_56Ac0Fi6gR7MTvyG-hcF8rzxs" alt="David" />

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
                        window.open('https://www.linkedin.com/in/david-sullcaray-palomino-4852831b4/',"_blank")
                    }}>Contact me on <i className="fa-brands fa-linkedin"></i></button>
                  
                    </div>
            </div>

        </section>
    )
}

import React from 'react'

import "./Contact.scss"
export const Contact = () => {

  const goTo=(url:string)=>{
    window.open(url,"_blank")
  }
  const mailTo=(e:any)=>{
    window.location.href = "mailto:sp.david00@gmail.com";
                e.preventDefault();
  }
  return (
    <section className='d-flex contact-section' id="contact">
      <h2>Contact Me</h2>
      <div>
      Email: <a href="mailto:sp.david00@gmail.com" style={{color:'grey'}}>sp.david00@gmail.com</a> </div>
      <div className="d-flex head-title" >
     
        <div className='d-flex justify-content-center contact-container'>
        
          <div className='d-flex flex-wrap justify-content-center'>
              <div className="wrap-image"
                        onClick={mailTo}  >
                <i className="fa-regular fa-envelope"></i>
              </div>
                          <div className="wrap-image"
                           onClick={()=>{goTo('https://www.linkedin.com/in/david-sullcaray-palomino-4852831b4/')}}>
                          <i className="fa-brands fa-linkedin"></i>
                          </div>
                          <div className='d-flex icon'>
                          <div className="wrap-image"
                           onClick={()=>{goTo('https://github.com/davidSP-00')}}>
                          <i className="fa-brands fa-github"></i>
                          </div>
                          </div>
          </div>
        </div>



      </div>

    </section>
  )
}

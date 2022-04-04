import React from 'react'

import "./Contact.scss"
export const Contact = () => {
  return (
    <section className='d-flex contact-section' id="contact">
      <h2>Contact Me</h2>

      {/* <div>fdsfds</div> */}
      <div className="d-flex head-title" >

        <div className='d-flex justify-content-center contact-container'>

          <div className='d-flex flex-wrap justify-content-center'>
              <div className="wrap-image">
                <i className="fa-regular fa-envelope"></i>
              </div>
                          <div className="wrap-image">
                          <i className="fa-brands fa-linkedin"></i>
                          </div>
                          <div className='d-flex icon'>
                          <div className="wrap-image">
                          <i className="fa-brands fa-github"></i>
                          </div>
                          </div>
          </div>
        </div>



      </div>

    </section>
  )
}

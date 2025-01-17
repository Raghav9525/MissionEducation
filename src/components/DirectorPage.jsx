
import React from 'react'
import './DirectorPage.css'

const DirectorPage = () => {
  return (
    <div>
      <section class="about-section">
        <div class="container">
          <div class="row">
            <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div class="inner-column">
                <div class="sec-title">
                  {/* <span class="title">We are leader in</span> */}
                  {/* <h2>We are leader in <br />Industrial market Since 1992</h2> */}
                  <h2>Message from the <span class="" style={{color:"red"}}>Director</span>: Guiding <span class="" style={{color:"red"}}>Dreams</span> to Reality</h2>
                </div>
                <div class="text">Dear Students and Parents,

                  Education is the foundation upon which dreams are built, and as an educational counselor, my mission is to guide you in shaping those dreams into reality.

                  In today’s dynamic world, making informed decisions about education and career paths is more important than ever. My goal is to empower you with the knowledge, resources, and personalized guidance needed to unlock your true potential and achieve your aspirations.

                  Every student is unique, and so is their journey. Together, we will explore opportunities, overcome challenges, and create a roadmap that aligns with your strengths and ambitions. Remember, the choices you make today shape the future you envision tomorrow.

                  Let us work hand in hand to turn possibilities into achievements. Believe in yourself, and trust that the path to success begins with the right guidance.

                  With best wishes for your bright future,
                  <span className='' style={{fontWeight:"bold"}}>Sonu Kumar Mandal </span>
                  Director
                  <span className='' style={{fontWeight:"bold"}}> Mission Education</span></div>
               
                <div class="btn-box">
                  <a href="/contact" class="theme-btn btn-style-one">Contact Us</a>
                </div>
              </div>
            </div>

            <div class="image-column col-lg-6 col-md-12 col-sm-12">
              {/* <div class="inner-column wow fadeInLeft"> */}

                <figure class="image-1"><a href="#" class="lightbox-image" data-fancybox="images"> <img src={"/assets/image/directorImg.jpg"} alt="" /></a></figure>
                {/* <figure class="image-2"><a href="#" class="lightbox-image" data-fancybox="images"><img src="https://i.ibb.co/JvN0NVB/image-2-about.jpg" alt="" /></a></figure> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DirectorPage
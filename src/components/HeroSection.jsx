import React from "react";

const HeroSection = () => {
  return (
    <div>
      <section className="banner-area home-01">
        <div className="container custom-container-01">
          <div className="banner-wrapper">
            <div className="row">
              <div className="col-xl-7 col-lg-10">
                <div className="banner-inner">

                  <h6 className="title">
                    Your <span>success</span> journey starts with <span>Mission</span> Education
                  </h6>
                  <p>
                    Mission Education Can Fullfill Your National and International Education Dream{" "}
                    <br /> As Per Your Best Fit with world top universities and colleges.
                  </p>

                  <div className="header-btn gap-3">
                    <div className="btn-wrap">
                      <a href="/contact" className="btn-common flat-btn btn-active">
                        apply online
                      </a>
                    </div>

                    <div className="btn-wrap ">
                      <a href={`tel:${7531960128}`} className="btn-common fill-btn">Contact Us</a>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5">
                <div className="thumbnail">
                  <img
                    src="assets/img/shapes/Ellipse-01.png"
                    className="element-01"
                    alt="Ellipse"
                  />
                  <img
                    src="assets/img/shapes/Ellipse-02.png"
                    className="element-02"
                    alt="Ellipse"
                  />
                  <img
                    src="assets/img/shapes/Vector-15.png"
                    className="element-03"
                    alt="Vector"
                  />
                  <img
                    src="assets/img/header/plane.png"
                    className="element-04"
                    alt="Plane"
                  />
                  <img
                    src="assets/img/icon/location.png"
                    className="element-05"
                    alt="Location"
                  />
                  {/* main HeroSection image */}
                  <img
                    src="/assets/image/collegeboy5_bg_remove.png"
                    className="banner-img image-fluid"
                    alt="Student"
                  />
                  {/* <img
                    src="assets/img/header/header-img.png"
                    className="banner-img"
                    alt="Student"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;

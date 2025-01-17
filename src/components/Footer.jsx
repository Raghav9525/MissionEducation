
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom"; // Import Link for internal navigation
import { filteredCourses } from "./Constant"

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-body-tertiary text-muted my_footer">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span className="footer_link_heading">Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="https://www.facebook.com/profile.php?id=61569836373325&mibextid=ZbWKwL" className="me-4 text-reset footer_link_heading">
              <i className="fab fa-facebook-f social_media_icon" ></i>
            </a>

            <a href="https://www.instagram.com/missioneducation.info/profilecard/?igsh=MXcyN216a2Npdms0" className="me-4 text-reset footer_link_heading">
              <i className="fab fa-instagram social_media_icon"></i>
            </a>
            <a href="https://www.youtube.com/@MissionEducationInfo" className="me-4 text-reset footer_link_heading">
              <i class="fa-brands fa-youtube social_media_icon"></i>
            </a>

            <a href="mailto:missioneducation.net@gmail.com" className="me-4 text-reset footer_link_heading">
              <i className="fa-solid fa-square-envelope social_media_icon"></i>
            </a>

            <a href="https://www.linkedin.com" className="me-4 text-reset footer_link_heading">
              <i className="fab fa-linkedin social_media_icon"></i>
            </a>

          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3 footer_text">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-3 footer_link_heading">
                  <i></i>Mission Education
                </h6>
                <p style={{ textAlign: "justify" }}>
                  Mission Education is a leading education consultancy dedicated
                  to helping students find the best career paths through
                  tailored educational opportunities. Our mission is to guide
                  students towards success by offering a wide range of
                  high-quality courses across various fields, from healthcare
                  and engineering to business management and technology.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto quick_link">
                <h6 className="text-uppercase fw-bold mb-3 footer_link_heading">Quick Links</h6>
                <p>
                  <Link to="/" className="text-reset">
                    Home
                  </Link>
                </p>
                <p>
                  <Link to="/About" className="text-reset">
                    About
                  </Link>
                </p>
                <p>
                  <Link to="/Course" className="text-reset">
                    Course
                  </Link>
                </p>
                <p>
                  <Link to="/Contact" className="text-reset">
                    Contact
                  </Link>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto ">
                <h6 className="text-uppercase fw-bold mb-3 footer_link_heading">Courses</h6>

                {filteredCourses &&
                  Object.keys(filteredCourses).map((dataKey) => (
                    <p key={dataKey}>
                      <Link to={`/course/${dataKey}`} className="text-reset">
                        {dataKey}
                      </Link>
                    </p>
                  ))}


                <p>
                  <Link to="/contact" className="text-reset">
                    Other
                  </Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 ">
                <h6 className="text-uppercase fw-bold mb-3 footer_link_heading">Contact</h6>
                <p >
                  <FontAwesomeIcon icon={faLocationDot} className="me-2" />G.N Ganj, Gudri Bazar,Near:Dominos, Laheriasarai,Darbhanga,846001
                </p>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                  missioneducation.net@gmail.com
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhone} className="me-2" />
                  7531960128
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhone} className="me-2" /> 6272319973
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4 footer_link_heading"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          Design and Developed By:
          <a className="text-reset fw-bold" href="https://Digifly.live/">
            Digifly.live
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;





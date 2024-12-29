
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom"; // Import Link for internal navigation

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="https://www.facebook.com" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.google.com" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="https://www.instagram.com" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.github.com" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-3">
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
                <h6 className="text-uppercase fw-bold mb-3">Quick Links</h6>
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

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto  footer_course">
                <h6 className="text-uppercase fw-bold mb-3">Courses</h6>
                <p>
                  <Link to="/course" className="text-reset">
                    Medical
                  </Link>
                </p>
                <p>
                  <Link to="/course" className="text-reset">
                    Engineering
                  </Link>
                </p>
                <p>
                  <Link to="/course" className="text-reset">
                    Management
                  </Link>
                </p>
                <p>
                  <Link to="/course" className="text-reset">
                    Agricultuere
                  </Link>
                </p>

                <p>
                  <Link to="/course" className="text-reset">
                    Education
                  </Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 ">
                <h6 className="text-uppercase fw-bold mb-3">Contact</h6>
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
          className="text-center p-4"
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





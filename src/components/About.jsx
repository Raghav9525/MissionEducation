import React from "react";
// import { assets } from "../assets/image/assets"; // Ensure your asset import is correct
import "../App.css";
import DirectorPage from "./DirectorPage";

const About = () => {
    return (
        // <div className="about">
        <div className="container my_container">

            <div class="theme-section-title desktop-center text-center">
                {/* <span class="subtitle">FEEDBACKS</span> */}
                <h2 class="title">About <span style={{ color: "#c90404" }}>US</span>
                    <svg class="title-shape " width="285" height="15" viewBox="0 0 355 5" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path class="path"
                            d="M351.66 12.6362C187.865 -6.32755 49.6478 6.37132 3.41142 12.6362"
                            stroke="#764AF1" stroke-width="3" stroke-linecap="square" />
                        <path class="path" d="M351.66 13C187.865 -5.96378 49.6478 6.73509 3.41142 13"
                            stroke="#764AF1" stroke-width="3" stroke-linecap="square" />
                        <path class="path" d="M2.5 5.5C168.5 2.0001 280.5 -1.49994 352.5 8.49985"
                            stroke="#FFC44E" stroke-width="3" stroke-linecap="square" />
                    </svg>
                </h2>
            </div>

            {/* <h2 className="text-center p-2">About Us</h2> */}
            <div className="row mt-3">
                <div className="col-lg-6 ">
                    {/* <div className="card shadow mt-2"> */}
                    <div class="thumbnail ">
                        <div class="left-frame">
                            {/* <img src={"./assets/img/country-details/02.jpg"} alt="About Us" className="about-image img-fluid" /> */}
                            <img src={"./assets/image/about_banner.jpg"} alt="About Us" className="about-image image-fluid" />

                            
                        </div>
                    </div>
                    {/* </div> */}
                </div>

                <div className="col-lg-6 py-md-0 p-5">
                    <h2 className="about-title" style={{fontWeight:700, color:"black"}}>
                        Discover Your <span style={{color:"red"}}>Perfect</span> Career with <span style={{color:"red"}}>Mission</span> Education
                    </h2>
                    <p className="about-description">
                        Mission Education is a leading education consultancy dedicated to
                        helping students find the best career paths through tailored
                        educational opportunities. Our mission is to guide students
                        towards success by offering a wide range of high-quality courses
                        across various fields, from healthcare and engineering to business
                        management and technology.At Mission Education, we believe that
                        every student deserves access to quality education, and we are
                        committed to providing personalized consultancy services that
                        cater to individual learning needs. Whether you're looking to
                        pursue a career in nursing, engineering, IT, or management, our
                        team of experts will help you choose the best courses that align
                        with your interests and career goals.
                    </p>
                </div>
            </div>


            <DirectorPage />
        </div>

        //  </div>
    );
};

export default About;

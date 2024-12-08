import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";

import { filteredCourses } from './Constant'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const MyNavbar = () => {

  const [subMenu, setSubMenu] = useState([]);

  const [activeKey, setActiveKey] = useState(null);

  const [openCourse, setOpenCourse] = useState(false);
  const handleKeyClick = (key) => {
    setActiveKey((prevKey) => (prevKey === key ? null : key)); // Toggle active key

  };

  const whatsappNumber = "+917542061065";


  function openCourseFun() {
    setOpenCourse(!openCourse)
  }

  return (

    <>
      {/* why my filteredCourses <li> </li> item is not in horizantal when d-flex  */}
      < nav className="my_navbar navbar navbar-expand-lg fixed-top mynavbar_container" >
        {/* <div className="container-fluid"> */}
        <Link Link to="/" className="navbar-brand" >
          <img src={"./assets/image/logo.png"} className="logo_img" alt="Logo" />
        </Link >

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse navbar_content_section" id="navbarNav">
          <div className="col-lg-9 col-12 ">
            <ul className="navbar-nav justify-content-center ">
              <li className="nav-item">
                <NavLink className="nav-link fs-4 nav_item" to="/" end>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-4 nav_item" to="/About">
                  About
                </NavLink>
              </li>

              {/* value is is an array of course. when click on key value array should be display just below that key */}
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle fs-4 nav_item"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Course
                </NavLink>
                <div className="submenu_box dropdown-menu">

                  <div className="row ps-md-5 px-2" aria-labelledby="navbarDropdownMenuLink">
                    {Object.entries(filteredCourses).map(([key, value]) => (
                      <div className="col-md-3 col-12 ">
                        <li key={key} style={{ color: "blue" }} >

                          <span onClick={() => handleKeyClick(key)} className="submenu_item ">{key}</span>
                          <ul style={{}} className="course_submenu">
                            {value.map((course, index) => (
                              <Link key={index}

                                to={`/CourseDetails/${course}`}
                                style={{ color: "black" }}

                              >
                                <li>{course}</li>
                              </Link>
                            ))}
                          </ul>




                        </li>
                      </div>
                    ))}
                  </div>


                </div>

              </li>


              <li className="nav-item">
                <NavLink className="nav-link fs-4 nav_item" to="/Gallery">
                  Gallery
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link fs-4 nav_item" to="/Contact">
                  Contact
                </NavLink>
              </li>
            </ul>

          </div>

          <div className="col-lg-3  d-lg-block d-none">
            {/* 
            <FontAwesomeIcon icon={faPhone} flip className="phone_icon1" />

            <span className="ms-2 fs-5 mobile_number">7542061065</span> */}

            <div class="btn-wrap">
              <a href="#" class="btn-common nav-btn">Free consultation</a>
            </div>

          </div>
        </div>


        {/* </div> */}
      </nav >

    </>

  );
};

export default MyNavbar;

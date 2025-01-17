import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";

import { filteredCourses } from './Constant';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const MyNavbar = () => {
  const [courseParent, setCourseParent] = useState("");

  // Function to set the selected category for mobile view
  function displayCourse(key) {
    setCourseParent(key);
  }

  return (
    <>
      <nav className="my_navbar navbar navbar-expand-lg sticky-top" id="myNavbar">
        <Link to="/" className="navbar-brand">
          <img src={"/assets/image/logo.png"} className="logo_img img-fluid" alt="Logo" />
        </Link>

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
          <div className="col-lg-9 col-12">
            <ul className="navbar-nav justify-content-center">
              <li className="nav-item">
                <NavLink className="nav-link fs-4 nav_item" to="/" end>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-4 nav_item" to="/about">
                  About
                </NavLink>
              </li>

              {/* For large screens (d-md-block) */}
              <li className="nav-item dropdown d-md-block d-none">
                <NavLink
                  className="nav-link dropdown-toggle fs-4 nav_item"
                  data-bs-toggle="dropdown"
                >
                  Course
                </NavLink>
                <div className="submenu_box dropdown-menu">
                  <div className="row px-2" aria-labelledby="navbarDropdownMenuLink">
                    {Object.entries(filteredCourses).map(([key, value]) => (
                      <div className="col-md-3 course-list-box col-12" key={key}>
                        <span className="submenu_item">{key}</span>
                        <ul className="course-list">
                          {value.map((course, index) => (
                            <li key={index}>
                              <Link to={`/course_details/${course}`}>{course}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </li>

              {/* For mobile screens (d-md-none) */}
              <li className="nav-item dropdown d-md-none d-block">
                <NavLink
                  className="nav-link dropdown-toggle fs-4 nav_item"
                  data-bs-toggle="dropdown"
                >
                  Courses
                </NavLink>
                <div className="submenu_box dropdown-menu">
                  <div className="row px-2" aria-labelledby="navbarDropdownMenuLink">
                    {/* Iterate over the courses but only show courses based on selected category */}
                    {Object.entries(filteredCourses).map(([key, value]) => (
                      <div className="col-12" key={key}>
                        <span
                          className="submenu_item"
                          onClick={() => displayCourse(key)} // When clicked, display the courses for that category
                        >
                          {key}
                        </span>
                        {courseParent === key && (
                          <ul className="course-list ">
                            {value.map((course, index) => (
                              <li key={index}>
                                <Link to={`/course_details/${course}`}>{course}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link fs-4 nav_item" to="/gallery">
                  Gallery
                </NavLink>
              </li>


              <div className="dropdown">
                <NavLink
                  className="nav-link fs-5 nav_item dropdown-toggle document"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Document
                </NavLink>
                <ul className="dropdown-menu mydropdown_menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a
                      className="dropdown-item"
                      href="/assets/CollegeFeesStructure.pdf"
                      download="College_Fees1"
                    >
                      Course Fee1
                    </a>
                  </li>

                  <li>
                    <a
                      className="dropdown-item"
                      href="/assets/MyDocument.pdf"
                      download="College_Fees2"
                    >
                      Course Fee2
                    </a>
                  </li>
                </ul>
              </div>

              <li className="nav-item">
                <NavLink className="nav-link fs-4 nav_item" to="/contact">
                  Contact
                </NavLink>
              </li>


            </ul>
          </div>

          <div className="col-lg-3 d-lg-block d-none">
            <div className="btn-wrap">
              <a href={`tel:${7531960128}`} className="btn-common nav-btn btn-common nav-btn">Free consultation</a>

              {/* <a href="#" className="btn-common nav-btn">Free consultation</a> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MyNavbar;

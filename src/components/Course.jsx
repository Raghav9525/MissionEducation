import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router";

import "../App.css";
import { courses } from "./Constant";
import Button from "./Button";

// import {filteredCourses} from './Constant'

const Course = () => {
    const { course_type } = useParams(); // Extract the parameter from the route
    // coursee_type = course_type_param.course_type
    // console.log("course_type")
    // console.log(course_type)


    const [filter, setFilter] = useState("all");
    const navigate = useNavigate();

    useEffect(() => {
        if (course_type) {
            setFilter(course_type); // Update the filter state with the parameter value
        }
    }, [course_type]);

    const handleFilter = (category) => {
        setFilter(category);
    };

    const filteredCourses = () => {
        if (filter === "medical") {
            return courses.filter((course) =>
                [
                    "ANM",
                    "GNM",
                    "BSC(NURSING)",
                    "MBBS",
                    "D.PHARMA",
                    "B.PHARMA",
                    "POST BSC (NURSING)",
                    "MSC(NURSING)",
                    "BHMS",
                    "BDS",
                ].includes(course.name)
            );
        } else if (filter === "engineering") {
            return courses.filter((course) =>
                [
                    "B.TECH",
                    "M.TECH",
                    "B.TECH(AGRICULTURE)",
                    "AERONAUTICAL ENGINEERING",
                    "MARINE ENGINEERING",
                ].includes(course.name)
            );
        } else if (filter === "management") {
            return courses.filter((course) =>
                ["HOSPITAL MANAGEMENT", "BBA", "MBA", "HOTEL MANAGEMENT"].includes(
                    course.name
                )
            );
        }

        else if (filter === "education") {
            return courses.filter((course) => ['B.ED', "D.El.Ed"].includes(course.name))

        }
        else {
            return courses;
        }
    };


    return (
        <div className="container course">


            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <div class="theme-section-title desktop-center text-center">
                        {/* <span class="subtitle">FEEDBACKS</span> */}
                        <h2 class="title">OUR <span style={{ color: "#c90404" }}>COURSES</span>
                            <svg class="title-shape " width="455" height="15" viewBox="0 0 235 15" fill="none"
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
                </div>
            </div>

            {/* <h2 className="text-center p-2 ">Our Courses</h2> */}
            <Button onFilter={handleFilter} />

            <div className="row">
                {filteredCourses().length > 0 ? (
                    filteredCourses().map((course, index) => (
                        <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 py-3">


                            {/* <div className="card p-2 mt-4">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="card-img-top mt-4"
                  />
                  <div className="card-body">
                    <p className="card-title">{course.name}</p>
                    <div>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleExplore(course.name)}
                      >
                        Explore
                      </button>
                    </div>
                  </div>
                </div> */}

                            <div className="single-course-item image-box-item">
                                <div className="thumbnail zoom-in course_image">
                                    <img
                                        className="background-image "
                                        src={course.image}
                                    />
                                </div>
                                <div className="contact">
                                    <p className="tag text-center fs-5">{course.name}</p>


                                    <div className="btn-wrap mt-3">
                                        <Link to={`/course_details/${course.name}`} className="course_explore_btn nav-btn">Explore Course</Link>
                                    </div>



                                    {/* <div className="meta-box">
                                            <div className="left-content">
                                                <div className="feedback">
                                                    <i className="fas fa-star icon"></i>
                                                    <span className="text">4.8 (756)</span>
                                                </div>
                                            </div>
                                            <div className="right-content">
                                                <p className="price">$25.50</p>
                                            </div>
                                        </div> */}
                                </div>
                            </div>



                        </div>
                    ))
                ) : (
                    <p>No courses available for this filter.</p>
                )}
            </div>
        </div>
    );
};

export default Course;

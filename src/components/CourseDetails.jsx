import React from "react";
import { useParams } from "react-router-dom";
import { courses } from "./Constant"
import MyNavbar from "./MyNavbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import { faDeleteLeft, faSquarePhone, faPhone } from "@fortawesome/free-solid-svg-icons";



const CourseDetails = () => {

  const { course_name } = useParams(); // Extract the courseName from the route parameter

  // Find the specific course object based on the name
  const course = courses.find((c) => c.name === course_name);

  // Handle case when the course is not found
  if (!course) {
    return <p>Course not found! Please check the URL or select a valid course.</p>;
  }

  const whatsappNumber = "+917531960128";
  const message = "Hi, I am interested in the " + course.name;

  // function  

  return (
    <>

      <div className="container my_container_course">
        <div className="row ">
          <div className="col-md-1"></div>
          <div className="col-md-10 col-12">
            {/* Left Column: Course Image */}
            <div className="col-12 mb-4">
              <div className="card border-0 shadow-sm">
                <img
                  src={course.image}
                  alt={course.name}
                  className="img-fluid course_image"
                // style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
                />
              </div>
            </div>

            {/* Right Column: Course Details */}
            <div className="col-12">
              <div className="card border-0 shadow-sm ps-4 pe-4 p-2">
                <h4 className="text-uppercase text-danger">

                  {course.name}
                </h4>

                <p className=" mb-4 text-dark">
                  {course.description}

                  {/* {course.description ? (course.description).length > textLimit ? `${(course.description).substring(0, textLimit)}...` : course.description : "Description not available."} */}

                </p>

                {/* Course Eligibility */}

                {
                  typeof course.eligibility === "object" &&
                  Object.keys(course.eligibility).length > 0 && (
                    <table className="table table-striped">
                      <tbody>
                        {Object.entries(course.eligibility).map(([key, value]) => (
                          <tr key={key}>
                            <td>{key}</td>
                            <td>{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )
                }



                <div className="d-flex justify-content-start mt-2">
                  {/* WhatsApp Button */}
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      message
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success btn-lg me-3"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} beat style={{ color: "#01d092", }} />

                  </a>

                  {/* Phone Call Button */}
                  <a href={`tel:${7632966717}`} className="btn btn-primary btn-lg">

                    <FontAwesomeIcon icon={faPhone} fade />
                  </a>
                </div>


              </div>
            </div>

          </div>
          <div className="col-md-1 "></div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;

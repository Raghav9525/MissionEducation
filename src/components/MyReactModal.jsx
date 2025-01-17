import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2"; // Assuming you are using SweetAlert2 for notifications

function MyReactModal({ onHide }) {


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    console.log("formData", formData);
  }, [formData]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Valid email is required.";
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Valid 10-digit phone number is required.";
    if (!formData.course.trim()) newErrors.course = "Course name is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const checkValidation = (e) => {
    e.preventDefault();
    if (validate()) {
      sendEmail();
    }
  };

  const sendEmail = () => {
    const emailParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      course: formData.course,

    };

    emailjs
      .send(
        "service_ttlyohl", // Replace with your EmailJS service ID
        "template_bdlabep", // Replace with your EmailJS template ID
        emailParams,
        "ROJ-oCe7-XxMsUOd3" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          Swal.fire({
            icon: "success",
            title: "Query Sent!",
            text: "Your query has been successfully sent. We will get back to you soon.",
            confirmButtonText: "OK",
          });
          setFormData({
            name: "",
            email: "",
            phone: "",
            course: "",
          });
          setErrors({});
        },
        (error) => {
          console.error("FAILED...", error);
          Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "Failed to send your query. Please try again later.",
            confirmButtonText: "Retry",
          });
        }
      );
  };

  return (
    <>

      <Modal show={true} onHide={onHide} centered >
        <Modal.Header closeButton>
          <Modal.Title>Enquiry Form</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={checkValidation}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                placeholder="Enter full name"
                onChange={handleInputChange}
                value={formData.name}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                placeholder="Enter 10-digit phone number"
                onChange={handleInputChange}
                value={formData.phone}
              />
              {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                placeholder="Enter email address"
                onChange={handleInputChange}
                value={formData.email}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="course" className="form-label">
                Course Name
              </label>
              <input
                type="text"
                id="course"
                name="course"
                className={`form-control ${errors.course ? "is-invalid" : ""}`}
                placeholder="Enter course name"
                onChange={handleInputChange}
                value={formData.course}
              />
              {errors.course && <div className="invalid-feedback">{errors.course}</div>}
            </div>

            <div className="text-end">
              <Button type="submit" variant="primary">
                Submit
              </Button>
            </div>
          </form>
        </Modal.Body>


      </Modal>
    </>
  );
}

export default MyReactModal;

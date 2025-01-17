import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

import Swal from "sweetalert2";
const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        course: "",
        aadhar : "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        console.log("formData", formData);
    }, [formData]);

    // Handle input change
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    // Validate form
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

    // Check validation and send email
    const checkValidation = (e) => {
        e.preventDefault();
        if (validate()) {
            sendEmail();
        }
    };

    // Send email using EmailJS
    const sendEmail = () => {
        const emailParams = {
            name: formData.name, // Matches {{name}} in the template
            email: formData.email, // Matches {{from_email}} in the template
            phone: formData.phone, // Matches {{from_contact}} in the template
            course: formData.course, // Matches {{from_course}} in the template
            aadhar: formData.aadhar, // Matches {{from
            message: formData.message, // Matches {{message}} in the template
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
                        message: "",
                    }); // Reset form
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


        <main class="page-wrapper">
            {/* About page start here */}
            <div className="contact-us-wrapper single-page-section-top-space single-page-section-bottom-space">
                {/* Breadcrumb area start here */}
                <div className="breadcrumb-wrap">
                    <div className="container custom-container-01">
                        <div className="row">


                            <div className="col-lg-12">
                                <div class="theme-section-title desktop-center text-center">
                                    {/* <span class="subtitle">FEEDBACKS</span> */}
                                    <h2 class="title">Contact <span style={{ color: "#c90404" }}>Us</span>

                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Breadcrumb area end here */}

                {/* Contact form start here */}
                <section className="contact-form-area-wrapper section-bottom-space">
                    <div className="container custom-container-01">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="apply-form-inner">
                                    <div className="row justify-content-between">
                                        <div className="col-lg-5">
                                            <div className="contact-address">
                                                <h3 className="title">Get in touch</h3>
                                                <ul className="ul contact-address-list">
                                                    <li className="single-address-item">
                                                        <span className="icon-wrap color-01">
                                                            <i className="fa-sharp fa-solid fa-location-dot icon"></i>
                                                        </span>
                                                        <span className="text">
                                                            G.N Ganj, Gudri Bazar,Near:Dominos, Laheriasarai,Darbhanga,846001
                                                        </span>
                                                    </li>
                                                    <li className="single-address-item">
                                                        <span className="icon-wrap color-02">
                                                            <i className="fa-solid fa-phone icon"></i>
                                                        </span>
                                                        <span className="text">
                                                            +917531960128<br />
                                                            06272319973
                                                        </span>
                                                    </li>
                                                    <li className="single-address-item">
                                                        <span className="icon-wrap color-03">
                                                            <i className="fa-solid fa-envelope-open icon"></i>
                                                        </span>
                                                        <span className="text">
                                                            missioneducation.net@gmail.com

                                                        </span>
                                                    </li>
                                                </ul>
                                                <ul className="ul social-media-list style-01 color-02">
                                                    <li className="single-social-item">
                                                        <a href="#" tabIndex="-1">
                                                            <i className="fa-brands fa-instagram icon"></i>
                                                        </a>
                                                    </li>
                                                    <li className="single-social-item">
                                                        <a href="#" tabIndex="-1">
                                                            <i className="fa-brands fa-facebook-f icon"></i>
                                                        </a>
                                                    </li>
                                                    <li className="single-social-item">
                                                        <a href="#" tabIndex="-1">
                                                            <i className="fa-brands fa-youtube icon"></i>
                                                        </a>
                                                    </li>
                                                    <li className="single-social-item">
                                                        <a href="#" tabIndex="-1">
                                                            <i className="fa-brands fa-linkedin-in icon"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>



                                        <div className="col-lg-7">
                                            <div className="contact-form">
                                                <form className="form" onSubmit={checkValidation}>
                                                    <div className="part">
                                                        <h5 className="title">Primary Information</h5>
                                                        <div className="form-element">
                                                            <div className="row">
                                                                <div className="col-lg-6">
                                                                    <input
                                                                        type="text"
                                                                        name="name"
                                                                        placeholder="Full name"
                                                                        onChange={handleInputChange}
                                                                        value={formData.name}
                                                                    />
                                                                    {errors.name && <span className="error" style={{ color: "red" }}>{errors.name}</span>}
                                                                </div>

                                                                <div className="col-lg-6">
                                                                    <input
                                                                        type="tel"
                                                                        name="phone"
                                                                        placeholder="Phone number"
                                                                        onChange={handleInputChange}
                                                                        value={formData.phone}
                                                                    />
                                                                    {errors.phone && <span className="error" style={{ color: "red" }}>{errors.phone}</span>}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-element">
                                                            <div className="row">
                                                                <div className="col-lg-6">
                                                                    <input
                                                                        type="email"
                                                                        name="email"
                                                                        placeholder="Email address"
                                                                        onChange={handleInputChange}
                                                                        value={formData.email}
                                                                    />
                                                                    {errors.phone && <span style={{ color: "red" }} className="error">{errors.phone}</span>}
                                                                </div>

                                                                <div className="col-lg-6">
                                                                    <input
                                                                        type="text"
                                                                        name="course"
                                                                        placeholder="Enter Course Name"
                                                                        onChange={handleInputChange}
                                                                        value={formData.course}
                                                                    />
                                                                    {errors.course && <span style={{ color: "red" }} className="error">{errors.course}</span>}
                                                                </div>


                                                            </div>
                                                        </div>

                                                        <div className="col-lg-12 form-element">
                                                            <input
                                                                type="text"
                                                                name="aadhar"
                                                                placeholder="Enter Aadhar Number (Optional)"
                                                                onChange={handleInputChange}
                                                                value={formData.aadhar}
                                                            />
                                                        </div>
                                                        <div className="form-element">
                                                            <textarea
                                                                className="textarea"
                                                                name="message"
                                                                placeholder="Write Your Message"
                                                                rows="10"
                                                                onChange={handleInputChange}
                                                                value={formData.message}

                                                            ></textarea>
                                                            {errors.message && <span style={{ color: "red" }} className="error">{errors.message}</span>}
                                                        </div>
                                                    </div>
                                                    <div className="form-submit text-right">
                                                        <button type="submit" className="btn-common btn-active">
                                                            Submit Message
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Contact form end here */}

            </div>
        </main>
        //         </div>
        //     </div>
        // </div>



    );
};

export default Contact;

import React from "react";

const Contact = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">

                    <main class="page-wrapper">
                        {/* About page start here */}
                        <div className="contact-us-wrapper single-page-section-top-space single-page-section-bottom-space">
                            {/* Breadcrumb area start here */}
                            <div className="breadcrumb-wrap style-01">
                                <div className="container custom-container-01">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="breadcrumb-content">
                                                <h3 className="title">Contact us</h3>
                                                <p className="details">
                                                    We have professional alliances with leading Universities and Colleges around the
                                                    world.
                                                </p>
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
                                                                        2972 Westheimer Rd. Santa Ana, Illinoi 85486, India
                                                                    </span>
                                                                </li>
                                                                <li className="single-address-item">
                                                                    <span className="icon-wrap color-02">
                                                                        <i className="fa-solid fa-phone icon"></i>
                                                                    </span>
                                                                    <span className="text">
                                                                        (270) 555-0117 <br />
                                                                        (270) 589-7395
                                                                    </span>
                                                                </li>
                                                                <li className="single-address-item">
                                                                    <span className="icon-wrap color-03">
                                                                        <i className="fa-solid fa-envelope-open icon"></i>
                                                                    </span>
                                                                    <span className="text">
                                                                        nathan.roberts@example.com <br />
                                                                        headoffice@example.com
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
                                                            <form className="form">
                                                                <div className="part">
                                                                    <h5 className="title">Primary Information</h5>
                                                                    <div className="form-element">
                                                                        <div className="row">
                                                                            <div className="col-lg-6">
                                                                                <i className="fa-solid fa-user"></i>
                                                                                <input type="text" placeholder="Full name" required />
                                                                            </div>
                                                                            <div className="col-lg-6">
                                                                                <i className="fa-solid fa-envelope-open"></i>
                                                                                <input
                                                                                    type="email"
                                                                                    placeholder="Email address"
                                                                                    required
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-element">
                                                                        <div className="row">
                                                                            <div className="col-lg-6">
                                                                                <i className="fa-solid fa-phone"></i>
                                                                                <input
                                                                                    type="tel"
                                                                                    placeholder="Phone number"
                                                                                    required
                                                                                />
                                                                            </div>
                                                                            <div className="col-lg-6">
                                                                                <i className="fa-solid fa-user"></i>
                                                                                <input type="text" placeholder="Full name" required />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-element">
                                                                        <div className="row">
                                                                            <div className="col-lg-12">
                                                                                <textarea
                                                                                    className="textarea"
                                                                                    placeholder="Write description..."
                                                                                    rows="10"
                                                                                ></textarea>
                                                                            </div>
                                                                        </div>
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

                            {/* Map area start here */}
                            <div className="map-wrapper section-top-space">
                                <iframe
                                    className="w-100"
                                    src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d116838.78142003674!2d90.35554992826201!3d23.775466805757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3755c74493e3ad33%3A0xd8d84b987eddb825!2s199%2C%20Venus%20Complex%2C%2012th%20Floor%20Kha-199%2F2%2C%204%20Bir%20Uttam%20Rafiqul%20Islam%20Ave%2C%20Dhaka%201212!3m2!1d23.7754826!2d90.4255903!5e0!3m2!1sen!2sbd!4v1663127596682!5m2!1sen!2sbd"
                                    height="510"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                            {/* Map area end here */}
                        </div>
                    </main>
                </div>
            </div>
        </div>



    );
};

export default Contact;

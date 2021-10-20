import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faYoutube, faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-area">
            <div className="container">
                <div className="footer-fl">
                    <div className="footer-col">
                        <h4>DEPARTMENTS</h4>
                        <ul>
                            <li>Blood Donor Center</li>
                            <li>Community Surgery</li>
                            <li>Emergency Medicine</li>
                            <li>Gastroenterology</li>
                            <li>Patient Care Services</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>About Us</h4>
                        <ul>
                            <li>Our Mission</li>
                            <li>FAQs</li>
                            <li>Testimonials</li>
                            <li>Live Support</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Contact With Us</h4>
                        <ul>
                            <li>Address: 13323 California St.Omaha, NE, 18813</li>
                            <li>Tel: 1 (855) 123 780 456</li>
                            <li>Email: farukabdullahal9@gmail.com</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Follow Us</h4>
                        <div className="social-link">
                        <a href="https://www.youtube.com/"
                            className="youtube-1 social" target="_blank">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                        <a href="https://www.facebook.com/abdullah.alfaruk.599"
                            className="facebook-1 social" target="_blank">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a href="https://www.instagram.com/abdullah_faruk1/"
                            className="instagram-1 social" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
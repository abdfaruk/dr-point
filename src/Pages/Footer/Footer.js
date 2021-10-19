import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-area">
            <div className="footer-1st">
                <div className="footer-text">
                    <h4>DEPARTMENTS</h4>
                    <p>Blood Donor Center</p>
                    <p>Community Surgery</p>
                    <p>Emergency Medicine</p>
                    <p>Gastroenterology</p>
                    <p>Patient Care Services</p>
                </div>
                <div className="footer-text">
                    <h4>USEFUL LINKS</h4>
                    <p>Get An Appointment</p>
                    <p>Old Patient Reports</p>
                    <p>Exclusive Treatments</p>
                    <p>Insurance Claim</p>
                    <p>Our Doctors Profile</p>
                </div>
                <div className="footer-text">
                    <h4>Helpful Resources</h4>
                    <p>Resources</p>
                    <p>Demo Videos</p>
                    <p>Lessons</p>
                    <p>Live Support</p>
                    <p>ALPT</p>
                </div>
                <div className="footer-text">
                    <h4>About Us</h4>
                    <p>Mission</p>
                    <p>FAQs</p>
                    <p>Testimonials</p>
                    <p>Contact Us</p>
                </div>
            </div>
            <div className="footer-2nd mx-5">
                <h3 className="footer-contact">Contact Us</h3>
                <h5 className="footer-contact">13323 California St.Omaha, NE, 18813</h5>
                <h4 className="footer-contact">Phone</h4>
                <p className="footer-contact">1 (855) 123 780 456</p>
                <p className="footer-contact">+8801716149429</p>
                <h4 className="footer-contact">Email</h4>
                <p className="footer-contact">farukabdullahal9@gmail.com</p>
            </div>
        </div>
    );
};

export default Footer;
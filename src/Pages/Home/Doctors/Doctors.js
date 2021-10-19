import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faYoutube, faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";
import './Doctors.css';

const Doctors = () => {
    return (
        <div className="container mt-5">
            <h2 className="text-success mt-5 mb-2">TALENTED DOCTORS</h2>
            <p className="mb-5">It’s one thing to be a patient who is considerably healthy with substantive insurance and a researched choice in which doctor to select for a surgical procedure. It is quite another thing to be a mandatory patient, meaning a non-elective and often life-saving surgery is not your choice, and you may not be even conscious or fully able to make a wise decision about the surgen that will be treating you.</p>
            <div className="doctors">
                <div className="single-doc">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt5RRikDhsMlKq7c8XYPj9rDKEsTP7VQsc9w&usqp=CAU" alt="" />
                    <h4>Abdullah Al Faruk</h4>
                    <p>CEO / Surgen</p>
                    <div>
                        <a href="https://www.youtube.com/"
                            className="youtube social" target="_blank">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                        <a href="https://www.facebook.com/abdullah.alfaruk.599"
                            className="facebook social" target="_blank">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a href="https://www.instagram.com/abdullah_faruk1/"
                            className="instagram social" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                    </div>
                </div>
                <div className="single-doc">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv3iGLeLESDY7KIHXqh2-fVzVYnIaABuWpQ_HTLUlM3xwGTFurAIzUDQGvILWJ0smv-BQ&usqp=CAU" alt="" />
                    <h4>Rakibul Islam</h4>
                    <p>Co Founder / Dentist</p>
                    <div>
                        <a href="https://www.youtube.com/"
                            className="youtube social" target="_blank">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                        <a href="https://www.facebook.com/abdullah.alfaruk.599"
                            className="facebook social" target="_blank">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a href="https://www.instagram.com/abdullah_faruk1/"
                            className="instagram social" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                    </div>
                </div>
                <div className="single-doc">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9a16rKnL1AujrHwi7lhaBpGgEZVp8Sp2WvXcB5pa8scKeoyESb41abTD0gkMxg1jvgEE&usqp=CAU" alt="" />
                    <h4>Sadia Jannat</h4>
                    <p>Chief Surgen</p>
                    <div>
                        <a href="https://www.youtube.com/"
                            className="youtube social" target="_blank">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                        <a href="https://www.facebook.com/abdullah.alfaruk.599"
                            className="facebook social" target="_blank">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a href="https://www.instagram.com/abdullah_faruk1/"
                            className="instagram social" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                    </div>
                </div>
                <div className="single-doc">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2-X0EGYmNRvp7SFTdTDxOaRenyeUsUvXwCBEGBTP2WxYlHYkiRCr4-poHOmurq-Xjo0U&usqp=CAU" alt="" />
                    <h4>Abdul Awal</h4>
                    <p>Skin Care Specialist</p>
                    <div>
                        <a href="https://www.youtube.com/"
                            className="youtube social" target="_blank">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                        <a href="https://www.facebook.com/abdullah.alfaruk.599"
                            className="facebook social" target="_blank">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a href="https://www.instagram.com/abdullah_faruk1/"
                            className="instagram social" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;
import React from 'react';
import Contact from '../Contact/Contact';
import './About.css';

const About = () => {
    return (
        <div>
            <div className="about-page mb-5 mt-5">
                <h1 className="about-heading">WHO <span className="text-success">WE ARE?</span></h1>
                <h6 className="container">We went to work for a human resources company years ago just thinking the job was a good fit and the company was strong. What I learned was my job was more than a job. More than a good fit and something I was good at. I learned that my experience as a patient, brought new meaning to the assessments and interviews we offer our health care clients every day.</h6>
            </div>
            <div className="d-flex">
                <div className="about-image">
                    <img src="https://www.aamc.org/sites/default/files/styles/scale_and_crop_1200_x_666/public/d/1/3-hospitalist_patient-story.jpg__992x558_q85_crop-smart_subsampling-2_upscale.jpg?itok=HL_cR-BT" alt="" />
                </div>
                <div className="about-text">
                    <h1 className="text-success">WELCOME TO DR. POINT</h1>
                    <h5 className="mx-5">We went to work for a human resources company years ago just thinking the job was a good fit and the company was strong. What I learned was my job was more than a job. More than a good fit and something I was good at. I learned that my experience as a patient, brought new meaning to the assessments and interviews we offer our health care clients every day.</h5>
                </div>
            </div>
            <Contact></Contact>
        </div>
    );
};

export default About;
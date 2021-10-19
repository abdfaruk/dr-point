import React from 'react';
import Doctors from '../Home/Doctors/Doctors';
import Treatment from '../Home/Treatment/Treatment';
import './ExtraCompo.css';

const ExtraCompo = () => {
    return (
        <div>
            <div className="about-page mb-5 mt-5">
                <h1 className="about-heading">Specialties,<span className="text-success"> Services & Treatments</span></h1>
                <h6 className="container">We provide a full range of family care and more than 40 specialty and subspecialty health care services for patients in our service area.Explore specialized care or select a particular service to learn more.</h6>
            </div>
            <Treatment></Treatment>
            <Doctors></Doctors>
        </div>
    );
};

export default ExtraCompo;
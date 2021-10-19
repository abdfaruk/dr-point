import React from 'react';
import Treatment from '../Home/Treatment/Treatment';
import Services from './Services';
import './ServicesFixed.css';

const ServicesFixed = () => {
    return (
        <div>
            <div className="about-page mb-5 mt-5">
                <h1 className="about-heading">OUR SERVICES</h1>
            </div>
            {/* <div className="about-top">
                <p>
                OUR SERVICES</p>
            </div> */}
            <Services></Services>
            <Treatment></Treatment>
        </div>
    );
};

export default ServicesFixed;
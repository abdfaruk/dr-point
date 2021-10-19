import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <div>
                <img src="https://image.shutterstock.com/image-vector/404-connection-error-abstract-yellow-260nw-452576149.jpg" alt="" />
            </div>
            <div>
                <Link to="/home"><button className="all-btn">Go to Home</button></Link>
            </div>
        </div>
    );
};

export default NotFound;
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Slider.css';

const Slider = () => {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-100 carousel-img"
                    src="https://www.mexten.com/wp-content/uploads/2018/09/healthcare_HD.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption className="carousel-caption">
                    <h1 className="text-success">WE TOOK OUR PROFESSION AS OUR PASSION</h1>
                    <p className="text-success">Dr. Point is honored to be the best hospital in the nation for the sixth consecutive year, and we are truly grateful to our extraordinary staff for always putting our patients' needs first in the exceptional care that they provide.</p>
                    <Link to="/services">
                        <button className="all-btn">Read more</button>
                    </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 carousel-img"
                    src="https://image.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption className="carousel-caption">
                    <h1 className="text-success">WE TOOK OUR PROFESSION AS OUR PASSION</h1>
                    <p className="text-success">Dr. Point is honored to be the best hospital in the nation for the sixth consecutive year, and we are truly grateful to our extraordinary staff for always putting our patients' needs first in the exceptional care that they provide.</p>
                    <Link to="/services">
                        <button className="all-btn">Read more</button>
                    </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 carousel-img"
                    src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ2fHxtZWRpY2FsJTIwaGR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="Third slide"
                    />
                    <Carousel.Caption className="carousel-caption">
                    <h1 className="text-success">WE TOOK OUR PROFESSION AS OUR PASSION</h1>
                    <p className="text-success">Dr. Point is honored to be the best hospital in the nation for the sixth consecutive year, and we are truly grateful to our extraordinary staff for always putting our patients' needs first in the exceptional care that they provide.</p>
                    <Link to="/services">
                        <button className="all-btn">Read more</button>
                    </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;
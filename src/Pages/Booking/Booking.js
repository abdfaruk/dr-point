import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './Booking.css';

const Booking = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    const {serviceId} = useParams();

    const selectedData = services?.find( e => e.id==serviceId)
    console.log(selectedData);
    return (
        <div>
            {
                selectedData?.id && <div className="dinamic-data">

                    <div>
                        <Card style={{ width: '30rem' }}>
                            <Card.Img variant="top" src={selectedData.img} />
                            <Card.Body>
                                <Card.Title>{selectedData.name}</Card.Title>
                                <Card.Text>
                                {selectedData.description}
                                </Card.Text>
                                <Link to="/messege">
                                    <Button variant="primary"  className="all-btn">Take The Service</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            }
        </div>
    );
};

export default Booking;
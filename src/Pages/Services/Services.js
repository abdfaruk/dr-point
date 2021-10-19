import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])


    return (
        <div className="mt-5 container">
            <h2 className="text-success">WE OFFER THE BEST SERVICES</h2>
            <h5 className="container">Dr. point healthcare systems take many forms, and access to healthcare varies across countries, municipalities, and individuals and is primarily influenced by economic and social factors.</h5>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
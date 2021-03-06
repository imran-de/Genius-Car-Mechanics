import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import "./services.css"
import servicesIcon from '../../../images/icon/repair-service.png'

const Services = () => {
    const [services, setServices] = useState();
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <>
            <h1 className="my-5 text-secondary text-uppercase"><img src={servicesIcon} alt="" /> Our Services</h1>
            <div className="service-container container px-lg-5">
                {
                    services?.map((service) => <Service key={services?.id} service={service}></Service>)
                }
            </div>
        </>
    );
};

export default Services;
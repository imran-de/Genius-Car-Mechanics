import React from 'react';
import './service.css'

const Service = (props) => {
    const { name, price, description, img } = props.service
    return (
        <div className="service">
            <img className="w-100" src={img} alt="" />
            <h3 className="mt-4">{name}</h3>
            <h4>Price: ${price}</h4>
            <p className="px-3">{description}</p>
        </div>
    );
};

export default Service;
import React from 'react';
import flogo from "../../../images/logo.png"

const Footer = () => {
    return (
        <div className="bg-secondary mt-5">
            <div className="container py-3">
                <div className="row text-light">
                    <div className="col-md-4">
                        <img src={flogo} alt="" />
                        <p>Rose Avenue, Modda badda <br /> Dhaka-3100</p>
                        <p>Phone: +8801926294263</p>
                    </div>
                    <div className="col-md-4">
                        <h4>Menu</h4>
                        <ul>
                            <li>Link 1</li>
                            <li>Link 2</li>
                            <li>Link 3</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>Download Our Apps</h4>

                    </div>
                </div>
                <div className="text-start pt-3">Genius Car Mechanics &copy; all right reserved.</div>
                <div className="text-end">Developed by <a href="https://www.facebook.com/s.imran.ahmed.st/">S Imran Ahmed.</a></div>
            </div>
        </div>
    );
};

export default Footer;
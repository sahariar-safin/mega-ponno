import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer style={{ height: "250px" }} className="container-fluid row align-items-center bg-dark ms-auto me-auto">
                <div className="col-md-6 col-sm-12 col-xs-12 text-center text-white">
                    <h1> <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> Contact us</h1>
                    <p>01928284848, 01322660999, 01745101406, 01980440044, 01686897912</p>
                    <p>dami@gamil.com</p>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12 text-center text-white">
                    <h1> <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon> Address</h1>
                    <p style={{ maxWidth: "60%", margin: 'auto' }}>Nahar Plaza, Shop No- 504, Level-5, Plot- 37, Bir Uttam C.R. Dutta Road, Hatirpool, Dhaka, Dhaka Division, Bangladesh</p>
                </div>
            </footer>
            <div className="bg-light text-center">
                <p>Intellectual Property Protection, Privacy Policy, Terms of Use, User Information Legal Enquiry Guide @{(new Date).getFullYear()} Smart Shop All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
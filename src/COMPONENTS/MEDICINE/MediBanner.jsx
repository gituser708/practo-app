import React, { useState, useEffect } from 'react';
import './MediBanner.css'; 
//import deliveryboy from '../HOME/IMAGES/delivery-boy.png';

const MediBanner = () => {
    const [currentBanner, setCurrentBanner] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBanner(currentBanner === 1 ? 2 : 1);
        }, 7000);

        return () => clearInterval(interval);
    }, [currentBanner]);

    return (
        <div className="medi-banner">
            <div className={`medi-banner-item-1 ${currentBanner === 1 ? 'active' : ''}`}>
          <img src='https://img.freepik.com/free-photo/top-view-confused-male-delivery-person-mask-wearing-hat-sitting-scooter-delivering-orders-holding-document-peach-background_179666-41225.jpg?t=st=1714547993~exp=1714551593~hmac=3f380185ce9a8b23e0da030b0efdebd737a4e7b4a97c91475db6e9f855f39f4c&w=996' alt="Banner 1" />'
                <div className="medi-banner-content-1">
                    <h1>Get All Your Medicine At Your 
                        Dore Step On Time</h1>
                    <p>With Minimal Price And Discount!</p>
                    <h3>✔️Fast Delivery  ✔️Genuine Medicines 
                        ✔️ Great Discount</h3>

                </div>
            </div>
            <div className={`medi-banner-item ${currentBanner === 2 ? 'active' : ''}`}>
                <img src="https://img.freepik.com/premium-photo/young-happy-woman-holding-brown-clear-blank-craft-stack-cardboard-boxes-mock-up-isolated-pink-background_1030879-2447.jpg?w=1060" alt="Banner 2" />
                <div className="medi-banner-content-2">
                    <h1>Deliver Medicine Accross India</h1>
                    <p>Deliver In 48 hours With 
                        Satisfied Customers..
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MediBanner;

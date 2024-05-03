import React from 'react';
import Navbar from '../NAVBAR/Navbar';
import './Medicine.css';
import MediBanner from './MediBanner';
import MedicineList from './MedicineList';
import Footer from '../FOOTER/Footer';


const Medicine = () => {

    return (
        <div>
            <Navbar />
            <MediBanner />
            <MedicineList />
            <div className='mediBanner-2'>
                <h2>Home Delivery In 48 Hours</h2>
               <p>Pay on delivery time via cash or onlile.</p>
            </div>
            <Footer />
        </div>
    );
};

export default Medicine;

import React from 'react';
import Navbar from '../NAVBAR/Navbar';
import LabBanner from './LabBanner';
import LabTestList from './LabTestList';
import Footer from '../FOOTER/Footer';

const LabTest = () => {
   return (
      <div>
        <Navbar />
        <LabBanner />
        <LabTestList />
        <Footer />
      </div>
   );
};
export default LabTest;
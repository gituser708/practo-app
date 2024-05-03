import React from "react";
import './LabBanner.css';
import Labbanner from '../HOME/IMAGES/labimg.png';


const LabBanner = () => {
     return (
     <div className="lab-banner">
          <h1>Now Book Your Labtest Online</h1>
          <h2>With Home Sample Pickup In 24 Hours...</h2>
          <p>✔️From Your Home ✔️Get Online E-Report 
          ✔️Test From Expert </p>
          <img src={Labbanner} />
     </div>
     );
};
     export default LabBanner;
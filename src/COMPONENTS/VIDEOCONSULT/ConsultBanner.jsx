import React from 'react';
import './ConsultBanner.css';
import {Link} from 'react-router-dom';
import { MdVerifiedUser } from "react-icons/md";
import { FaFilePrescription } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";

const ConsultBanner = () => {
     return (
          <div className='consult-banner'>
          <h1>What Are You Doing!</h1>
          <h2>Book Your Doctor Consultation Now...</h2>  
          <Link to='/bookConsult' 
          className='book-btn'> Book Consult</Link>
          <p>Private Video Consultation Starts At Just 199/-</p>
     
     <ul>
          <li><MdVerifiedUser fontSize='1.5vw'/>
          Verified Doctors</li>
          <li><FaFilePrescription fontSize='1.5vw'/>
          Digital Prescription</li>
          <li><LuMessagesSquare fontSize='1.5vw'/>
          Free Follow Up</li>
     </ul>
          </div>
     );
};
   export default ConsultBanner;
import React from "react";
import './VideoConsult.css';
import Navbar from '../NAVBAR/Navbar';
import ConsultBanner from './ConsultBanner';
import heart from '../HOME/IMAGES/heart.png';
import {Link} from 'react-router-dom'
import { VscActivateBreakpoints } from "react-icons/vsc";
import { MdPayment } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import Footer from '../FOOTER/Footer';

const VideoConsult = () => {
     return (
          <div>
          <Navbar />
          <ConsultBanner />
          <div className="consult-collum-2">
               <h1>Top+ Specialities</h1>
               <h2>Consult with top doctors online</h2>
          </div>

          <div className="consult-image-container-2">
            <div className="consut-image-item-2">
                <img src='https://img.freepik.com/free-vector/woman-skin-problem-vector-illustration_1284-52676.jpg?size=626&ext=jpg&ga=GA1.1.1242019508.1710815286&semt=sph' alt="img" />
            <div className="consult-image-content-2">
                <p>Dermatologist</p>
                <p>Consult Fee 199/-</p>
            </div>
            </div>
          
            <div className="consut-image-item-2">
                <img src={heart} alt="img" />
            <div className="consult-image-content-2">
                <p>CardioLogist</p>
                <p>Consult Fee 299/-</p>
            </div>
            </div>

            <div className="consut-image-item-2">
                <img src='https://img.freepik.com/premium-vector/pink-sign-with-cross-it_822882-68226.jpg?w=740' alt="img" />
            <div className="consult-image-content-2">
                <p>NeuroLogist</p>
                <p>Consult Fee 399/-</p>
            </div>
            </div>

            <div className="consut-image-item-2">
                <img src='https://img.freepik.com/premium-vector/stethoscope-vector-simple-icon-isolated-white-background_570429-45497.jpg?w=740' alt="img" />
            <div className="consult-image-content-2">
                <p>Ganarel Physician</p>
                <p>Consult Fee 199/-</p>
            </div>
            </div>

            <div className="consut-image-item-2">
                <img src='https://img.freepik.com/free-vector/tooth-glyph-style_78370-4792.jpg?t=st=1714199375~exp=1714202975~hmac=e7747f69fdf3c5053066414f0912def696a08e783957981c502649248e4c6aa1&w=740' alt="img" />
            <div className="consult-image-content-2">
                <p>Dentist</p>
                <p>Consult Fee 199/-</p>
            </div>
            </div>
            </div>

            <div className="consult-collum-3">
               <b>Offer</b>
            <h2>Consult with spcialist at</h2>
            <span> Just 199/-</span>
            <Link to='/bookConsult' className="book-link-2">
                Consult Now➡️
            </Link>
            <img src="https://png.pngtree.com/png-clipart/20230918/ourmid/pngtree-photo-men-doctor-physician-chest-smiling-png-image_10132895.png" alt="img"/>
            </div>
              
               <div className="consult-collum-4">
                <p>How Its Works!</p>
                <ul>
                    <li>
                    <VscActivateBreakpoints fontSize='2.2vw'/>
                    </li>
                    <h3>1.Book a spacific consultation</h3>
                    <li>
                    <MdPayment fontSize='2.2vw'/>
                    </li>
               <h3>2.Get the payment link in your wattsapp</h3>
                <li>
                <FaVideo fontSize='2vw'/>
                </li>
                <h3>3.After sucsessfull payment get the 
                    consulttation link
                </h3>
                </ul>
               </div>
               <Footer />
            </div>
         
     );
};
   export default VideoConsult;
import React from 'react';
import './Footer.css';
import { GiHealthIncrease } from 'react-icons/gi';

const Footer = () => {
     return (
       <div className='footer-container'>
         <div className='footer-lists'>
        <ul className='footer-list-1'>
          Services
          <li className='footer-item-1'>
             Find Doctors
          </li>
          <li className='footer-item-1'>
            Video Consult
          </li>
        <li className='footer-item-1'>
               Order Medicine
          </li>
          <li className='footer-item-1'>
               Blog
          </li>
          <li className='footer-item-1'>
               Daily Articals
               </li>

        </ul>
        <ul className='footer-list-2'>
          Information
          <li className='footer-item-2'>
             Doctor
          </li>
          <li className='footer-item-2'>
            Patient
          </li>
        <li className='footer-item-2'>
               About Us
          </li>
          <li className='footer-item-2'>
               Clinic
          </li>
          <li className='footer-item-2'>
               GuideLines
               </li>
          <li className='footer-item-2'>
               Api
          </li>

        </ul>
        <ul className='footer-list-3'>
          Help && Support
          <li className='footer-item-3'>
             24/7 Avalable
          </li>
          <li className='footer-item-3'>
            Toll free no. 
            1800809000
          </li>
        <li className='footer-item-3'>
            whattsapp 
            906780100
          </li>
        </ul>

        <ul className='footer-list-4'>
          Follow Us On Social
          <li className='footer-item-4'>
            <img  src='https://cdn-icons-png.freepik.com/256/2504/2504918.png?uid=R131297990&ga=GA1.1.1242019508.1710815286&semt=ais_hybrid' 
            alt='logo'/>
          </li>
          <li className='footer-item-4'>
            <img src='https://cdn-icons-png.freepik.com/256/4494/4494479.png?uid=R131297990&ga=GA1.1.1242019508.1710815286&semt=ais_hybrid'
            alt='logo' />
          </li>
        <li className='footer-item-4'>
           <img src='https://cdn-icons-png.freepik.com/256/3670/3670147.png?uid=R131297990&ga=GA1.1.1242019508.1710815286&semt=ais_hybrid'
            alt='logo' />
          </li>
          <li className='footer-item-4'>
           <img src='https://cdn-icons-png.freepik.com/256/4494/4494481.png?uid=R131297990&ga=GA1.1.1242019508.1710815286&semt=ais_hybrid'
           alt='logo' />
          </li>
        </ul>
        </div>
      <div className='footer-collum-5'>
        <div className='footer-line'></div>
   <p><GiHealthIncrease color='red' />   
      ©️copyright 2024 || All rights reserved.</p>
      </div>
    
    </div>
     );
};
  export default Footer;
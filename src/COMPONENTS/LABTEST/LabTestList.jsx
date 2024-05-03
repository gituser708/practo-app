// LabTestList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import labTestsData from './labtests.json';
import './Labtest.css';

const LabTestList = () => {
  return (
    <div className='lablist'>
      <h1>Our Top Digonostic Labtests</h1>
      {labTestsData.map(test => (
        <div className='lablist-container'
        key={test.id}>
          <img src={test.image} alt={test.testName} />
          <h3>{test.testName}</h3>
          <p>{test.price}/-</p>
          <p>{test.content}</p>
          <Link to='/labBook'>
            <button>Book Now</button> 
          </Link>
        </div>
      ))}
      <div className='lablist-container-2'>
        <h4>How Its Works</h4>
        <p>
          ✔️choose a test book now a home sample collection.
        </p>
        <p>
          ✔️get a payment link done the payment or via cash on time
        </p>
        <p>
          ✔️We will send a certified professional to your place to assist you with the sample collection
        </p>
        <p>✔️We will email you the reports,you will free to follow up</p>
      </div>
    </div>
  );
};

export default LabTestList;



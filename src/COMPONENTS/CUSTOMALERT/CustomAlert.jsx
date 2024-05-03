import React from 'react';
import './CustomAlert.css';

const CustomAlert = ({ message, type, onClose }) => {
  return (
    <div className={`custom-alert ${type}`}>
      <p className='custom-alert-msg'>{message}</p>
      <button className='custom-alert-btn'
      onClick={onClose}>OK</button>
    </div>
  );
};

export default CustomAlert;
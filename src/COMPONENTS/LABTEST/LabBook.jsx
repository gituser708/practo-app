// LabBookForm.jsx
import React, { useState } from 'react';
import { useNavigate, useParams,Link } from 'react-router-dom';
import axios from 'axios';
import './LabBook.css';

const LabBookForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    patientName: '',
    phoneNumber: '',
    email: '',
    city: '',
    landmark: '',
    pincode: '',
    selectedDate: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      testId: id,
      formData
    };
    try {
      await axios.post('https://practo-server-0bne.onrender.com/api/labtests', data);
      alert('Booking successful');
      navigate('/');
    } catch (err) {
      console.error(err);
      alert('Booking failed');
    }
  };

  return (
    <div>
      <div className='lab-book-form'>
        <h1>Book Your Labtest Now</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="patientName" value={formData.patientName} onChange={handleChange} placeholder="Patient Name" required />
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" required />
        <input type="text" name="landmark" value={formData.landmark} onChange={handleChange} placeholder="Landmark" required />
        <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Pincode" required />
        <input type="date" name="selectedDate" value={formData.selectedDate} onChange={handleChange} placeholder="Selected Date" required />
        <button type="submit">Submit</button>
        <Link  to='/labtest'>
           <button>Cancel</button>
        </Link>
      </form>
    </div>
    </div>
  );
};

export default LabBookForm;

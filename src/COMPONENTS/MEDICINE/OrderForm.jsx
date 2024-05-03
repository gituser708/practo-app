import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './OrderForm.css';
import CustomAlert from '../CUSTOMALERT/CustomAlert';

const OrderForm = ({ onClose }) => {
    const location = useLocation();
    const selectedMedicine = location.state.selectedMedicine;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        landmark: '',
        city: '',
        pincode: '',
        product: selectedMedicine
    });
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({ message: '', type: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post('http://localhost:5000/api/orders', 
            formData);
            setTimeout(() => {
                setAlert({ message: 'Order placed successfully we will connect you shortly... ', 
                type: 'success' });
                setLoading(false);
                setTimeout(() => {
                    navigate('/medicine');
                }, 4000);
            }, 3000);
        } catch (error) {
            console.error(error);
            setAlert({ message: 'Failed to place order. Please try after some time..', type: 'error' });
            setLoading(false);
        }
    };

    const handleAlertClose = () => {
        setAlert({ message: '', type: '' });
    };

    return (
        <div>
            <h1 className='orderform-heading'
            >Let's Fill It To Get Your Medicine In 2 Days</h1>
        <div className="order-form">
            {loading && <div className="order-loader"></div>}
            {alert.message && <CustomAlert message={alert.message} type={alert.type} onClose={handleAlertClose} />}
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                <label>Landmark:</label>
                <input type="text" name="landmark" value={formData.landmark} onChange={handleChange} />
                <label>City:</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                <label>Pincode:</label>
                <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />
                <input type="hidden" name="product" value={JSON.stringify(formData.product)} />
                <button className='orderform-btn'
                type="submit">Submit</button>
                <Link  className='order-form-link'
                to='/medicine'>❌</Link>
            </form>
        </div>
        </div>
    );
};

export default OrderForm;

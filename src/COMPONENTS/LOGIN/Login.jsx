import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import {Link} from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', formData);
      console.log(response.data);
      // Redirect to home page if login is successful
      navigate('/');
    } catch (error) {
      setError('Invalid email or password');
      console.error(error);
    }
  };

  return (
    <form className='login-form'
    onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
      <Link to='/'>
        <button>Cancel❌</button>
      </Link>
    </form>
  );
};

export default LoginForm;

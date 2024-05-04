import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import '../../COMPONENTS/SIGNUP/signup.css';

const SignupForm = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://practo-server-0bne.onrender.com/api/register', formData);
      console.log(response.data);
      // Handle success, e.g., redirect to login page
      navigate('/login');
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <form className='signup-form'
    onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
      <button type="submit">Sign Up</button>
      <Link to='/login'>
        <button>Login</button>
      </Link>
    </form>
  );
};

export default SignupForm;

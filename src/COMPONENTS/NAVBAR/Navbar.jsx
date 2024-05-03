import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { GiHealthIncrease } from 'react-icons/gi';

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink exact to='/' activeClassName="active">
              <GiHealthIncrease color='red' fontSize= '2.2vw'/>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to='/' 
            activeClassName="active">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to='/FindDoctors' 
            activeClassName="active">Find Doctors</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to='/videoConsult' 
            activeClassName="active">Book Consult</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to='/medicine' 
            activeClassName="active">Medicine</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to='/labtest' 
            activeClassName="active">Labtest</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to='/signUp' 
            activeClassName="active">Sign-In</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
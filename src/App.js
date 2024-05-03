import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} 
from 'react-router-dom';
import Home from './COMPONENTS/HOME/Home';
import FindDoctor from './COMPONENTS/FINDDOCTOR/FindDoctor';
import VideoConsult from './COMPONENTS/VIDEOCONSULT/VideoConsult';
import BookConsult from './COMPONENTS/VIDEOCONSULT/BookConsult';
import Medicine from './COMPONENTS/MEDICINE/Medicine';
import OrderForm from './COMPONENTS/MEDICINE/OrderForm';
import LabTest from './COMPONENTS/LABTEST/LabTest';
import LabBook from './COMPONENTS/LABTEST/LabBook';
import SignUp from './COMPONENTS/SIGNUP/Signup';
import Login from './COMPONENTS/LOGIN/Login';
import AuthContainer from './COMPONENTS/AuthContainer';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/findDoctors' element={<FindDoctor />} />
        <Route path='/videoConsult' element={<VideoConsult />} />
        <Route path='/bookConsult' element={<BookConsult />} />
        <Route path='/medicine' element={<Medicine />} />
        <Route path='/order' element={<OrderForm />} />
        <Route path='/labtest' element={<LabTest />} />
        <Route path='/labBook' element={<LabBook />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/auth' element={<AuthContainer />} />
      </Routes>
    </Router>
  );
};
  export default App;
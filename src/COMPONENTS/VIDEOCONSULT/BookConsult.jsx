import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import CustomAlert from '../CUSTOMALERT/CustomAlert';
import {Link} from 'react-router-dom';
import './BookConsult.css';


const BookConsult = () => {
    const [consultFor, setConsultFor] = useState('');
    const [patientName, setPatientName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [selectDate, setSelectDate] = useState(new Date());
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(null);

    const navigate = useNavigate();

    const consultForOptions = [
        { value: 'General Consult', label: 'General Consult' },
        { value: 'Dentist', label: 'Dentist' },
        { value: 'Eye Consult', label: 'Eye Consult' },
        { value: 'Cardiologist', label: 'Cardiologist' },
        { value: 'Dermatologist', label: 'Dermatologist' },
        { value: 'Neurologist', label: 'Neurologist' },
        { value: 'Ear-nose-throat', label: 'Ear-nose-throat' },
        { value: 'Child Specialist', label: 'Child Specialist' },
        { value: 'Cold-Cough, Fever', label: 'Cold-Cough, Fever' }
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await axios.post('http://localhost:5000/api/consult', {
                consultFor: consultFor.value,
                patientName,
                phoneNumber,
                email,
                selectDate
            });

            setTimeout(() => {
                setLoading(false);
                setAlert({
                    message: 'Consultation booked successfully! Our partner will connect with you shortly...',
                    type: 'success'
                });
                setTimeout(() => {
                    setAlert(null);
                    navigate('/videoConsult');
                }, 5000); // Show alert for 5 seconds after 3 seconds of loader
            }, 4000); // Show loader for 4 seconds
        } catch (error) {
            setLoading(false);
            setAlert({
                message: 'Failed to book consultation',
                type: 'error'
            });
            console.error(error);
        }
    };

    const year = new Date().getFullYear();
    const currentMonth = new Date().getMonth();

    const isWeekday = (date) => {
        const day = date.getDay();
        return day !== 0 && day !== 3; // Only allow weekdays
    };

    return (
        <div>
            <h1 className='bookConsult-heading'>
                Let's Fill It And Book Your Consultation...
            </h1>
            <div className='bookConsult-container'>
                <form onSubmit={handleSubmit}>
                    <label>
                        Consult For:
                        <Select className='react-select'
                            options={consultForOptions}
                            value={consultFor}
                            onChange={setConsultFor}
                            placeholder="Select a speciality"
                            isSearchable={false}
                            required
                           />
                    </label>
                    <label>
                        Patient Name:
                        <input type="text" value={patientName} onChange={(e) => setPatientName(e.target.value)} required />
                    </label>
                    <label>
                        Phone Number:
                        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                    </label>
                    <label>
                        Email:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </label>
                    <label>
                        Select Date:
                        <DatePicker
                            selected={selectDate}
                            onChange={date => setSelectDate(date)}
                            minDate={new Date(year, currentMonth, 1)}
                            maxDate={new Date(year, currentMonth + 1, 0)}
                            filterDate={isWeekday}
                            dateFormat="yyyy-MM-dd"
                            required
                        />
                    </label>
                    <button className='bookConsult-btn'
                    type="submit">Book Now</button>
                    <Link to='/videoConsult' 
                    className='consult-link'>❌
                    </Link>
                </form>
                {loading && <div className="consult-loader"></div>}
                {alert && <CustomAlert message={alert.message} type={alert.type} onClose={() => setAlert(null)} />}
            </div>
        </div>
    );
};

export default BookConsult;
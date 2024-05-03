import React, {useState} from "react";
import Navbar from '../NAVBAR/Navbar';
import doctorsData from './doctors.json';
import './FindDoctor.css';
import { IoIosSearch } from "react-icons/io";
import FindDoctor2 from './FindDoctor2';

const FindDoctor = () => {
  const [selectedSpeciality, setSelectedSpeciality] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDoctorList, setShowDoctorList] = useState(false);

  const handleFindClick = () => {
    setLoading(true);
    setTimeout(() => {
      setFilteredDoctors(filterDoctors());
      setLoading(false);
      setShowDoctorList(true);
    }, 3000);
  };

  const filterDoctors = () => {
    let filtered = doctorsData;
    if (selectedSpeciality) {
      filtered = filtered.filter(doctor => doctor.speciality === selectedSpeciality);
    }
    if (selectedGender) {
      filtered = filtered.filter(doctor => doctor.gender === selectedGender);
    }
    return filtered;
  };

  const handleCloseClick = () => {
    setShowDoctorList(false);
  };

  return (
    <div>
        <Navbar />
      <div className="find-doctor-banner">
        <h1>Let's Find Your Doctor And Call</h1>
        <div className="select-box">
          <div className="select-box">
          <label>
            <select value={selectedSpeciality} onChange={(e) => setSelectedSpeciality(e.target.value)}>
              <option value="">Select Speciality</option>
              <option value="Cough, Cold, Fever">
              Cough, Cold, Fever
              </option>
              <option value="Dentist">Dentist</option>
              <option value="Ear-nose-throat">
              Ear-nose-throat
              </option>
              <option value="Cardiologist">
              Cardiologist
              </option>
              <option value="Dermatologist">
              Dermatologist
              </option>
              <option value="Neurologist">
              Neurologist
              </option>
              <option value="Child Specialist">
              Child Specialist
              </option>
            </select>
          </label>
          <label>
            <select value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </label>
          <button onClick={handleFindClick}>
            Find <IoIosSearch fontSize='1.5vw' /></button>
        </div>
        </div>
        <p>
          Just Select Your Speciality That You
           Need!! And Call The Doctor For An Appointment...
        </p>
      </div>
      
      {loading && (
        <div className="loader-overlay">
          <div className="loader"></div>
        </div>
      )}

      {showDoctorList && (
        <div className="overlay blur" onClick={handleCloseClick}>
          <div className="doctor-list">
            <button className="close-button" 
            onClick={handleCloseClick}>❌</button>
            {filteredDoctors.map(doctor => (
              <div key={doctor.id} className="doctor-card">
                <img src={doctor.imageUrl} alt={doctor.name} />
                <div>
                  <h2>{doctor.name}</h2>
                  <p>Gender: {doctor.gender}</p>
                  <p>Age: {doctor.age}</p>
                  <p>Experience: {doctor.experience}</p>
                  <p>Speciality: {doctor.speciality}</p>
                  <p>Contact: {doctor.contact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
         <FindDoctor2 />
    </div>
  );
};

export default FindDoctor;

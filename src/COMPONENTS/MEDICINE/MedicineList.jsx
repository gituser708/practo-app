import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MedicineList.css'; 
import medicinesData from './medicines.json';

const MedicineList = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchKeyword, setSearchKeyword] = useState('');
    const [filteredMedicines, setFilteredMedicines] = useState(medicinesData);
    const [selectedMedicine, setSelectedMedicine] = useState(null);
    const navigate = useNavigate();

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleSearchChange = (e) => {
        setSearchKeyword(e.target.value);
    };

    const handleSearch = () => {
        let filteredData = medicinesData.filter(medicine => {
            if (selectedCategory !== 'All' && medicine.category !== selectedCategory) {
                return false;
            }
            if (searchKeyword !== '' && !medicine.title.toLowerCase().includes(searchKeyword.toLowerCase())) {
                return false;
            }
            return true;
        });

        setFilteredMedicines(filteredData);
    };

    const handleOrderNow = (medicine) => {
        navigate('/order', { state: { selectedMedicine: medicine } }); // Navigate to the order form page with selected medicine
    };

    const handleClose = () => {
        setSelectedMedicine(null);
    };

    return (
        <div className="medicine-list">
            <h1>Buy Your Medicine From Here</h1>
            <div className="filter">
                <select value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="All">All</option>
                    <option value="Fever">Fever</option>
                    <option value="Skincare">Skincare</option>
                    <option value="Fitness">Fitness</option>
                    <option value="Cough">Cough</option>
                    <option value="Pain">Pain</option>
                    <option value="Baby Care">Baby Care</option>
                </select>
                <input type="text" value={searchKeyword} onChange={handleSearchChange} placeholder="Search..." />
                <button className='search-btn'
                onClick={handleSearch}>Search</button>
            </div>
            <div className="medicines">
                {filteredMedicines.map(medicine => (
                    <div className="medicine-item" key={medicine.id}>
                        <img src={medicine.image} alt={medicine.title} />
                        <h3>{medicine.title}</h3>
                        <p>{medicine.category}</p>
                        <p>${medicine.price}</p>
                        <p>{medicine.content}</p>
                        <button onClick={() => handleOrderNow(medicine)}>Order Now</button>
                    </div>
                ))}
            </div>
            {selectedMedicine && (
                <div className="selected-medicine">
                    <div className="modal">
                        <button className="close-button" onClick={handleClose}>Close</button>
                        <div className="medicine-details">
                            <img src={selectedMedicine.image} alt={selectedMedicine.title} />
                            <h3>{selectedMedicine.title}</h3>
                            <p>{selectedMedicine.category}</p>
                            <p>${selectedMedicine.price}</p>
                            <p>{selectedMedicine.content}</p>
                            <button onClick={() => {
                                navigate('/order'); // Navigate to the order form page
                                setSelectedMedicine(null); // Clear selectedMedicine
                            }}>Order Now</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MedicineList;

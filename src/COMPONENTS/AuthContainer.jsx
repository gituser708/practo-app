import React, { useState } from 'react';
import Navbar from './NAVBAR/Navbar';

const AuthContainer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform logout logic
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      {/* Render your other components based on the isLoggedIn state */}
    </div>
  );
};

export default AuthContainer;

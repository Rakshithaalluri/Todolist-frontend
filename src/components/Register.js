import React, { useState } from 'react';
import './Register.css'; // Ensure this import statement is included

const Register = ({ setIsRegistering }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleRegister = async () => {
    let validationErrors = {};

    if (!username) {
      validationErrors.username = 'Username field is empty';
    }

    if (!password) {
      validationErrors.password = 'Password field is empty';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        alert('Registration successful');
        setIsRegistering(false);
      } else {
        alert('User already exists');
      }
    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <div className="register-container">
      <h2> Create Your Todo List Account </h2>
      
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="register-input"
      />
      {errors.username && <span className="error-message">{errors.username}</span>}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="register-input"
      />
      {errors.password && <span className="error-message">{errors.password}</span>}
      <button onClick={handleRegister} className="register-button">Register</button>
      <p className="back-to-login" onClick={() => setIsRegistering(false)}>
        Already have an account? Login
      </p>
    </div>
  );
};

export default Register;




import React, { useState } from 'react';
import './Login.css'; // Ensure this import statement is included

const Login = ({ setToken, setIsRegistering }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleLogin = async () => {
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
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const data = await response.json();
        setToken(data.token);
        alert('Login successful');
      } else {
        alert('User Does not exists');
      }
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div className="login-container">
      <h2>Login to Your Account</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="login-input"
      />
      {errors.username && <span className="error-message">{errors.username}</span>}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
      />
      {errors.password && <span className="error-message">{errors.password}</span>}
      <button onClick={handleLogin} className="login-done-button">Login</button>
      <p className="back-to-register" onClick={() => setIsRegistering(true)}>
        Don't have an account? Register
      </p>
    </div>
  );
};

export default Login;






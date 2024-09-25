import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import TodoList from './components/TodoList';
import './App.css'

const App = () => {
  const [token, setToken] = useState('');
  const [isRegistering , setIsRegistering] = useState(true);

  return (
    <div className="app-container">
      {!token ? (
        isRegistering ? (
          <Register setIsRegistering={setIsRegistering} />
        ) : (
          <Login setToken={setToken} setIsRegistering={setIsRegistering}/>
        )
      ) : (
        <TodoList token={token} />
      )}
    </div>
  );
};

export default App;

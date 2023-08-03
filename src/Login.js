import React, { useState } from 'react';
import Dashboard from './Dashboard';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state to track login status

  const handleLogin = (event) => {
    event.preventDefault();

    // Perform authentication logic here (e.g., call an API or check the credentials)
    const validUsername = '123';
    const validPassword = '123';

    if (username === validUsername && password === validPassword) {
      console.log('Login successful');
      setIsLoggedIn(true);
    } else {
      console.log('Invalid credentials');
    }
  };

  // If the user is logged in, show the Dashboard component
  if (isLoggedIn) {
    return <Dashboard username={username} />;
  }

  // Otherwise, show the login form
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;

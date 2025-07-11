import React, { useState } from 'react';
import axios from 'axios';

export default function Login({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/login', { email, password });
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);
    } catch (err) {
      alert('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
    </form>
  );
}

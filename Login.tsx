import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import '../index.css'; // Import the CSS file

const Login: React.FC = () => {
  const [role, setRole] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ role }));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Login</h1>
      <select onChange={(e) => setRole(e.target.value)} className="mb-4">
        <option value="">Select Role</option>
        <option value="Admin">Admin</option>
        <option value="Student">Student</option>
      </select>
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2">Login</button>
    </div>
  );
};

export default Login;
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/auth/login', { email, password });
      login(data.token);
      navigate(data.role==='ADMIN'?'/admin':'/dashboard');
    } catch(err){ alert('Invalid credentials'); }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow rounded w-96">
        <h2 className="text-2xl mb-6 text-primary font-semibold">Login</h2>
        <input
          className="border w-full mb-4 px-3 py-2 rounded"
          placeholder="Email"
          value={email}
          onChange={e=>setEmail(e.target.value)}
        />
        <input
          type="password"
          className="border w-full mb-4 px-3 py-2 rounded"
          placeholder="Password"
          value={password}
          onChange={e=>setPassword(e.target.value)}
        />
        <button className="w-full bg-primary text-white py-2 rounded">Sign In</button>
      </form>
    </div>
  );
};
export default Login;

import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

const base = axios.create({ baseURL: import.meta.env.VITE_API_BASE || 'http://localhost:4000' });

base.interceptors.request.use(cfg=>{
  const token = localStorage.getItem('token');
  if (token) cfg.headers.Authorization = `Bearer ${token}`;
  return cfg;
});

export default base;

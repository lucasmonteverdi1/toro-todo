import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'http://localhost:3100/api',
});

export const login = async (credentials: any) => {
  return axiosApi.post('/auth/login', credentials);
};

export const register = async (userDetails: any) => {
  return axiosApi.post('/auth/register', userDetails);
};

export const logout = () => {
  localStorage.removeItem('token');
};



import axios from "axios";

// const axios = require('axios');

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

// ====================================
// ============= Auth =================
// ====================================

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', { auth: loginData });
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false
}

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
}

export const showHaikus = async () => {
  const resp = await api.get(`/poems`)
  // console.log(resp)
  return resp.data;
}


export const postHaiku = async (item) => {
  const resp = await api.post(`/poems`, { poem: item })
  return resp.data
}

export const putHaiku = async (item, id) => {
  const resp = await api.put(`/poems/${id}`, { poem: item })
  return resp.data
}
export const destroyHaiku = async (id) => {
  const resp = await api.delete(`/poems/${id}`);
  return resp.data;
}
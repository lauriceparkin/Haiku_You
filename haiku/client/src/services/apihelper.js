
import axios from "axios";

// const axios = require('axios');

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://haikup4.herokuapp.com/' : 'http://localhost:3000'
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
    console.log(resp)
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

export const getOneHaiku = async (haiku_id) => {
  const resp = await api.get(`/poems/${haiku_id}`);
  console.log(resp)
  return resp.data
}


export const showUser = async (id) => {
  const resp = await api.get(`/users/${id}`)
  return resp.data;
}


export const postHaiku = async (haiku, user_id) => {
  const resp = await api.post(`/poems`, { poem: { content: haiku, user_id: user_id } })
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



export const getComments = async (haiku_id) => {
  const resp = await api.get(`/poems/${haiku_id}/comments`);
  return resp.data;
}

export const postComment = async (haiku_id, commentData) => {
  const resp = await api.post(`/poems/${haiku_id}/comments`, { comment: commentData });
  return resp.data;
}

export const putComment = async (comment_id, commentData) => {
  const resp = await api.put(`/poems/:haiku_id/comments/${comment_id}`, commentData);
  return resp.data;
}

export const deleteComment = async (comment_id) => {
  const resp = await api.delete(`/poems/:haiku_id/comments/${comment_id}`);
  return resp.data;
}


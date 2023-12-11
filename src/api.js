// client/src/api.js
import axios from 'axios';

const apiUrl = 'http://localhost:5000/api'; // Update with your server URL

export const getItems = () => axios.get(`${apiUrl}/items`);
export const getItemById = (id) => axios.get(`${apiUrl}/items/${id}`);
export const createItem = (item) => axios.post(`${apiUrl}/items`, item);
export const updateItem = (id, item) => axios.put(`${apiUrl}/items/${id}`, item);
export const deleteItem = (id) => axios.delete(`${apiUrl}/items/${id}`);

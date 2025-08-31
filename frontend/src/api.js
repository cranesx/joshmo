import axios from "axios";

const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

export const createOrder = (data) =>
  axios.post(`${API_BASE}/orders`, data);

export const fetchOrders = () =>
  axios.get(`${API_BASE}/orders`);

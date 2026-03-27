import axios from "axios";

const BASE_URL = "https://event-manager-x5u1.onrender.com";

export const getEvents = () => {
  return axios.get(`${BASE_URL}/events`);
};

export const registerUser = (data) => {
  return axios.post(`${BASE_URL}/register`, data);
};
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080",
});

export const getEvents = () => API.get("/events");

export const registerUser = (data) => API.post("/register", data);
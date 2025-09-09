// frontend/src/utils/api.js
import axios from "axios";

// axios instance create kar rahe hain
const api = axios.create({
  baseURL: "http://localhost:5000", // backend server ka URL
  withCredentials: true,            // cookies/session send honge
});

export default api;

import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://full-stack-estate-backend-25g7.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;

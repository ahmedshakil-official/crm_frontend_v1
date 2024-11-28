import axios from "axios";

// Create a reusable Axios instance
const apiClient = axios.create({
  baseURL: "https://d3d1-123-253-215-58.ngrok-free.app", // Replace with your actual api base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;

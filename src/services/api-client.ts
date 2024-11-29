import axios from "axios";

// Create a reusable Axios instance
const apiClient = axios.create({
  baseURL: "https://8ca9-123-253-215-58.ngrok-free.app", // Replace with your actual api base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;

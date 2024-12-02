import axios from "axios";
import { getSession } from "next-auth/react";

// Create a reusable Axios instance
const apiClient = axios.create({
  baseURL: "https://144f-123-253-215-58.ngrok-free.app", // Replace with your actual api base URL
  headers: {
    "Content-Type": "application/json",
  },

  // Replace with your actual api base URL
});

console.log("inside intercepto r  filessss", {
  res: apiClient.defaults,
});

apiClient.interceptors.request.use(
  async (config) => {
    const session = await getSession();
    console.log("Session Data:", session); // Add detailed logging

    const token = session?.user?.accessToken;
    console.log("Token:", token); // Check if the token is retrieved correctly

    if (token) {
      config.headers.Authorization = `JWT ${token}`;
    } else {
      console.warn("No token found in session!");
    }

    return config;
  },
  (error) => {
    console.error("Request Interceptor Error:", error);
    return Promise.reject(error);
  }
);

export default apiClient;

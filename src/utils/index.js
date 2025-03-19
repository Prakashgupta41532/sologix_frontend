import axios from "axios";

export const API = axios.create({
  // baseURL: "https://sologix-backend.vercel.app/v1/",
  baseURL: "https://sologix-web.onrender.com/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

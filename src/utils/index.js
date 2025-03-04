import axios from "axios";

export const API = axios.create({
  baseURL: "https://sologix-backend.vercel.app/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

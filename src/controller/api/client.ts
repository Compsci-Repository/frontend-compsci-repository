import axios from "axios";

const APIClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default APIClient;

import axios from "axios";

import { API_URL } from "../../config";

const api = axios.create({
  baseURL: API_URL,
});

api.defaults.headers.post["Content-Type"] = "application/json";

// token pass;

api.interceptors.request.use(function (config) {
  const accessToken = localStorage.getItem("access_token");
  config.headers.Authorization = accessToken;
  return config;
});

export default api;

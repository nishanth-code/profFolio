import axios from "axios";

const BASE_URL = "https://psychic-sniffle-p5wqr79vvv6hrxrg-5000.app.github.dev";

export const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

authApi.defaults.headers.common["Content-Type"] = "application/json";

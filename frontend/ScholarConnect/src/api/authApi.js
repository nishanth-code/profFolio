import axios from "axios";

// const BASE_URL = "https://psychic-sniffle-p5wqr79vvv6hrxrg-5000.app.github.dev";
const BASE_URL = "https://scholarconnect.onrender.com";
// const BASE_URL = "https://n46mhh-5000.csb.app/";

// const authToken = localStorage.getItem("token");
const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  // headers: {
  //   "Content-type": "application/json",
  //   // Authorization: `${authToken}`,
  // },
});

const setAuthToken = () => {
  const token = localStorage.getItem("token");

  // if (token) {
  authApi.defaults.headers.common["Authorization"] = token;
  // }
  // else {
  //   delete authApi.defaults.headers.common["Authorization"];
  // }
};

// authApi.defaults.headers.common["Content-Type"] = "application/json";

export { authApi, setAuthToken };
export default authApi;

// headers: {
//     "Authorization": `${authToken}`,
//   },
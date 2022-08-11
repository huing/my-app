import axios from "axios";
// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded";

// const instance = axios.create()
axios.interceptors.request.use(function (config) {
  console.log("request", config);
  return config;
});
axios.interceptors.response.use(function (response) {
  console.log("response", response);
  return response && response.data;
});
export default axios;

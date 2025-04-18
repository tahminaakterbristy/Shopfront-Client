import axios from "axios";
const axiosSecure = axios.create({
  baseURL: "https://nexgen-diagnosia-server.vercel.app",
  withCredentials: true,
});
const UseAxiosSecure = () => {
  return axiosSecure;
};

export default UseAxiosSecure;

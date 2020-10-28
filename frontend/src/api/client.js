import axios from "axios";
import { Cookies } from "react-cookie";
const client = axios.create({
  baseURL: "http://dsm-voice.herokuapp.com/",
});
// const token = new Cookies().get("token");
// const refreshToken = new Cookies().get("refreshToken");
// if (token) {
//   client.interceptors.request.use((config) => {
//     config.headers.post["access-token"] = token;
//     config.headers.get["refresh-token"] = refreshToken;
//   });
// }

export default client;

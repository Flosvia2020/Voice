import axios from "axios";
const client = axios.create({
  baseURL: "http://dsm-voice.herokuapp.com/",
});
export default client;

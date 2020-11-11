import axios from "axios";

const client = axios.create({
  baseURL: "http://dsm-voice.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
    //"access-token": localStorage.getItem("accessToken"),
  },
});

export default client;

import axios from "axios";

const client = axios.create({
  baseURL: "",
  headers: { "content-type": "application/json" },
});

export default client;

import axios from "axios";

const api = axios.create({
 baseURL: "https://localhost:7066/",
});

export default api;
import axios from "axios";

const api = axios.create({
    baseURL: "https://back-oxefood.herokuapp.com/"
});

export default api;
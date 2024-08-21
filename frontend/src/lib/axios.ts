import axios from "axios";


const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 15000, //15 segundos de espera
    headers: {'Authorization':  `Bearer ${import.meta.env.VITE_API_KEY}`}
})

export default api;
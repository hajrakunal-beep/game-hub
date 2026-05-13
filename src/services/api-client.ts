import axios from "axios";

export const apiClient = axios.create({
    baseURL: "https://api.rawg.io/api",
    headers: {
        "Content-Type": "application/json",
    },
    params: {
        key: "081185c5171f47f497964997d3a34e74"
    }
});
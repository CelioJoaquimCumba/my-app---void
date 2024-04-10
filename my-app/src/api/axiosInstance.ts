import axios from 'axios';

const BASE_URL = ""
export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "multipart/form-data",
    },
})
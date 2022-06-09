import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://quran-api.santrikoding.com',
});
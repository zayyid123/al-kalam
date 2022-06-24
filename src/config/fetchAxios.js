import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://quran-api.santrikoding.com',
});

export const axiosInstanceAdzan = axios.create({
    baseURL: 'https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/',
});
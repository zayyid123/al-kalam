import { axiosInstance } from "../config/fetchAxios";

export const getAllSurah = async () => {
    const response = axiosInstance.get(`/api/surah`);
    return response;
};

export const getDetailSurah = async (nomor) => {
    const response = axiosInstance.get(`/api/surah/${nomor}`);
    return response;
};
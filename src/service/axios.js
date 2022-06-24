import { axiosInstance, axiosInstanceAdzan } from "../config/fetchAxios";

export const getAllSurah = async () => {
    const response = axiosInstance.get(`/api/surah`);
    return response;
};

export const getDetailSurah = async (nomor) => {
    const response = axiosInstance.get(`/api/surah/${nomor}`);
    return response;
};

export const getKota = async () => {
    const response = axiosInstanceAdzan.get(`kota.json`);
    return response;
};

export const getAdzan = async (kota, tahun, bulan) => {
    const response = axiosInstanceAdzan.get(`adzan/${kota}/${tahun}/${bulan}.json`);
    return response;
};
import axios from '@/lib/axios';
import { Advertisement } from '@/interfaces/advertisement';

export const getAdvertisements = async () => {
    const { data } = await axios.get(`/advertisements/`);
    
    return data;
};

export const createAdvertisement = async (advertisement: Advertisement) => {
    const { data } = await axios.post(`/advertisements/`, advertisement);

    return data;
}

export const readAdvertisement = async (id: string) => {
    const { data } = await axios.get(`/advertisements/${id}`);

    return data;
}

export const updateAdvertisement = async (id: string, advertisement: Advertisement) => {
    const { data } = await axios.put(`/advertisements/${id}`, advertisement);

    return data;
}

export const deleteAdvertisement = async (id: string) => {
    const { data } = await axios.delete(`/advertisements/${id}`);

    return data;
}
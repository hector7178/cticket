import axios from '@/lib/axios';
import { AdvertisementType } from '@/interfaces/advertisement';

export const getAdvertisementsTypes = async () => {
    const { data } = await axios.get(`/advertisements/types/`);
    
    return data;
};

export const createAdvertisementType = async (advertisements_types: AdvertisementType) => {
    const { data } = await axios.post(`/advertisements/types/`, advertisements_types);

    return data;
}

export const readAdvertisementType = async (id: string) => {
    const { data } = await axios.get(`/advertisements/types/${id}`);

    return data;
}

export const updateAdvertisementType = async (id: string, advertisements_types: AdvertisementType) => {
    const { data } = await axios.put(`/advertisements/types/${id}`, advertisements_types);

    return data;
}

export const deleteAdvertisementType = async (id: string) => {
    const { data } = await axios.delete(`/advertisements/types/${id}`);

    return data;
}
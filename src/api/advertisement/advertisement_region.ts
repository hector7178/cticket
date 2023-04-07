import axios from '@/lib/axios';
import { AdvertisementRegion } from '@/interfaces/advertisement';

export const getAdvertisementsRegions = async () => {
    const { data } = await axios.get(`/advertisements/regions/`);
    
    return data;
};

export const createAdvertisementRegion = async (advertisement_region: AdvertisementRegion) => {
    const { data } = await axios.post(`/advertisements/regions/`, advertisement_region);

    return data;
}

export const readAdvertisementRegion = async (id: string) => {
    const { data } = await axios.get(`/advertisements/regions/${id}`);

    return data;
}

export const updateAdvertisementRegion = async (id: string, advertisement_region: AdvertisementRegion) => {
    const { data } = await axios.put(`/advertisements/regions/${id}`, advertisement_region);

    return data;
}

export const deleteAdvertisementRegion = async (id: string) => {
    const { data } = await axios.delete(`/advertisements/regions/${id}`);

    return data;
}
import axios from '@/lib/axios';
import { AdvertisementSpot } from '@/interfaces/advertisement';

export const getAdvertisementsSpots = async () => {
    const { data } = await axios.get(`/advertisements/spots/`);
    
    return data;
};

export const createAdvertisementSpot = async (advertisement_spot: AdvertisementSpot) => {
    const { data } = await axios.post(`/advertisements/spots/`, advertisement_spot);

    return data;
}

export const readAdvertisementSpot = async (id: string) => {
    const { data } = await axios.get(`/advertisements/spots/${id}`);

    return data;
}

export const updateAdvertisementSpot = async (id: string, advertisement_spot: AdvertisementSpot) => {
    const { data } = await axios.put(`/advertisements/spots/${id}`, advertisement_spot);

    return data;
}

export const deleteAdvertisementSpot = async (id: string) => {
    const { data } = await axios.delete(`/advertisements/spots/${id}`);

    return data;
}
import axios from '@/lib/axios';
import { AdvertisementCategory } from '@/interfaces/advertisement';

export const getAdvertisementsCategories = async () => {
    const { data } = await axios.get(`/advertisements/categories/`);
    
    return data;
};

export const createAdvertisementCategory = async (advertisement_category: AdvertisementCategory) => {
    const { data } = await axios.post(`/advertisements/categories/`, advertisement_category);

    return data;
}

export const readAdvertisementCategory = async (id: string) => {
    const { data } = await axios.get(`/advertisements/categories/${id}`);

    return data;
}

export const updateAdvertisementCategory = async (id: string, advertisement_category: AdvertisementCategory) => {
    const { data } = await axios.put(`/advertisements/categories/${id}`, advertisement_category);

    return data;
}

export const deleteAdvertisementCategory = async (id: string) => {
    const { data } = await axios.delete(`/advertisements/categories/${id}`);

    return data;
}
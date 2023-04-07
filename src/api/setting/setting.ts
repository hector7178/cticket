import axios from '@/lib/axios';
import { Settings } from '@/interfaces/setting';

export const getSettings = async () => {
    const { data } = await axios.get(`/settings/`);

    return data;
};

export const createSetting = async (setting: Settings) => {
    const { data } = await axios.post(`/settings/`, setting);

    return data;
}

export const readSetting = async (id: string) => {
    const { data } = await axios.get(`/settings/${id}`);

    return data;
}

export const updateSetting = async (id: string, setting: Settings) => {
    const { data } = await axios.put(`/settings/${id}`, setting);

    return data;
}

export const deleteSetting = async (id: string) => {
    const { data } = await axios.delete(`/settings/${id}`);

    return data;
}
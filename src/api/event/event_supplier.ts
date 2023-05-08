import axios from '@/lib/axios';
import { EventSupplier } from '@/interfaces/event';

export const getEventsSuppliers = async () => {
    const { data } = await axios.get(`/events/suppliers/`);
    return data;
};

export const createEventSupplier = async (supplier:string) => {
    const { data } = await axios.post(`/events/suppliers/`, supplier, {
       
        headers:{
            'Content-Type':'application/json',
            'accept': 'application/json'},
        
    } );

    return data;
}

export const readEventSupplier = async (id: string) => {
    const { data } = await axios.get(`/events/suppliers/${id}`);

    return data;
}

export const updateEventSupplier = async (id: string, supplier: string) => {
    const { data } = await axios.put(`/events/suppliers/${id}`, supplier, {
       
        headers:{
            'Content-Type':'application/json',
            'accept': 'application/json'},
        
    });

    return data;
}

export const deleteEventSupplier = async (id: string) => {
    const { data } = await axios.delete(`/events/suppliers/${id}`);

    return data;
}
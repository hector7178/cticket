import axios from '@/lib/axios';
import { EventOrderPayment } from '@/interfaces/event';

export const getEventOrdersPayments = async () => {
    const { data } = await axios.get(`/events/orders/payments/`);
    return data;
};

export const createEventOrderPayment = async (order_payment: EventOrderPayment) => {
    const { data } = await axios.post(`/events/orders/payments/`, order_payment);

    return data;
}

export const readEventOrderPayment = async (id: string) => {
    const { data } = await axios.get(`/events/orders/payments/${id}`);

    return data;
}

export const updateEventOrderPayment = async (id: string, order_payment: EventOrderPayment) => {
    const { data } = await axios.put(`/events/orders/payments/${id}`, order_payment);

    return data;
}

export const deleteEventOrderPayment = async (id: string) => {
    const { data } = await axios.delete(`/events/orders/payments/${id}`);

    return data;
}
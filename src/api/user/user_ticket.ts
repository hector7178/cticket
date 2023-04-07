import axios from '@/lib/axios';
import { UserTicket } from '@/interfaces/user';

export const getUsersTickets = async () => {
    const { data } = await axios.get(`/users/tickets/`);
    
    return data;
};

export const createUserTicket = async (user_ticket: UserTicket) => {
    const { data } = await axios.post(`/users/tickets/`, user_ticket);

    return data;
}

export const readUserTicket = async (id: string) => {
    const { data } = await axios.get(`/users/tickets/${id}`);

    return data;
}

export const updateUserTicket = async (id: string, user_ticket: UserTicket) => {
    const { data } = await axios.put(`/users/tickets/${id}`, user_ticket);

    return data;
}

export const deleteUserTicket = async (id: string) => {
    const { data } = await axios.delete(`/users/tickets/${id}`);

    return data;
}
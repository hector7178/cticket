import axios from '@/lib/axios';
import { UserReview } from '@/interfaces/user';

export const getUsersReviews = async () => {
    const { data } = await axios.get(`/users/reviews/`);
    
    return data;
};

export const createUserReview = async (user_review: UserReview) => {
    const { data } = await axios.post(`/users/reviews/`, user_review);

    return data;
}

export const readUserReview = async (id: string) => {
    const { data } = await axios.get(`/users/reviews/${id}`);

    return data;
}

export const updateUserReview = async (id: string, user_review: UserReview) => {
    const { data } = await axios.put(`/users/reviews/${id}`, user_review);

    return data;
}

export const deleteUserReview = async (id: string) => {
    const { data } = await axios.delete(`/users/reviews/${id}`);

    return data;
}
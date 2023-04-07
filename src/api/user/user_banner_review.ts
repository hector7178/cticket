import axios from '@/lib/axios';
import { UserBannerReview } from '@/interfaces/user';

export const getUsersBannersReviews = async () => {
    const { data } = await axios.get(`/users/banners/reviews/`);
    
    return data;
};

export const createUserBannerReview = async (user_banner_review: UserBannerReview) => {
    const { data } = await axios.post(`/users/banners/reviews/`, user_banner_review);

    return data;
}

export const readUserBannerReview = async (id: string) => {
    const { data } = await axios.get(`/users/banners/reviews/${id}`);

    return data;
}

export const updateUserBannerReview = async (id: string, user_banner_review: UserBannerReview) => {
    const { data } = await axios.put(`/users/banners/reviews/${id}`, user_banner_review);

    return data;
}

export const deleteUserBannerReview = async (id: string) => {
    const { data } = await axios.delete(`/users/banners/reviews/${id}`);

    return data;
}
import axios from '@/lib/axios';
import { UserRecommendReview } from '@/interfaces/user';

export const getUsersRecommendsReviews = async () => {
    const { data } = await axios.get(`/users/recommends/reviews/`);
    
    return data;
};

export const createUserRecommendReview = async (user_recommend_review: UserRecommendReview) => {
    const { data } = await axios.post(`/users/recommends/reviews/`, user_recommend_review);

    return data;
}

export const readUserRecommendReview = async (id: string) => {
    const { data } = await axios.get(`/users/recommends/reviews/${id}`);

    return data;
}

export const updateUserRecommendReview = async (id: string, user_recommend_review: UserRecommendReview) => {
    const { data } = await axios.put(`/users/recommends/reviews/${id}`, user_recommend_review);

    return data;
}

export const deleteUserRecommendReview = async (id: string) => {
    const { data } = await axios.delete(`/users/recommends/reviews/${id}`);

    return data;
}
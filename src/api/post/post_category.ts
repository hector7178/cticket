import axios from '@/lib/axios';
import { PostCategory } from '@/interfaces/post';

export const getPostsCategories = async () => {
    const { data } = await axios.get(`/posts/categories/`);
    
    return data;
};

export const createPostCategory = async (post_category: PostCategory) => {
    const { data } = await axios.post(`/posts/categories/`, post_category);

    return data;
}

export const readPostCategory = async (id: string) => {
    const { data } = await axios.get(`/posts/categories/${id}`);

    return data;
}

export const updatePostCategory = async (id: string, post_category: PostCategory) => {
    const { data } = await axios.put(`/posts/categories/${id}`, post_category);

    return data;
}

export const deletePostCategory = async (id: string) => {
    const { data } = await axios.delete(`/posts/categories/${id}`);

    return data;
}
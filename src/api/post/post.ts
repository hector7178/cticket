import axios from '@/lib/axios';
import { Post } from '@/interfaces/post';

export const getPosts = async () => {
    const { data } = await axios.get(`/posts/`);
    
    return data;
};

export const createPost = async (post: Post) => {
    const { data } = await axios.post(`/posts/`, post);

    return data;
}

export const readPost = async (id: string) => {
    const { data } = await axios.get(`/posts/${id}`);

    return data;
}

export const updatePost = async (id: string, post: Post) => {
    const { data } = await axios.put(`/posts/${id}`, post);

    return data;
}

export const deletePost = async (id: string) => {
    const { data } = await axios.delete(`/posts/${id}`);

    return data;
}
import axios from '@/lib/axios';
import { PostTag } from '@/interfaces/post';

export const getPostsTags = async () => {
    const { data } = await axios.get(`/posts/tags/`);
    
    return data;
};

export const createPostTag = async (post_tag: PostTag) => {
    const { data } = await axios.post(`/posts/tags/`, post_tag);

    return data;
}

export const readPostTag = async (id: string) => {
    const { data } = await axios.get(`/posts/tags/${id}`);

    return data;
}

export const updatePostTag = async (id: string, post_tag: PostTag) => {
    const { data } = await axios.put(`/posts/tags/${id}`, post_tag);

    return data;
}

export const deletePostTag = async (id: string) => {
    const { data } = await axios.delete(`/posts/tags/${id}`);

    return data;
}
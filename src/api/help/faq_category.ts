import axios from '@/lib/axios';
import { FaqCategory, GetAllFaqCategories } from '@/interfaces/help';
import { PaginationParams } from '@/interfaces/serializers/commons';

export const getFaqsCategories = async ({
    size = 50,
    page = 1,
    searchkey = '',
    searchword = '',
    sortby = '',
    descending = true
}: PaginationParams) => {

    const params = `size=${size}&page=${page}&searchkey=${searchkey}&searchword=${searchword}&sortby=${sortby}&descending=${descending}`

    const { data } = await axios.get<GetAllFaqCategories>(`/faqs/categories/?${params}`);

    return data;
};

export const createFaqCategory = async (post_category: FaqCategory) => {
    const { data } = await axios.post<FaqCategory>(`/faqs/categories/`, post_category);

    return data;
}

export const readFaqCategory = async (id: string) => {
    const { data } = await axios.get<FaqCategory>(`/faqs/categories/${id}`);

    return data;
}

export const updateFaqCategory = async (post_category: FaqCategory) => {
    const { data } = await axios.put<FaqCategory>(`/faqs/categories/${post_category._id}`, post_category);

    return data;
}

export const deleteFaqCategory = async (id: string) => {
    const { data } = await axios.delete<{ message: string }>(`/faqs/categories/${id}`);

    return data;
}
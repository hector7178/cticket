import { Faq, FaqContent, GetAllFaqs } from '@/interfaces/help';
import { PaginationParams } from '@/interfaces/serializers/commons';
import axios from '@/lib/axios';

export const getFaqs = async ({
    size = 50,
    page = 1,
    searchkey = '',
    searchword = '',
    sortby = '',
    descending = true
}: PaginationParams) => {

    const params = `size=${size}&page=${page}&searchkey=${searchkey}&searchword=${searchword}&sortby=${sortby}&descending=${descending}`

    const { data } = await axios.get<GetAllFaqs>(`/faqs/?${params}`);

    return data;
};

export const createFaq = async (faq: { category_id: string, faq: FaqContent[] }) => {
    const { data } = await axios.post<Faq>(`/faqs/`, faq);

    return data;
}

export const readFaq = async (id: string) => {
    const { data } = await axios.get<Faq>(`/faqs/${id}`);

    return data;
}

export const updateFaq = async (faq: Faq) => {
    const { data } = await axios.put<Faq>(`/faqs/${faq._id}`, faq);
    return data;
}

export const deleteFaq = async (id: string) => {
    const { data } = await axios.delete<{ message: string }>(`/faqs/${id}`);

    return data;
}
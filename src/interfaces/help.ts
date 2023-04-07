import { BasicTranslate } from './serializers/commons';

export interface CategoryID {
    id: string
    collection: string
}

interface Pagination {
    total: number
    page: number
    size: number
    next: string
    previous: string
    first: string
    last: string
}

export interface GetAllFaqs extends Pagination {
    items: Faq[]
}
export interface GetAllFaqCategories extends Pagination {
    items: FaqCategory[]
}

export interface FaqContent {
    lang: string
    question: string
    answer: string
}

export interface Faq<T = FaqCategory> {
    _id?: string
    category_id: T | string
    faq: FaqContent[]
    status?: boolean
    created_at?: Date
    updated_at?: null
}

export interface FaqCategory {
    _id?: string;
    category: BasicTranslate[];
    status?: boolean;
    created_at?: Date;
    updated_at?: null;
}


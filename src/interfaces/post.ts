import { BasicTranslate, Content } from "./serializers/commons";
import { PostStat } from './serializers/post';

export interface Post {
    user_id: string
    category_id: string
    tags: string[]
    image: string
    content: Content
    slug: BasicTranslate[]
    meta: BasicTranslate[]
    stats: PostStat
    status?: boolean
}

export interface PostCategory {
    category: BasicTranslate
    status?: boolean
}

export interface PostTag {
    tag: BasicTranslate
    status?: boolean
}
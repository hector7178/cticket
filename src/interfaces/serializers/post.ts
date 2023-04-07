interface PostStatShared {
    facebook: number
    twitter: number
    instagram: number
    whatsapp: number
    telegram: number
}

export interface PostStat {
    visit: number
    like: number
    shared: PostStatShared
}
// src/lib/axios.ts
import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Add this interceptor to inject the Authorization header
instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default instance;


// import axios from 'axios';

// const instance = axios.create({
//     baseURL: process.env.NEXT_PUBLIC_API_URL
// })

// instance.interceptors.request.use(function (config) {
//     const token = typeof window !== 'undefined' ? "bearer " + localStorage.getItem('token') : '';

//     (config.headers as any)['Authorization'] = token;

//     return config
// })

// export default instance;
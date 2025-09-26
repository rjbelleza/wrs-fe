import axios from "axios";
import localforage from "localforage";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const backendApi = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
});

// Request interceptor
backendApi.interceptors.request.use(
    async (config) => {
        const token = await localforage.getItem('api-token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
backendApi.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        if (axios.isAxiosError(error) && error.response && error.response.status === 401) {
            window.location.href = "/session-expired";
        }
        return Promise.reject(error);
    }
);

export default backendApi;

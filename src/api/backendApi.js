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
            console.error("Unauthorized request. Clearing session and redirecting to login...");

            await localforage.removeItem('api-token');
            await localforage.removeItem('user');

            delete backendApi.defaults.headers.common['Authorization'];
        }
        return Promise.reject(error);
    }
);

export default backendApi;

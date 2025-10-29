import backendApi from "@/api/backendApi";
import axios from "axios";

export const loginUser = async (credentials) => {
    try {
        const res = await backendApi.post('/login', credentials);

        return res.data;
    } catch (err) {
        let errorMessage = "Login failed. Please try again.";

        if (axios.isAxiosError(err) && err.response) {
            if (err.response.data.message) {
                errorMessage = err.response.data.message || errorMessage;
                console.error("Error during login: ", err.response.data.message);
            }
        }

        if (!axios.isAxiosError(err) || !err.response) {
            console.error("Non-API or Network Error during login: ", err);
        }

        throw new Error(errorMessage);
    }
};

export const logoutUser = async () => {
    try {
        const res = await backendApi.post('/logout');

        return res.data;
    } catch (err) {
        let errorMessage = "Logout failed. Please try again.";

        if (axios.isAxiosError(err) && err.response) {
            if (err.message.data.response) {
                errorMessage = err.response.data.error || errorMessage;
                console.error("Error during logout: ", err);
            }
        }

        if (!axios.isAxiosError(err) || !err.response) {
            console.error("Non-API or Network Error during login: ", err);
        }

        throw new Error(errorMessage);
    }
};

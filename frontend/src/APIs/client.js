import Axios from "axios";
import storage from "./store";
import { APP_BASE_URL_DEV, APP_BASE_URL_PRODUCTION, DEV_MODE } from "../config/constant";

export const api = Axios.create({
    baseURL: DEV_MODE ? APP_BASE_URL_DEV : APP_BASE_URL_PRODUCTION
});

function authRequestInterceptor(config) {
    if (config.headers) {
        config.headers.Accept = 'application/json';
    }
    const token = storage.getToken();
    if (token) {
        config.headers.authorization = `Bearer ${token}`;
    }
    return config;
}

api.interceptors.request.use(authRequestInterceptor);
api.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        const message = error.response?.data?.message || error.message;
        console.log('Request failed:-', message);

        if (error.response?.status === 401) {
            storage.clearToken();
            const searchParams = new URLSearchParams();
            const redirectTo =
                searchParams.get('redirectTo') || window.location.pathname;
            window.location.href = paths.auth.login.getHref(redirectTo);
            return Promise.resolve();
        }

        return Promise.reject(error);
    },
);
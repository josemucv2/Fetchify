import { Fetchify } from "./core";

export const FetchifyInscante = Fetchify


const instasce = FetchifyInscante.create({ baseURL: '', headers: {} })

instasce.setToken({ token: '' })

instasce.setRequestInterceptor(async (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
        config.headers.set("Authorization", `Bearer ${token}`);
    }
    console.log("Request Interceptor:", config);
    return config;
});

import axios from "axios";

const instance = axios.create({
    // baseURL: "https://67495bf6868020296630a6e3.mockapi.io/"
    baseURL: "http://localhost:8080"
})

instance.interceptors.request.use(
    config => {
        config.startTime = Date.now();
        console.log('Request', config);
        return config;
    },
    error => {
        console.log('Request Error', error);
        return Promise.reject(error);
    }
);

// 响应拦截器
instance.interceptors.response.use(
    response => {
        const endTime = Date.now();
        const duration = endTime - response.config.startTime;
        console.log('Response', response);
        console.log(`Request took ${duration}ms`);
        return response;
    },
    error => {
        if (error.response && error.response.status === 404) {    window.location.href = "/not-found";}
        if (error.response && error.response.status === 500) {    window.location.href = "/hard-stop";}
        const endTime = Date.now();
        const duration = endTime - error.config.startTime;
        console.log('Response Error', error);
        console.log(`Request took ${duration}ms`);
        return Promise.reject(error);
    }
);

export default instance;


import axios from "axios"
import qs from 'qs';
const http = axios.create();
http.defaults.baseURL = "https://blog.zdldove.top/Home/Apis"
http.interceptors.request.use(function (config) {
    let data = config.data
    if (!(data instanceof FormData) && config.method === "post") {
        config.data = qs.stringify(config.data)
    }
    return config
}, function (error) {
    return Promise.reject(error)
});
http.interceptors.response.use(function (response) {
    let { data } = response;
    return data
}, function (error) {
    return Promise.reject(error)
});

export default http;
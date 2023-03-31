import axios from "axios";

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: { 'Content-Type': 'application/json' }
})

const $managerHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const $adminHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$managerHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $managerHost,
    $adminHost
}
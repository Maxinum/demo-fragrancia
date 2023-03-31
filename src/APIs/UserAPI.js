import { $managerHost, $host, $adminHost } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password) => {
    const { data } = await $adminHost.post('user/registration', { email, password, role: 'ADMIN' })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const { data } = await $host.post('user/login', { email, password })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    let result;
    await $managerHost.get('user/auth')
        .catch(err => {
            if (err.response) {
                result = err.response.data.message;
            }
        })
        .then(data => {
            if (result === undefined) {
                localStorage.setItem('token', data.token)
                result = jwt_decode(data.token)
            }
        })

    return result;
}
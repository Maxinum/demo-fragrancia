import { $managerHost, $host, $adminHost } from "../../../http/index";
import jwt_decode from "jwt-decode";

export const fetchUsers = async () => {
    const { data } = await $adminHost.get('user')
    return data
}

export const addUser = async (userData) => {
    const { data } = await $adminHost.post('user/registration', userData);
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}
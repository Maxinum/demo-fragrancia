import { $managerHost, $host, $adminHost } from "../../../APIs/index";
import jwt_decode from "jwt-decode";

export const Login = async (info) => {
    const { data } = await $host.post('user/login', info)
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}
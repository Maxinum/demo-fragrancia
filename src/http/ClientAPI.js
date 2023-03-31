import {$managerHost, $host, $adminHost} from "./index";
import jwt_decode from "jwt-decode";

export const createClient = async (client) => {
    const {data} = await $managerHost.post('client', client)
    return data
}

export const fetchClients = async () => {
    const {data} = await $managerHost.get('client')
    return data
}

export const fetchCategories = async () => {
    const {data} = await $managerHost.get('client/salesCategory', )
    return data
}

export const fetchCities = async () => {
    const {data} = await $managerHost.get('client/cities', )
    return data
}

export const fetchClientInfo = async (clientId) => {
    const {data} = await $host.get('clientInfo', {params: {clientId}})
    return data
}

export const fetchClientHistory = async (id) => {
    const {data} = await $host.get('clientHistory/' + id)
    return data
}
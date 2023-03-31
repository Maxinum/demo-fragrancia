import {$managerHost, $host, $adminHost} from "../../../APIs/index";

export const fetchClients = async () => {
    const {data} = await $managerHost.get('client')
    return data
}

export const fetchCategories = async () => {
    const {data} = await $managerHost.get('client/salesCategory', )
    return data
}

export const fetchDeliveryTypes = async () =>{
    const {data} = await $managerHost.get('client/deliveryTypes');
    return data
}

export const fetchLastDays = async () => {
    const {data} = await $managerHost.get('client/getHistory')
    return data
}

export const fetchClientHistory = async (id) => {
    const {data} = await $managerHost.get('client/getHistory', {params: {id}})
    return data
}
import {$managerHost, $host, $adminHost} from "../../../http/index";

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
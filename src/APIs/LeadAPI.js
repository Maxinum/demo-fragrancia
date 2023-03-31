import {$managerHost, $host, $adminHost} from "./index";

export const fetchLeads = async () =>{
    const {data} = await $host.get('lead/all')
    return data;
}

export const addLead = async (data) =>{
    const {res} = await $managerHost.post('lead', data)
    return res;
}
import {$managerHost, $host, $adminHost} from "../../../APIs/index";

export const updateColumn = async (id, columnId) => {
    const {data} = await $managerHost.patch('lead/column',{id:id, column:columnId})
    return data
}

export const updateInfo = async (info) => {
    const {data} = await $managerHost.put('lead/card',info);
    return data
}
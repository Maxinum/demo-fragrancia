import {$managerHost, $host, $adminHost} from "../../../APIs/index";

export const fetchCons = async () => {
    const {data} = await $managerHost.get('product/cons')
    return data
}
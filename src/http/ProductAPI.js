import {$managerHost, $host, $adminHost} from "./index";

export const fetchPerfumes = async () => {
    const {data} = await $managerHost.get('product/perf')
    return data
}

export const fetchConsun = async () => {
    const {data} = await $managerHost.get('product/cons')
    return data
}


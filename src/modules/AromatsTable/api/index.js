import {$managerHost, $host, $adminHost} from "../../../APIs/index";

export const fetchPerfumes = async () => {
    const {data} = await $managerHost.get('product/perf')
    return data
}
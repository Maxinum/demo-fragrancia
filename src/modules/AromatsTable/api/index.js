import {$managerHost, $host, $adminHost} from "../../../http/index";

export const fetchPerfumes = async () => {
    const {data} = await $managerHost.get('product/perf')
    return data
}
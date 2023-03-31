import {$managerHost, $host, $adminHost} from '../../../APIs/index';


export const fetchBuffList = async () => {
    const {data} = await $managerHost.get('client/buffer');
    return data
}


export const fetchBuffOrders = async (id) => {
    const {data} = await $managerHost.get('order/bufOrder', { params: {id: id} });
    return data;
};
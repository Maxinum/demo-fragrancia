import { $managerHost, $host, $adminHost } from "./index";

export const createOrder = async (order) => {
    console.log(order);
    const data  = await $managerHost.post('order', order)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    return data;
}

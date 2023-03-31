import { $managerHost, $host, $adminHost } from "./index";

export const createOrder = async (order) => {
    const data  = await $managerHost.post('order', order)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    return data;
}

export const deleteOrder = async (id) => {
  await $managerHost.delete('order/delete', { data: { id } });
}

export const updateOrder = async (order) => {
  const data  = await $managerHost.post('order/update', order)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });
  return data;
}

export const sendCheck = async (formData) => {
    $managerHost.post('order/check', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
}

export const getPayments = async (id) => {
  const data = await $managerHost.get('/order/getPayment', { params: {id: id} });
  return data.data;
}
import {$managerHost, $host, $adminHost} from '../../../APIs/index';


export const fetchBuffList = async () => {
    // const {data} = await $managerHost.get('client/buffer');
    const data = 
    {
      Today: [],
      "The day before": [],
      "Two days or more": [
        {
          id: 4227,
          clientId: 440,
          name: "Денис",
          order_date: "2023-03-15T13:53:48.000Z",
          total: 78171,
          closed: 2,
        },
        {
          id: 6426,
          clientId: 231,
          name: "Аян",
          order_date: "2023-02-03T00:00:00.000Z",
          total: 13504,
          closed: 2,
        },
        {
          id: 6444,
          clientId: 10,
          name: "Аделия",
          order_date: "2023-02-10T00:00:00.000Z",
          total: 5680,
          closed: 2,
        },
        {
          id: 6449,
          clientId: 231,
          name: "Аян",
          order_date: "2023-02-13T00:00:00.000Z",
          total: 81120,
          closed: 2,
        },
        {
          id: 6455,
          clientId: 240,
          name: "Жарас",
          order_date: "2023-02-15T00:00:00.000Z",
          total: 36426,
          closed: 2,
        },
        {
          id: 6457,
          clientId: 240,
          name: "Жарас",
          order_date: "2023-03-15T13:53:48.000Z",
          total: 15233,
          closed: 2,
        },
        {
          id: 6458,
          clientId: 371,
          name: "Дастан",
          order_date: "2023-02-15T00:00:00.000Z",
          total: 19466,
          closed: 2,
        },
        {
          id: 6459,
          clientId: 423,
          name: "Еламан",
          order_date: "2023-03-14T13:53:48.000Z",
          total: 11940,
          closed: 2,
        },
        {
          id: 6466,
          clientId: 19,
          name: "Айдос",
          order_date: "2023-03-14T13:53:48.000Z",
          total: 53600,
          closed: 2,
        },
        {
          id: 6467,
          clientId: 19,
          name: "Айдос",
          order_date: "2023-02-18T00:00:00.000Z",
          total: 40750,
          closed: 2,
        },
        {
          id: 6468,
          clientId: 87,
          name: "Гульжанат",
          order_date: "2023-03-10T00:00:00.000Z",
          total: 126600,
          closed: 2,
        },
        {
          id: 6469,
          clientId: 87,
          name: "Гульжанат",
          order_date: "2023-03-13T13:53:48.000Z",
          total: 18900,
          closed: 2,
        },
      ],
    };
    return data
}


export const fetchBuffOrders = async (id) => {
    const {data} = await $managerHost.get('order/bufOrder', { params: {id: id} });
    return data;
};
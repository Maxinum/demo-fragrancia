import dayjs from "dayjs";
import { toJS } from "mobx";
import setZeroes from "../../ClientBlcok/helpers/setZeros";
import {
  calcSubTotal,
  calcTotal,
} from "../../AromatsTable/helpers/Calculation";

export function setClientInfo(orders, client, bufOrders) {
  const order_date = bufOrders[0].order_date;
  const selectedClient = client.clients.find(
    (item) => item?.id === bufOrders[0].clientId
  );
  const selectedCategory = client.categories.find(
    (item) => item?.id === bufOrders[0].sales_type
  );
  client.setSelectedClient(
    setZeroes(selectedClient.id) +
      " " +
      selectedClient.name +
      " " +
      selectedClient.city.city +
      " " +
      selectedClient.clients_phone.phone +
      " " +
      (selectedClient.clients_phone.phone2
        ? selectedClient.clients_phone.phone2 + " "
        : "") +
      (selectedClient.clients_phone.phone3
        ? selectedClient.clients_phone.phone3
        : "")
  );
  client.setSelectedCategory(selectedCategory);
  client.setSelectedDelivery(bufOrders[0].expeditorId);
  client.setDate(
    dayjs(order_date.split("T")[0], "YYYY-MM-DD").format("DD/MM/YYYY")
  );
  selectedCategory.id === 2
    ? orders.setSaleType("Bonus")
    : orders.setSaleType("Discount");
  orders.setPercent(bufOrders[0].add_bonus);
  orders.setKeyDown(true);
}

export function setPerfume(orders, bufOrders) {
  if (bufOrders.length !== 0) {
    const newPerfRows = bufOrders.map((bufOrder) => {
      return {
        id: bufOrder.id,
        invTypeId: bufOrder.inv_master.id,
        name: bufOrder.inv_master.name.name,
        volume: bufOrder.qty,
        price: bufOrder.price,
        total: bufOrder.total,
      };
    });
    orders.setSelectedPerf(newPerfRows);
    orders.setSubTotal(calcSubTotal(newPerfRows));
  }
}

export function setCons(orders, bufOrders) {
  if (bufOrders.length !== 0) {
    const newConsRows = bufOrders.map((bufOrder) => {
      return {
        id: bufOrder.disposable.id,
        name: bufOrder.disposable.ingredient.name_product,
        volume: bufOrder.qty,
        price: bufOrder.price,
        total: bufOrder.total,
      };
    });

    orders.setSelectedCons(newConsRows);
    orders.setSecSubTotal(calcSubTotal(newConsRows));
  }
}

export function setPayments(orders, bufOrders) {
  if (bufOrders.length !== 0) {
    const newPaymentRows = bufOrders.map((bufOrder) => {
      const order_date = bufOrder.updatedAt;
      return {
        score: bufOrder.paymentTypeId,
        sum: bufOrder.sum,
        date: dayjs(order_date.split("T")[0], "YYYY-MM-DD").format(
          "DD/MM/YYYY"
        ),
        photoCheck: bufOrder.link,
      };
    });
    orders.setPaymentRows(newPaymentRows);
  }
}

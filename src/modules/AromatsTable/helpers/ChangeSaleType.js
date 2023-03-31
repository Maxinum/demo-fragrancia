import { toJS } from "mobx";
import { removeDots } from "../../../helpers/Dotter";
import { calcTotal } from "./Calculation";

export function ChangePrice(newRows, products, orders, category) {
  for (let i = 0; i < newRows.length; i++) {
    const selectedRow = products.filter(item => item?.name === newRows[i].name);
    if (selectedRow.length > 0 && selectedRow[0].inv_price_tg) {
      let price = selectedRow[0]['inv_price_tg'];
      newRows[i].price = price[category];
      orders.setSubTotal(calcTotal(i, newRows));
      orders.setSelectedPerf(newRows);
    }
  }
}

export function ChangeCategory(selectedName, volume, selectedPrice, products, category) {
  const price = products.perfumes.filter(item => item?.name === selectedName);
  if (category === 'price_ml') {
    if (volume > 999) {
      selectedPrice = price[0].inv_price_tg.price_1000;
    } else if (volume > 499) {
      selectedPrice = price[0].inv_price_tg.price_500;
    } else if (volume > 249) {
      selectedPrice = price[0].inv_price_tg.price_250;
    } else {
      console.log(price)
      selectedPrice = price[0]['inv_price_tg'][category];
    }
  }
  return selectedPrice;
}

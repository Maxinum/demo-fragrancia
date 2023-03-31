import { calcTotal } from "../../AromatsTable/helpers/Calculation";

export function ChangeConsPrice(newRows, products, orders, category) {
    for(let i = 0; i < newRows.length; i++) {
      const selectedRow = products.filter(item => item?.ingredient?.name_product === newRows[i].name);
      if (selectedRow.length > 0 && selectedRow[0].disposable_price) {
        let price = selectedRow[0]['disposable_price'];
        newRows[i].price = category === 1 ? price['retail'] : price['price'];
        orders.setSubTotal(calcTotal(i, newRows));
        orders.setSelectedCons(newRows);
      }
    }
}
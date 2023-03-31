import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { removeDots } from "../../../helpers/Dotter";
import { removeZeros } from "../../../helpers/Validation";
import { calcTotal } from "./Calculation";
import { ChangeCategory, ChangePrice } from "./ChangeSaleType";

export function calcDiscount(
  newRows,
  salyType,
  percent,
  orders,
  products,
  category
) {
  let discountedPrice;
  let total;
  ChangePrice(newRows, products, orders, category);
  newRows.forEach((row, index) => {
    if (salyType === "Discount") {
      if (row.name !== "") {
        if (orders.percent !== "") {
          discountedPrice = removeZeros(
            row.price - (row.price / 100) * percent
          );
          row.price = discountedPrice;
          total = calcTotal(index, newRows);
        }
      }
    }
  });
  orders.setSubTotal(total);
  orders.setSelectedPerf(newRows);

  return discountedPrice;
}

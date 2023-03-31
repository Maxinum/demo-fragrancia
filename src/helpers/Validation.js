// import { useState, memo } from "react";
// import AlertComponent from "./Alert";

import AlertComponent from "../components/Alert";
  /**
 * Function to delete commas between digits
 * @param {number} number
 * @return {number}
 */
  export function onlyDigits(number) {
    return (String(number)).replace(/\D/g, '');
  }


  export function minusWithDigits(str) {
    const newValue = str.replace(/^0+/g, '');
    const number = newValue.replace(/\D/g, '');
    const current = str.match(/-/g) != null ? '-' + number : number;
    return current;
  }

    /**
 * Method to kill the excess
 * @param {string} price
 * @return {number}
 */
  export function removeZeros(price) {
    const result = parseFloat(parseFloat(price).toFixed(2));
    return result;
  }
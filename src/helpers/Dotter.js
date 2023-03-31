/**
 * Function to set commas every 3 characters
 * @param {string} str 
 * @returns {string}
 */
export function addDots(value) {
  const val = (String(value)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return val;
}

/**
 * Function to remove commas from a string
 * @param {number} value 
 * @returns {number}
 */
export function removeDots(value) {
  // return value.toString().replace(/\,/g, '');
  const val = (String(value)).replace(/[^0-9-]/g, '');
  const num = Number(val);
  return num;
}
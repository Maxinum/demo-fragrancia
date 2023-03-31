/**
 * Function to set commas every 3 characters
 * @param {string} str 
 * @returns {string}
 */
export function addDots(value) {
  const str = value.toString().replace(/\,/g, '');
  return str.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

/**
 * Function to remove commas from a string
 * @param {string} value 
 * @returns {string}
 */
export function removeDots(value) {
  return value.toString().replace(/\,/g, '');
}

export function discount(price, discount, volume, newSubTotal) {
    const value = (price - (price * (discount / 100))).toFixed(0);
    newSubTotal = value * volume;
    return value;
}
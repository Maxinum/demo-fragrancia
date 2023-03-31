const setZeroes = (x) => {
    const numZeros = 4 - String(x).length;
    return String(x).padStart(String(x).length + numZeros, "0");
}
export default setZeroes;
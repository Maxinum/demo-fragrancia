import round from './RoundNumbers';
import { removeDots } from '../../../helpers/Dotter';

export const calcTotal = (index, rows) => {
    rows[index].total = (removeDots(rows[index].volume) * rows[index].price).toFixed(0);
    return calcSubTotal(rows);
}

export const calcSubTotal = (rows) => {
    return round(Array.from(rows, (x) => x.total).reduce((a, b) => Number(a) + Number(b)));
}

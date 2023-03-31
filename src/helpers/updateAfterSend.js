import { fetchBuffList } from "../modules/Buffer/api";
import { fetchLastDays } from "../modules/ClientBlcok/api";
import { clearFarmerRows } from "./clearRows";

export async function updateFarmer (client, orders) {
    clearFarmerRows(client, orders);
    const updatedData = await fetchBuffList();
    const updateSales = await fetchLastDays();
    const updatePayments = await fetchLastDays();
    orders.setBufOrders(updatedData);
    client.setlastDaysSales(updateSales.sales)
    client.setlastDaysPayments(updatePayments.payments);
}
export function clearFarmerRows(client, orders) {
  client.setSelectedClient("");
  const selectedCategory = client.categories.find((item) => item?.id === 3);
  client.setSelectedCategory(selectedCategory);
  client.setSelectedDelivery("");
  orders.setSelectedPerf([
    {
      id: "",
      invTypeId: "",
      count: "",
      name: "",
      volume: "",
      price: "",
      total: 0,
    },
  ]);
  orders.setSelectedCons([
    { id: "", count: "", name: "", volume: "", price: "", total: 0 },
  ]);
  orders.setPaymentRows([{ score: "", sum: "", date: "", photoCheck: "" }]);
  orders.setSubTotal(0);
  orders.setSecSubTotal(0);
  orders.setSecSubTotal(0);
  orders.setPercent(0);
  orders.clearAllSelectedFiles();
  orders.setSaleType("Discount");
  orders.setSpentBonus(0);
}

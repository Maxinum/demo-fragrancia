import { columns } from "../helpers/Columns";
import React from "react";
import MuiTable from "../../../../MuiTable";

const IngredientTable = () => {
  const data = [
    {
      dollar: 20,
      euro: 0,
      id: 901,
      novelty: "1",
      product: "306-200 мл Графин черный стекло",
      status: "0",
      supl_name: "19",
      supplier: "306-200 мл Графин черный стекло",
      total: 19,
    },
  ];

  const headers = [
    {
      id: "dollar",
      numeric: true,
      disablePadding: true,
      label: "Доллар",
    },
    {
      id: "euro",
      numeric: true,
      disablePadding: false,
      label: "Евро",
    },
    {
      id: "id",
      numeric: true,
      disablePadding: true,
      label: "Id",
    },
    {
      id: "novelty",
      numeric: false,
      disablePadding: false,
      label: "Новинка",
    },
    {
      id: "product",
      numeric: false,
      disablePadding: true,
      label: "Наименование",
    },
    {
      id: "status",
      numeric: false,
      disablePadding: false,
      label: "Archive",
    },
    {
      id: "supl_name",
      numeric: false,
      disablePadding: true,
      label: "Наименование поставщика",
    },
    {
      id: "supplier",
      numeric: false,
      disablePadding: false,
      label: "Поставщик",
    },
    {
      id: "total",
      numeric: true,
      disablePadding: true,
      label: "Тотал",
    },
  ];

  return <MuiTable data={data} headers={headers} name="Обьединение" />;
};

export default IngredientTable;

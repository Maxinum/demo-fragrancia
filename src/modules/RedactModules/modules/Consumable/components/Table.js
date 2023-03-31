import { columns } from "../helpers/Columns";
import MuiTable from "../../../../MuiTable";
import React from "react";

const DisposableTable = () => {
  const data = [
    {
      articul: "115-35",
      category: "6",
      id: 128,
      img: "/price_lists/icons/128.jpeg",
      name: "ml ролик стекло",
      price: 4,
      retail: 5,
      status: "0",
    },
  ];

  const headers = [
    {
      id: "articul",
      numeric: false,
      disablePadding: true,
      label: "Article number",
    },
    {
      id: "category",
      numeric: false,
      disablePadding: false,
      label: "Категория",
    },
    {
      id: "id",
      numeric: true,
      disablePadding: true,
      label: "Id",
    },
    {
      id: "img",
      numeric: false,
      disablePadding: false,
      label: "Картинка",
    },
    {
      id: "name",
      numeric: false,
      disablePadding: true,
      label: "Наименование",
    },
    {
      id: "price",
      numeric: true,
      disablePadding: false,
      label: "Цена",
    },
    {
      id: "retail",
      numeric: true,
      disablePadding: true,
      label: "Retail",
    },
    {
      id: "status",
      numeric: false,
      disablePadding: false,
      label: "Archive",
    },
  ];

  return <MuiTable data={data} headers={headers} name="Флаконы" />;
};

export default DisposableTable;

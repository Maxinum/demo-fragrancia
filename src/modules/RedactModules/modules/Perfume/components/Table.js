import React from "react";
import EditableTable from "../../../../EditableTable";

const PerfumeTable = () => {
  const data = [
    {
      articul: "M-076",
      group: "духи",
      id: 1143,
      name: "Abdul Samad Al Qurashi Al Hajjar Al Aswad (масло)",
      price_250: "0.272",
      price_500: "0.24",
      price_1000: "0.208",
      price_ml: "0.33",
      retail: "500",
      share: "50",
      share_2: "50",
      spec: "0.062",
      status: "0",
    },
    {
      articul: "M-076",
      group: "духи",
      id: 1142,
      name: "Abdul Samad Al Qurashi Al Hajjar Al Aswad (масло)",
      price_250: "0.272",
      price_500: "0.24",
      price_1000: "0.208",
      price_ml: "0.33",
      retail: "500",
      share: "50",
      share_2: "50",
      spec: "0.062",
      status: "0",
    },
  ];

  const headers = [
    {
      id: "articul",
      numeric: false,
      disablePadding: false,
      label: "Article number",
      select: true,
    },
    {
      id: "group",
      numeric: false,
      disablePadding: false,
      label: "Group",
      select: true,
    },
    {
      id: "id",
      numeric: true,
      disablePadding: false,
      label: "Id",
      select: false,
    },
    {
      id: "name",
      numeric: false,
      disablePadding: false,
      label: "Name",
      select: false,
    },
    {
      id: "price_250",
      numeric: false,
      disablePadding: true,
      label: "250 ml",
      select: false,
    },
    {
      id: "price_500",
      numeric: false,
      disablePadding: false,
      label: "500 ml",
      select: false,
    },
    {
      id: "price_1000",
      numeric: false,
      disablePadding: true,
      label: "1000 ml",
      select: false,
    },
    {
      id: "price_ml",
      numeric: false,
      disablePadding: false,
      label: "ml",
      select: false,
    },
    {
      id: "retail",
      numeric: false,
      disablePadding: true,
      label: "Retail",
      select: false,
    },
    {
      id: "share",
      numeric: false,
      disablePadding: false,
      label: "Fraction",
      select: false,
    },
    {
      id: "share_2",
      numeric: false,
      disablePadding: true,
      label: "Fraction 2",
      select: false,
    },
    {
      id: "spec",
      numeric: false,
      disablePadding: false,
      label: "Special price",
      select: false,
    },
    {
      id: "status",
      numeric: false,
      disablePadding: true,
      label: "Archive",
      select: true,
    },
  ];

  return <EditableTable data={data} name="Парфюмы" headers={headers} />;
};

export default PerfumeTable;

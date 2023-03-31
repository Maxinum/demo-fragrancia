import React from "react";
import MuiTable from "../../MuiTable";

const UserTable = (props) => {
  const columns = [
    { title: "№", field: "id", width: 100, headerFilter: "input" },
    { title: "Почта", field: "email", hozAlign: "left", headerFilter: "input" },
    { title: "Name", field: "name", hozAlign: "left", headerFilter: "input" },
    { title: "Роль", field: "role", hozAlign: "left", headerFilter: "input" },
    {
      title: "Пароль",
      field: "password",
      hozAlign: "left",
      headerFilter: "input",
    },
  ];

  const data = props.data;

  return <MuiTable data={data} columns={columns} />;
};

export default UserTable;

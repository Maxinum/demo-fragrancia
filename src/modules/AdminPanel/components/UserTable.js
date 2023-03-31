import React from 'react';
import 'react-tabulator/css/tabulator_semanticui.css';
import { ReactTabulator } from 'react-tabulator';

const UserTable = (props) => {
    const columns = [
        { title: "№", field: "id", width: 100 ,headerFilter: 'input'},
        { title: "Почта", field: "email", hozAlign: "left",headerFilter: 'input'},
        { title: "Имя", field: "name" ,hozAlign: "left",headerFilter: 'input'},
        { title: "Роль", field: "role", hozAlign: "left",headerFilter: 'input' },
        { title: "Пароль", field: "password", hozAlign: "left",headerFilter: 'input'},
    ];
    
    const data = props.data;

    return (
        <ReactTabulator
            data={data}
            columns={columns}
        />
    )
};

export default UserTable;
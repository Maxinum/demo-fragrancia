import React from 'react';
import Table from '../../../../components/TabulatorTable';
import Filter from './components/Filter'

const RemainModule = () => {
    const data = [];
    const column = [
        { title: "Наименование", field: "name", width: '40%' },
        { title: "К-во", field: "count", sorter: "number", width: '20%' },
        { title: "В пути", field: "way", sorter: "number", width: '20%' },
        { title: "Заказать", field: "order", sorter: "number", width: '20%' },
    ]

    return (
        <div style={{ width: '100%',padding:'2rem',boxSizing:'border-box' }}>
            <Filter />
            <Table data={data} columns={column} />
        </div>
    );
}

export default RemainModule;

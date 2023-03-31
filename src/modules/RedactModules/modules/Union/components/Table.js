import 'react-tabulator/css/tabulator_semanticui.css';
import { ReactTabulator } from 'react-tabulator';
import { columns } from '../helpers/Columns';
import React from 'react';

const IngredientTable = () => {

    const data = [];

    return (
        <ReactTabulator
            data={data}
            columns={columns}
        />
    )
}

export default IngredientTable;
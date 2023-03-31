import React from 'react';
import IngredientTable from './components/Table'
import Modal from './components/Modal';

const Union = (props) => {
    return (
        <div>
            <Modal open={props.open} onClose={props.close}/>
            <IngredientTable />
        </div>
    );
}

export default Union;

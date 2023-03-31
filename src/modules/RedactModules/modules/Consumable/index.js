import React from 'react';
import DisposableTable from './components/Table';
import Modal from './components/Modal'

const Consumable = (props) => {
    return (
        <div>
            <Modal open={props.open} onClose={props.close} />
            <DisposableTable />
        </div>
    );
}

export default Consumable;

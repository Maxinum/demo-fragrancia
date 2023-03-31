import React from 'react';
import PerfumeTable from './components/Table';
import Modal from './components/Modal'
const Perfume = (props) => {
    return (
        <div>
            <Modal open={props.open} onClose={props.close}/>
            <PerfumeTable />
        </div>
    );
}

export default Perfume;

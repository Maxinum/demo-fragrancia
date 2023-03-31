import React from 'react';
import PerfumeTable from './components/Table';
import Modal from './components/Modal'
const Perfume = (props) => {
    return (
        <div style={{marginBottom:"2rem"}}>
            <Modal open={props.open} onClose={props.close}/>
            <PerfumeTable />
        </div>
    );
}

export default Perfume;

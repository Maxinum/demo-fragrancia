import React from 'react';
import styles from '../style.module.css'
import BufferListToday from './BufferList';

const BufferHeads = (props) => {
    return (
        <div className={styles.div_bufopt_header}>
            {props.label}
        </div>
    );
};


export default BufferHeads;
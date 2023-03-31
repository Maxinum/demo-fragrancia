import React from 'react';
import styles from './style.module.css'

const Buffer = () => {
    return (
        <div className={styles.module}>
            <div className={styles.buffer_label}>Буфер</div>
            <div id="buffer"></div>
        </div>
    );
}

export default Buffer;
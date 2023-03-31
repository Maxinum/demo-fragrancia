import React from 'react';
import СlientHistory from './components/СlientHistory';
import СlientInfo from './components/СlientInfo';
import PayBlock from './components/PayBlock';
import './style.css'

const FarmerDetails = () => {
    return (
        <div className='left'>
            <СlientInfo />
            <СlientHistory />
            <PayBlock />
        </div>
    );
}

export default FarmerDetails;
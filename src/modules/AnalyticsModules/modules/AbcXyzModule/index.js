import React from 'react';
import LineChart from './components/LineChart';
import SkeletonLayout from './components/Skeleton';

const AbcXyzModule = () => {
    const fetch = false;

    return (
        fetch ? (
        <div>
            <LineChart />
        </div>
        ):(
            <SkeletonLayout />
        )
    );
}

export default AbcXyzModule;

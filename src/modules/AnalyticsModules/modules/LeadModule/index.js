import React from 'react';
import SkeletonLayout from './components/Skeleton';

const LeadModule = () => {
    const fetch = false;
    return (
        fetch ? (
            <div>
                LeadModule
            </div >
        ) : (
            <SkeletonLayout />
        )
    );
}

export default LeadModule;

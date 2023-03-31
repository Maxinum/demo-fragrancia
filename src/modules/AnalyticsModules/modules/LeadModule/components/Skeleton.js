import React from 'react';
import { Skeleton } from '@mui/material';

const SkeletonLayout = () => {
    return (
        <div style={{
            display: 'flex',
            padding: '2.5rem',
            flexDirection: 'column',
            gap: '2rem',
            width: '100%',
            height: '100%',
            boxSizing: 'border-box',
        }}>
            <Skeleton sx={{ borderRadius: '1rem' }} width={'100%'} height={'15%'} variant="rectangular" />
            <div style={{ width: '100%', height: '42.5%', display: 'flex', justifyContent: 'space-between' }}>
                <Skeleton sx={{ borderRadius: '1rem' }} width={'47.5%'} height={'100%'} variant="rectangular" />
                <Skeleton sx={{ borderRadius: '1rem' }} width={'47.5%'} height={'100%'} variant="rectangular" />
            </div>
            <div style={{ width: '100%', height: '42.5%', display: 'flex', justifyContent: 'space-between' }}>
                <Skeleton sx={{ borderRadius: '1rem' }} width={'47.5%'} height={'100%'} variant="rectangular" />
                <Skeleton sx={{ borderRadius: '1rem' }} width={'47.5%'} height={'100%'} variant="rectangular" />
            </div>
        </div>
    );
}

export default SkeletonLayout;

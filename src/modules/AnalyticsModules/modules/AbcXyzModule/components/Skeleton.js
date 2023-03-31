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
            height: 'fit-content',
            boxSizing: 'border-box',
        }}>
            <div style={{width:'100%', height:'20vh', display:'flex', justifyContent:'space-between'}}>
                <Skeleton sx={{ borderRadius: '1rem' }} width={'47.5%'} height={'100%'} variant="rectangular" />
                <Skeleton sx={{ borderRadius: '1rem' }} width={'47.5%'} height={'100%'} variant="rectangular" />
            </div>
            <Skeleton sx={{ borderRadius: '1rem' }} width={'100%'} height={'40vh'} variant="rectangular" />
            <div style={{width:'100%', height:'40vh', display:'flex', justifyContent:'space-between'}}>
                <Skeleton sx={{ borderRadius: '1rem' }} width={'47.5%'} height={'100%'} variant="rectangular" />
                <Skeleton sx={{ borderRadius: '1rem' }} width={'47.5%'} height={'100%'} variant="rectangular" />
            </div>
            <Skeleton sx={{ borderRadius: '1rem' }} width={'100%'} height={'40vh'} variant="rectangular" />
        </div>
    );
}

export default SkeletonLayout;

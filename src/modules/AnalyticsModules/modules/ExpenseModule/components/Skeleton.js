import React from 'react';
import { Skeleton } from '@mui/material';

const SkeletonLayout = () => {
    const componentsArray = new Array(6).fill(null);
    const blocksArray = new Array(2).fill(null)
    return (
        <div style={{
            display: 'flex',
            padding: '1.5rem',
            gap: '1.5rem',
            width: '100%',
            height: '100%',
            boxSizing: 'border-box',
            flexDirection: 'column',
        }}>
            <Skeleton variant='rectangular' sx={{
                width: '32%', borderRadius: '0.5rem', height: '5%', marginRight: 0,
                marginLeft: 'auto'
            }} />
            <div style={{ display: 'flex', flexDirection: 'row', height: '15%', width: '100%', justifyContent: 'space-between' }}>
                {componentsArray.map((_, index) => (
                    <Skeleton sx={{ borderRadius: '1rem' }} key={index} width={'15%'} height={'100%'} variant="rectangular" />
                ))}
            </div>
            {blocksArray.map((_, index) => (
                <div key={index} style={{ display: 'flex', height: '40%', justifyContent: 'space-between' }}>
                    {blocksArray.map((_, index) => (
                        <Skeleton key={index} width={'49%'} height={'100%'} sx={{ borderRadius: '1rem' }} variant="rectangular" />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default SkeletonLayout;

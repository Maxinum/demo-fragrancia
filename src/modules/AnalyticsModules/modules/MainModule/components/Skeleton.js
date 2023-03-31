import React from 'react';
import { Skeleton } from '@mui/material';

const SkeletonLayout = () => {
    return (
        <div style={{
            display: 'flex',
            padding: '1.5rem',
            gap: '3rem',
            width: '100%',
            height: '100%',
            boxSizing: 'border-box',
        }}>
            <div style={{
                width: '60%', display: 'flex', flexDirection: 'column',
                justifyContent: 'space-between', height: '100%'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' , height:'20%'}}>
                    <Skeleton sx={{ borderRadius: '1rem' }} width={'30%'} height={'100%'}  variant="rectangular" />
                    <Skeleton sx={{ borderRadius: '1rem' }} width={'30%'} height={'100%'} variant="rectangular" />
                    <Skeleton sx={{ borderRadius: '1rem' }} width={'30%'} height={'100%'} variant="rectangular" />
                </div>
                <Skeleton height={'30%'} variant="rectangular" sx={{ borderRadius: '10px' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between',height:'40%' }}>
                    <Skeleton width={'60%'} sx={{ borderRadius: '1rem' }} height={'100%'} variant="rectangular" />
                    <Skeleton width={'35%'} sx={{ borderRadius: '1rem' }} height={'100%'} variant="rectangular" />
                </div>
            </div>
            <div style={{ width: '40%', display:'flex', flexDirection: 'column', height: '100%',justifyContent: 'space-between'}}>
                <Skeleton variant="rectangular" height={'20%'} sx={{ borderRadius: '1rem' }} />
                <div style={{
                    display: 'flex',
                    gap: '2rem',
                    boxSizing: 'border-box',
                    height: '20%'
                }}>
                    <Skeleton variant="rectangular" height={'100%'} width={'50%'} sx={{ borderRadius: '1rem' }}/>
                    <Skeleton variant="rectangular" width={'50%'} height={'100%'} sx={{ borderRadius: '1rem' }} />
                </div>
                <Skeleton variant="rectangular" height={'25%'} sx={{ borderRadius: '1rem' }}/>
                <Skeleton variant="rectangular" height={'25%'} sx={{ borderRadius: '1rem' }}/>
            </div>
        </div>
    );
}

export default SkeletonLayout;

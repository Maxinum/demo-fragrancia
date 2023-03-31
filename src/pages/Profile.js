import React from 'react';
import Skeleton from '@mui/material/Skeleton';

const Profile = () => {
    const item = false;
    return (
        item ? (

            <div style={{ width: '80vw', height: '75vh', marginLeft: 'auto', marginRight: 'auto', marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }} >
                <div style={{ background: '#fff', width: '100%', height: '35%', borderRadius: '10px' }}>

                </div>
                <div style={{ display: 'flex', height: '60%', width: '100%', gap: '3rem' }}>
                    <div style={{ background: '#fff', width: '25%', borderRadius: '10px' }}>

                    </div>
                    <div style={{ background: '#fff', width: '75%', borderRadius: '10px' }}>

                    </div>
                </div>
            </div >
        ) : (
            <div style={{ width: '80vw', height: '75vh', marginLeft: 'auto', marginRight: 'auto', marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }} >
                <Skeleton width={'100%'} height={'35%'} sx={{borderRadius: '10px' }} animation="wave" variant="rectangular" />
                <div style={{ display: 'flex', height: '60%', width: '100%', gap: '3rem' }}>
                    <Skeleton width={'25%'} height={'100%'}  sx={{borderRadius: '10px' }} animation="wave" variant="rectangular" />
                    <Skeleton sx={{ width: '75%',height:'100%', borderRadius: '10px' }} animation="wave" variant="rectangular" />
                </div>
            </div >
        )


    );
}

export default Profile;

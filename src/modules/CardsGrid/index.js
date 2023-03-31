import React, {useContext} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { adminRoutes, managerRoutes } from '../../helpers/PagesInfo';
import Card from './components/Card'
import { Context } from '../../index';

const CardsGrid = () => {
    const { user } = useContext(Context);
    return (
        <Box sx={{ flexGrow: 1, marginLeft: 'auto', marginRight: 'auto', marginTop: '2rem' }}>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                gap={'3rem'}
                paddingLeft={'5rem'}
            >
                {managerRoutes.map(({ name, text, path, img, href }) => (
                    <Card key={name} name={name} text={text} path={path} img={img} href={href} />
                ))}
                {/* {user.user.role === 'admin' && adminRoutes.map(({ name, text, path, img, href }) => ( */}
                {adminRoutes.map(({ name, text, path, img, href }) => (
                    <Card key={name} name={name} text={text} path={path} img={img} href={href} />
                ))}
            </Grid>
        </Box>
    );
};

export default CardsGrid;
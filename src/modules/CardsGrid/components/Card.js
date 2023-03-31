import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import logos from '../helpers/ImgConsts';
import Skeleton from '@mui/material/Skeleton';
import { observer } from 'mobx-react-lite';
import isMobile from '../../../helpers/DetectMobile';
const CardBlock = observer((props) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsLoaded(true);
    }
    
    const width = isMobile()?'45vw':'20vw';
    const height = isMobile()?'40vh':'40vh';
    return (
        <div>
            {!isLoaded && <Skeleton sx={{ borderRadius: '10px' }} width={width} height={height} variant="rectangular" animation="wave" />}
            <Card sx={{ width: {width}, height: {height}, display: isLoaded ? "block" : "none" }}>
                <CardActionArea component={Link} to={props.path}>
                    <CardMedia
                        component="img"
                        alt={props.name}
                        height="140"
                        image={logos[props.name]}
                        onLoad={handleImageLoad}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.text}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button target={'_blank'} href={props.href} size="small">To learn more</Button>
                </CardActions>
            </Card>
        </div>
    );
});

export default CardBlock;
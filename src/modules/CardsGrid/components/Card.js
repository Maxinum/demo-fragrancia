import React, { useState } from 'react';
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

const CardBlock = observer((props) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsLoaded(true);
    }

    return (
        <div>
            {!isLoaded && <Skeleton sx={{ borderRadius: '10px' }} width={305} height={300} variant="rectangular" animation="wave" />}
            <Card sx={{ width: 305, height:300, display: isLoaded ? "block" : "none"}}>
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
                    <Button target={'_blank'} href={props.href} size="small">Узнать больше</Button>
                </CardActions>
            </Card>
        </div>
    );
});

export default CardBlock;
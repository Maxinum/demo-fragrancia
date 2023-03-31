import React from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const Card = (props) =>{
    <div style={{background:'#fff', width:'100px', height:'100px'}}>
        <span>{props.title}</span>
        <div>
            <span>{props.total}</span>
             {props.res===true?<TrendingUpIcon />:<TrendingDownIcon />}
        </div>
    </div>
}

export default  Card;
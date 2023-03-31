import React, { useState, useContext } from 'react';
import TextField from '@mui/material/TextField';
import { Autocomplete } from '@mui/material';
import { observer } from "mobx-react-lite";
import { Context } from "../../../index";
import setZeroes from '../helpers/setZeros';

const AutocompleteBlock = observer((props) => {

    const { client, products } = useContext(Context);
    let data;
    if(props.label === 'Клиент'){
       data = props.data.map((x) => setZeroes(x.id) + ' ' + x.name + ' ' + x.city.city + ' ' + x.phone);
    }else{
        data = props.data.map((x)=>x.city)
    }
    const date = props.date;
    const ref = React.createRef();
    const [href, sethref] = useState('');
    return (
        <Autocomplete
            sx={{ width: '90%' }}
            freeSolo
            size='small'
            options={data}
            renderInput={(params) => (
                <TextField
                    variant='standard'
                    {...params}
                    label={props.label}
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password',
                    }}
                />
            )}
            name='name'
            type='text'
            autoSelect={true}
            // value={''}
            onChange={(event, newValue) => {
                if (newValue !== null) {
                    // const id = Number(newValue.split(' ')[0]);
                    // const phone = newValue.split(' ')[newValue.split(' ').length - 1]
                    // sethref(`https://wa.me/${phone}`);
                    // client.setSelectedCategory(props.clients.filter(item => item.id === id)[0].sales_type.id);
                }
            }}
        />

    );
});

export default AutocompleteBlock;

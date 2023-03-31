import React, { useState, useEffect, useContext } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { observer } from 'mobx-react-lite'
import { Context } from "../../../index";

const SalesCategory = observer((props) => {
    const categories = props.categories;
    const { client } = useContext(Context);
    const [category, setCategory] = useState(client.selectedCategory);

    useEffect(() => {
        setCategory(client.selectedCategory)
    }, [client.selectedCategory]);

    return (

            <Select
                sx={{ minWidth: '100%' }}
                value={category}
                size='small'
                variant='standard'
                onChange={(event, newValue) => {
                    setCategory(event.target.value)
                    client.setSelectedCategory(event.target.value);
                }}
            >
                {/* {categories.map((row, index) => (
                    <MenuItem key={index} value={row.id}>{row.category || row.name}</MenuItem>
                ))} */}
                <MenuItem value="price_retail">Retail</MenuItem>
                <MenuItem value="price_per_ml">With a bonus</MenuItem>
                <MenuItem value="price_per_ml">No bonus</MenuItem>
                <MenuItem value="price_250">250 ml</MenuItem>
                <MenuItem value="price_500">500 ml</MenuItem>
                <MenuItem value="price_1000">1000 ml</MenuItem>
                <MenuItem value="price_special">Special price</MenuItem>
                {/* <MenuItem value="sample">Жеский тест</MenuItem> */}
            </Select>
    );
});

export default SalesCategory;

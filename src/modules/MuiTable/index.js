import React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Header from './components/Header';
import { stableSort } from './helpers/Sort';
import { getComparator } from './helpers/Sort';
import TextField from '@mui/material/TextField';

const MuiTable = ({ headers, data }) => {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('name');

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer sx={{ overflow: 'auto', height: '400px' }}>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={'medium'}
                    >
                        <Header
                            data={headers}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                        />
                        <TableBody>
                            {stableSort(data, getComparator(order, orderBy))
                                .map((row, index) => {
                                    return <TableRow key={index}>
                                                {Object.keys(row).map((cell, i) => (
                                                    <TableCell key={`${index}-${i}`}>
                                                        {row[cell]}
                                                    </TableCell>
                                                ))}
                                            </TableRow>
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}

export default MuiTable;
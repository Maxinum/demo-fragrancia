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
import CustomInput from './components/CustomInput'
import CustomSelect from './components/CustomSelect'

const EditableTable = ({ headers, data }) => {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('name');

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    return (
        <Box sx={{ width: '100%', marginTop: '2rem' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer sx={{ overflow: 'auto', height: '400px' }}>
                    <Table
                        sx={{ minWidth: 750 }}
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
                                        {Object.keys(row).map((cell, i) => {
                                            const header = headers.find(header => header.id === cell);
                                            if (header && header.select) {
                                                return (
                                                    <TableCell key={`${index}-${i}`}>
                                                        <CustomSelect value={row[cell]} />
                                                    </TableCell>
                                                );
                                            } else {
                                                return (
                                                    <TableCell key={`${index}-${i}`} width={(String(row[cell]).length)}>
                                                        <CustomInput value={row[cell]} />
                                                    </TableCell>
                                                );
                                            }
                                        })}
                                    </TableRow>
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}

export default EditableTable;        
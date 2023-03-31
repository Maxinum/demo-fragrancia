import React, { useEffect, useContext, useState } from 'react';
import { observer } from "mobx-react-lite";
import UserTable from './components/UserTable'
import { fetchUsers } from './api';
import { Context } from "../../index";
import AddUserModal from './components/AddUserModal';
import Button from '@mui/material/Button';

const AdminPanel = observer(() => {
    const { user } = useContext(Context);
    useEffect(() => {
        fetchUsers().then(data => user.setAllUsers(data))
    }, []);

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div style={{ width: '70%', marginTop: '1rem', marginRight: 'auto', marginLeft: 'auto' }}>
            <Button onClick={handleOpen} variant="contained">Добавить</Button>
            <UserTable data={user.users} />
            <AddUserModal
                onClose={handleClose}
                open={open}
            />
        </div>
    );
});

export default AdminPanel;
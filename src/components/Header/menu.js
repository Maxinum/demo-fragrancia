import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListSubheader from '@mui/material/ListSubheader';
import { adminRoutes, managerRoutes } from '../../helpers/PagesInfo';
import { Context } from '../../index';
export default function MenuList() {
    const { user } = useContext(Context);
    return (
        <List
            style={{ width: 250 }}
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Менюшка
                </ListSubheader>
            }>
            {managerRoutes.map(({ path, name, Icon }) =>
                <ListItemButton key={path} component={Link} to={path}>
                    <ListItemIcon>
                        <Icon />
                    </ListItemIcon>
                    <ListItemText primary={name} />
                </ListItemButton>
            )}
            {/* {user.user.role === 'admin' && adminRoutes.map(({ path, name, Icon }) => */}
            {adminRoutes.map(({ path, name, Icon }) =>
                <ListItemButton key={path} component={Link} to={path}>
                    <ListItemIcon>
                        <Icon />
                    </ListItemIcon>
                    <ListItemText primary={name} />
                </ListItemButton>
            )}
        </List>
    );
}
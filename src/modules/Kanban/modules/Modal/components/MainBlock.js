import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import changeInfo from "../../../helpers/changeInfo";
import { Context } from "../../../../../index";

const MainBlock = (props) => {
    const { kanban } = React.useContext(Context);
    const href = `https://wa.me/${props.phone}`;
    const [comm, setComm] = React.useState(props.comm || '');
    
    const HandleBlur = (e) => {
        changeInfo('comment', e.target.value, props.id, kanban.hunterData)
    }

    return (
        <Box sx={{ height: '40%', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Typography variant="h4" component="h2">
                {props.name}
            </Typography>
            <div>{props.date}</div>
            <a target="_blank" style={{ color: '#000', width: 'fit-content' }} href={href} rel="noreferrer">{props.phone}</a>
            <TextField
                value={comm}
                sx={{ width: '100%' }}
                placeholder="Комментарий..."
                onBlur={HandleBlur}
                onChange={(e) => setComm(e.target.value)}
                multiline
                rows={2}
                InputProps={{ inputProps: { maxLength: 80 } }}
                helperText={`${comm.length}/${80}`}
                error={comm.length > 80}
            />
        </Box>
    )
}

export default MainBlock;
import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Context } from '../../../../index';
import Settings from '../../components/Settings';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MainBlock from './components/MainBlock';
import TabPanel from './components/Tabpanel';
import History from './components/History';
import InfoBlock from './components/InfoBlock';
import Task from './components/Task'
import FlagIcon from '@mui/icons-material/Flag';
import changeInfo from '../../helpers/changeInfo';
import { observer } from 'mobx-react-lite';
import style from './style.module.css';
import getDataById from '../../helpers/getDataById';

const AddModal = observer(({ open, onClose, id }) => {
    const { kanban } = useContext(Context);
    const data = kanban.hunterData;
    const info = getDataById(data, id);
    const [flag, setFlag] = useState(info.favorite);

    React.useEffect(() => {
        setFlag(info.favorite);
    }, [info.favorite])

    const [isOpen, setOpen] = useState(false);
    const anchorRef = React.useRef(null);

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    const handlesetFlag = (event) => {
        setFlag(!flag);
        changeInfo('favorite', !flag, info.id, kanban.hunterData);
        handleClose(event);
    }

    const handleToggle = (event) => {
        event.stopPropagation();
        setOpen((prevOpen) => !prevOpen);
    };

    const [value, setValue] = React.useState(0);

    const tabChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <Box className={style.modal}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', height: '100%' }}>
                    <Box sx={{ width: '45%', height: '100%', position: 'relative', boxSizing: 'border-box' }}>
                        <FlagIcon sx={{
                            position: 'absolute',
                            right: 0,
                            color: 'orange',
                            top: '1rem',
                            height: '1.5em',
                            width: '1.5em',
                            display: flag === true ? 'block' : 'none'
                        }} />
                        <MainBlock id={info.id} phone={info.phone} name={info.name} comm={info.comment} date={info.date} />
                        <Box sx={{ border: '1px solid #e6e6e6', borderRadius: '5px', height: '60%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={tabChange} aria-label="basic tabs example">
                                    <Tab label="Задача" />
                                    <Tab label="История" />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0} sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <Task id={info.id} />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <History />
                            </TabPanel>
                        </Box>
                    </Box>
                    <InfoBlock info={info} />
                </Box>
                <Settings
                    setclass={'staticsetting'}
                    anchorRef={anchorRef}
                    open={isOpen}
                    flag={flag}
                    toggle={handleToggle}
                    click={handleListKeyDown}
                    close={handleClose}
                    setFlag={handlesetFlag}
                />
            </Box>
        </Modal>
    );
});

export default AddModal;
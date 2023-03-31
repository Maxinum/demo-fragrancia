import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../../..';
import styles from '../style.module.css'
import DeleteIcon from '../../../assets/imgs/trash.svg';
import DialogComponent from '../../../components/DialogAlert';
import { deleteOrder } from '../../../APIs/OrderAPI';
import setZeroes from '../../ClientBlcok/helpers/setZeros';
import dayjs from 'dayjs';
import round from '../../AromatsTable/helpers/RoundNumbers';
import { toJS } from 'mobx';
import { setClientInfo, setCons, setPayments, setPerfume } from '../helpers/FromBuff';
import { fetchBuffOrders } from '../api';
import { observer } from 'mobx-react-lite';
import { updateFarmer } from '../../../helpers/updateAfterSend';

const BufferListToday = observer((props) => {
    const { client, orders, products } = useContext(Context);
    const [open, setOpen] = useState(false);
    // const [buffOrder, setBuffOrder] = useState([]);
 
    useEffect(() => {
        if (orders.bufId.length !== 0) {
            setClientInfo(orders, client, orders.bufId.sale);
            setPerfume(orders, orders.bufId.perfumes)
            setCons(orders, orders.bufId.disposables);
            setPayments(orders, orders.bufId.payments);
            orders.setKeyDown(false);
        }
    }, [orders.bufId]);

    const message = 'Вы не сможете вернуть заказ под номером ' + props.id;
    const handleBorder = (event) => {
        const divBufopt = event.target.parentNode;
        const allDivs = document.querySelectorAll(`.${styles.div_bufopt}`);
        allDivs.forEach((div) => {
            if (div !== divBufopt) {
                div.style.borderRight = 'none';
                div.style.borderLeft = 'none';
                div.style.borderTop = 'none';
            }
        });
        divBufopt.style.borderRight = '1px solid black';
        divBufopt.style.borderLeft = '1px solid black';
        divBufopt.style.borderTop = '0.5px solid black';
    };

    async function handleKeyDown(event) {
        if (event.key === 'Enter') {
            await fetchBuffOrders(props.id).then(data => orders.setBufId(data));
        }
    }

    const handleOpen= (event) => {
        setOpen(true);
    }

    const handleClose = (event) => {
        setOpen(false);
    }

    const handleDelete = async (event) => {
        await deleteOrder(props.id).then(async () => {
            await props.onUpdate();
            setOpen(false);
            updateFarmer(client, orders);
        });
    }

    return (
        <div>
            <div className={styles.div_bufopt}>
                <input type="radio" name="selected" onKeyDown={handleKeyDown} onClick={handleBorder} className={styles.selectradio} id={props.id} value="" />
                <label className={styles.option_label} htmlFor={props.id}>{props.date} - {props.client} - {props.name} </label>
                <button className={styles.imgbuffer} imgid={props.id} onClick={handleOpen}><img src={DeleteIcon} alt="удалить" width={20} /></button>
                <DialogComponent open={open} close={handleClose} title={'Удалить заказ?'} 
                message={message} btnAction1={handleClose} btnText1={'Отмена'} 
                btnAction2={handleDelete} btnText2={'Удалить'} />
            </div>
        </div>
    );
});

export default BufferListToday;
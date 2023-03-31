import React,{useContext} from 'react';
import './PaymentBlock.css'
import { observer } from 'mobx-react-lite'
import { Context } from "../../index";
import { addDots } from "../../helpers/Dotter"

const PaymentBlock = observer((props) => {
    const { orders } = useContext(Context);
    console.log(orders);
    return (
        <div className="paycard">
        <div className="paycard-note">
            <label className="label-note" htmlFor="note">Примечание:</label>
            <input type="text" name="note" className="note" id="commentInput" />
        </div>
        <div className="div-pay">
            <div className="debtinfo">
                <div className="torow" data-html2canvas-ignore="true">
                    <div>
                        Начальный долг:
                    </div>
                    <div id="debt" className="totals total_tg"> 0</div>
                </div>
                <div className="torow" data-html2canvas-ignore="true">
                    <div>
                        Долг по текущей:
                    </div>
                    <div id="currentDebt" className="totals total_tg">0</div>
                </div>
                <div className="torow" data-html2canvas-ignore="true">
                    <div> Общий долг: </div>
                    <div id="deptCalc" className="totals total_tg">0</div>
                </div>
            </div>
            <div className="totalinfo">
                <div className="torow">
                    <div>
                        До скидки:
                    </div>
                    <div className="totals total_tg">{addDots(orders.withoutDiscount)}</div>
                </div>
                <div className="torow">
                    <div>
                        Скидка:
                    </div>
                    <div className="totals total_tg">{addDots(orders.discount)}</div>
                </div>
                <div className="torow grandtotal">
                    <div>К оплате: </div>
                    <div className="totals total_tg">{addDots(orders.grandTotal)}</div>
                </div>
            </div>
        </div>
    </div>
    );
});

export default PaymentBlock;

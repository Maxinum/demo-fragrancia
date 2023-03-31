import { makeAutoObservable } from 'mobx'

export default class OrderInfo {
    constructor() {
        this._saleType = 'Скидка';
        this._orders = [];
        this._buffer_orders = [];
        this._selectedOrder = {};
        this._subtotal = 0;
        this._subtotal2 = 0;
        this._withoutDiscount = 0;
        this._selectedPerfumes = [{ count: '', name: '', volume: '', price: '', total: 0 }];
        this._selectedConsumables = [{ count: '', name: '', volume: '', price: '', total: 0}];
        makeAutoObservable(this);
    }

    setSaleType(type){
        this._saleType = type;
    }

    setOrders(orders) {
        this._orders = orders;
    }

    setBufOrders(orders) {
        this._buffer_orders = orders
    }

    setSubTotal(total) {
        this._subtotal = total
    }

    setSecSubTotal(total) {
        this._subtotal2 = total
    }

    setSelectedOrder(order_id) {
        this._selectedOrder = order_id
    }

    setwithoutDiscount(total){
        this._withoutDiscount = total
    }

    setSelectedPerf(perf){
        this._selectedPerfumes = perf;
    }

    setSelectedCons(cons){
        this._selectedConsumables = cons;
    }

    get saleType(){
        return this._saleType;
    }

    get orders() {
        return this._orders
    }

    get bufOrders() {
        return this._buffer_orders
    }

    get SubTotal(){
        return this._subtotal
    }

    get SecSubTotal(){
        return this._subtotal2
    }

    get grandTotal() {
        return this._subtotal + this._subtotal2
    }

    get withoutDiscount(){
        return Math.round(this._withoutDiscount + (this._subtotal + this._subtotal2))
    }

    get discount(){
        return Math.round((this._withoutDiscount + this._subtotal2) - (this._subtotal + this._subtotal2))
    }

    get selectedOrder() {
        return this._selectedOrder
    }

    get selectedPerf(){
        return this._selectedPerfumes;
    }

    get selectedCons(){
        return this._selectedConsumables;
    }
}
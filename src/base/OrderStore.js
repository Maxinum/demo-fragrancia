import { makeAutoObservable } from "mobx";
import { removeDots } from "../helpers/Dotter";

export default class OrderInfo {
  constructor() {
    this._saleType = "Discount";
    this._orders = [];
    this._buffer_orders = [];
    this._bufId = [];
    this._selectedOrder = {};
    this._percent = 0;
    this._subtotal = 0;
    this._subtotal2 = 0;
    this._withoutDiscount = 0;
    this._discount = 0;
    this._comment = "";
    this._selectedFile = [];
    this._paymentRows = [{ score: "", sum: "", date: "", photoCheck: "" }];
    this._selectedPerfumes = [
      {
        id: "",
        invTypeId: "",
        count: "",
        name: "",
        volume: "",
        price: "",
        total: "",
      },
    ];
    this._selectedConsumables = [
      { id: "", count: "", name: "", volume: "", price: "", total: "" },
    ];
    this._isKeyDown = false;
    this._preview = "";
    this._spentBonus = 0;
    this._bonusHide = true;
    this._bonusCheck = false;
    this._initialDebt = 0;
    makeAutoObservable(this);
  }

  setBonusCheck(boolean) {
    this._bonusCheck = boolean;
  }

  setInitialDebt(debt) {
    this._initialDebt = debt;
  }

  setBonusHide(boolean) {
    this._bonusHide = boolean;
  }

  setSpentBonus(bonus) {
    this._spentBonus = bonus;
  }

  setImgPreview(link) {
    this._preview = link;
  }

  setSelectedFile(index, file) {
    this._selectedFile[index] = file;
  }

  clearAllSelectedFiles() {
    this._selectedFile = [];
  }

  setKeyDown(key) {
    this._isKeyDown = key;
  }

  setComment(comment) {
    this._comment = comment;
  }

  setSaleType(type) {
    this._saleType = type;
  }

  setOrders(orders) {
    this._orders = orders;
  }

  setBufOrders(orders) {
    this._buffer_orders = orders;
  }

  setBufId(buff) {
    this._bufId = buff;
  }

  setSubTotal(total) {
    this._subtotal = total;
  }

  setSecSubTotal(total) {
    this._subtotal2 = total;
  }

  setSelectedOrder(order_id) {
    this._selectedOrder = order_id;
  }

  setwithoutDiscount(total) {
    this._withoutDiscount = total;
  }

  setSelectedPerf(perf) {
    this._selectedPerfumes = perf;
  }

  setPaymentRows(payments) {
    this._paymentRows = payments;
  }

  setSelectedCons(cons) {
    this._selectedConsumables = cons;
  }

  setPercent(percent) {
    this._percent = percent;
  }

  get bonusCheck() {
    return this._bonusCheck;
  }

  get initialDebt() {
    return this._initialDebt;
  }

  get bonusHide() {
    return this._bonusHide;
  }

  get spentBonus() {
    return this._spentBonus;
  }

  get imgPreview() {
    return this._preview;
  }

  get selectedFile() {
    return this._selectedFile;
  }

  get bufId() {
    return this._bufId;
  }

  get keyDown() {
    return this._isKeyDown;
  }

  get comment() {
    return this._comment;
  }

  get saleType() {
    return this._saleType;
  }

  get percent() {
    return this._percent;
  }

  get orders() {
    return this._orders;
  }

  get bufOrders() {
    return this._buffer_orders;
  }

  get SubTotal() {
    return this._subtotal;
  }

  get SecSubTotal() {
    return this._subtotal2;
  }

  get grandTotal() {
    if (this.bonusCheck === true) {
      return this._subtotal + this._subtotal2 - this.spentBonus;
    } else {
      return Number(this._subtotal) + Number(this._subtotal2);
    }
  }

  get withoutDiscount() {
    return this.saleType === "Discount"
      ? (this._subtotal / (1 - this._percent / 100) + this._subtotal2).toFixed(
          0
        )
      : this._subtotal + this._subtotal2;
  }

  get discount() {
    if (this.saleType === "Discount") {
      return this.withoutDiscount - this.grandTotal;
    } else {
      if (this.bonusCheck === true) {
        return this.spentBonus;
      } else {
        return 0;
      }
    }
  }

  get currDebt() {
    if (this.bonusCheck === true) {
      return this._subtotal + this._subtotal2 - this.spentBonus;
    } else {
      return Number(this._subtotal) + Number(this._subtotal2);
    }
  }

  get calcDebt() {
    if (this.bonusCheck === true) {
      return this._subtotal + this._subtotal2 - this.spentBonus;
    } else {
      return Number(this._subtotal) + Number(this._subtotal2);
    }
  }

  get selectedOrder() {
    return this._selectedOrder;
  }

  get selectedPerf() {
    return this._selectedPerfumes;
  }

  get selectedCons() {
    return this._selectedConsumables;
  }

  get paymentRows() {
    return this._paymentRows;
  }
}

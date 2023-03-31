import { makeAutoObservable } from "mobx";

export default class ClientStore {
  constructor() {
    this._lastDaysPyaments = [];
    this._lastDaysSales = [];
    this._categories = [];
    this._cities = [];
    this._clients = [];
    this._delivery = [];
    this._selectedClient = "";
    this._payments = [];
    this._sales = [];
    this._selectedCategory = {
      id: "3",
      category: "Без Bonusа",
      type: "price_ml",
    };
    this._selectedDelivery = "";
    this._date = "";
    this._selectedType = "";
    this._wpLink = "";
    this._clientInfo = [];
    makeAutoObservable(this);
  }

  setClientInfo(info) {
    this._clientInfo = info;
  }

  setlastDaysPayments(history) {
    this._lastDaysPyaments = history;
  }

  setlastDaysSales(history) {
    this._lastDaysSales = history;
  }

  setSales(sales) {
    this._sales = sales;
  }

  setPayments(payments) {
    this._payments = payments;
  }

  setWpLink(wpLink) {
    this._wpLink = wpLink;
  }

  setDate(date) {
    this._date = date;
  }

  setCategories(categories) {
    this._categories = categories;
  }

  setCities(cities) {
    this._cities = cities;
  }

  setClients(clients) {
    this._clients = clients;
  }

  setSelectedClient(client) {
    this._selectedClient = client;
  }

  setSelectedCategory(category) {
    this._selectedCategory = category;
  }

  setSelectedDelivery(delivery) {
    this._selectedDelivery = delivery;
  }

  setDelivery(data) {
    this._delivery = data;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  get clientInfo() {
    return this._clientInfo;
  }

  get lastDaysPayments() {
    return this._lastDaysPyaments;
  }

  get lastDaysSales() {
    return this._lastDaysSales;
  }

  get sales() {
    return this._sales;
  }

  get payments() {
    return this._payments;
  }

  get selectedType() {
    return this._selectedType;
  }

  get date() {
    return this._date;
  }

  get delivery() {
    return this._delivery;
  }

  get categories() {
    return this._categories;
  }

  get cities() {
    return this._cities;
  }

  get clients() {
    return this._clients;
  }

  get selectedClient() {
    return this._selectedClient;
  }

  get selectedCategory() {
    return this._selectedCategory;
  }

  get selectedDelivery() {
    return this._selectedDelivery;
  }

  get wpLink() {
    return this._wpLink;
  }
}

import { makeAutoObservable } from 'mobx'

export default class ClientStore {
    constructor() {
        this._categories = [];
        this._cities = [];
        this._clients = [];
        this._delivery = [];
        this._selectedClient = {};
        this._selectedCategory = 3;
        makeAutoObservable(this);
    }

    setCategories(categories) {
        this._categories = categories;
    }

    setCities(cities) {
        this._cities = cities
    }

    setClients(clients) {
        this._clients = clients
    }

    setSelectedClient(client) {
        this._selectedClient = client
    }

    setSelectedCategory(category) {
        this._selectedCategory = category
    }

    setDelivery(data){
        this._delivery = data;
    }

    get delivery(){
        return this._delivery
    }

    get categories() {
        return this._categories
    }

    get cities() {
        return this._cities
    }

    get clients() {
        return this._clients
    }

    get selectedClient() {
        return this._selectedClient
    }

    get selectedCategory() {
        return this._selectedCategory
    }
}
import { makeAutoObservable } from 'mobx'

export default class ProductionInfo {
    constructor() {
        this._perfumes = [];
        this._consunables = [];
        this._products = [];
        makeAutoObservable(this);
    }

    setPerfumes(perfumes) {
        this._perfumes = perfumes;
    }

    setConsunables(consunables) {
        this._consunables = consunables
    }

    setProducts(products) {
        this._products = products
    }

    get perfumes() {
        return this._perfumes
    }

    get consunables() {
        return this._consunables
    }

    get products() {
        return this._products
    }
}
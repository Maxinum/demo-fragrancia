import { makeAutoObservable } from 'mobx'

export default class SalesInfo {
    constructor() {
        this._aromats = [{ count: '', name: '', volume: '', price: '', total: 0 }];
        makeAutoObservable(this);
    }

    setAromats(aromats) {
        this._aromats = aromats;
    }

    get aromats() {
        return this._aromats;
    }

}
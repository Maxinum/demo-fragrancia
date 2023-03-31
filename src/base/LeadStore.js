import { makeAutoObservable } from 'mobx'

export default class LeadStore {
    constructor() {
        this._type = [
            { id: 1, value: 'Действующий' },
            { id: 0, value: 'Новичок' }
        ];
        this._warmth = [];
        this._needs = [];
        this._field = [];
        this._channel = [];
        this._objection = [];
        this._logs = [];
        makeAutoObservable(this);
    }

    setWarmth(data) {
        this._warmth = data;
    }

    get warmth() {
        return this._warmth;
    }

    setType(data) {
        this._type = data;
    }

    get type() {
        return this._type;
    }

    setNeeds(data) {
        this._needs = data;
    }

    get needs() {
        return this._needs;
    }

    setFields(data) {
        this._field = data;
    }

    get field() {
        return this._field;
    }

    setChannel(data) {
        this._channel = data;
    }

    get channel() {
        return this._channel;
    }

    setObjection(data) {
        this._objection = data;
    }

    get objection() {
        return this._objection;
    }

    setLogs(data){
        this._logs = data;
    }

    get logs() {
        return this._logs;
    }
}
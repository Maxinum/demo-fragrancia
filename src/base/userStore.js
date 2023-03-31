import { makeAutoObservable } from 'mobx'

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._user = {}
        this._users = [];
        this._managers = [];
        makeAutoObservable(this);
    }

    setManagers(data){
        this._managers = data;
    }

    get managers(){
        return this._managers;
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUser(user) {
        this._user = user
    }

    setAllUsers(users) {
        this._users = users
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }

    get users(){
        return this._users 
    }
}
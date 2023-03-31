import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/userStore';
import ClientStore from './store/ClientInfo';
import OrderInfo from './store/OrderInfo';
import ProductionInfo from './store/ProductInfo';
import SalesInfo from './store/SalesInfo';

export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));
 

root.render(
  <Context.Provider value={{
    user: new UserStore(),
    client: new ClientStore(),
    orders: new OrderInfo(),
    products: new ProductionInfo(),
    sales : new SalesInfo(),
  }}> 
    <App />
    </Context.Provider>
);


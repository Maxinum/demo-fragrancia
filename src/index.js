import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './base/userStore';
import ClientStore from './base/ClientStore';
import OrderStore from './base/OrderStore';
import ProductStore from './base/ProductStore';
import KanbanStore from './base/KanbanStore';
import LeadStore from './base/LeadStore';
export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));
 

root.render(
  <Context.Provider value={{
    user: new UserStore(),
    client: new ClientStore(),
    orders: new OrderStore(),
    products: new ProductStore(),
    kanban : new KanbanStore(),
    lead : new LeadStore(),
  }}> 
    <App />
    </Context.Provider>
);


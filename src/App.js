import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './app/utils/AppRouter';
import { Context } from "./index";
import { check } from "./APIs/UserAPI";
import './app/styles/App.css';
import './app/styles/normalize.css';
import Header from './components/Header';
function App() {
  const { user } = useContext(Context);
  // const socket = new WebSocket('wss://fragranciaback.maxinum.kz:8080');

  // socket.addEventListener('open', function (event) {
  //   console.log('WebSocket connection established');
  // });
  
  // socket.addEventListener('message', function (event) {
  //   console.log('Message received from server:', event.data);
  // });
  
  // socket.addEventListener('close', function (event) {
  //   console.log('WebSocket connection closed');
  // });
  // useEffect(() => {
  //   check().then(data => {
  //     console.log(data === 'Не авторизован');
  //     if (data === 'Не авторизован') {
  //       user.setIsAuth(false)
  //     } else {
  //       user.setUser(data)
  //       user.setIsAuth(true)
  //     }
  //   })
  // }, []);

  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;

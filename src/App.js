import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './app/utils/AppRouter';
import { Context } from "./index";
import { check } from "./http/UserAPI";
import './App.css'
import './normalize.css'
import Header from './components/Header';
function App() {
  const { user } = useContext(Context);

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

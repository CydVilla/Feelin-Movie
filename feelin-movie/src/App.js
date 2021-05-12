import React, { Component } from 'react'
import HomePage from './Components/HomePage/HomePage'
import ModalForm from "./Components/Shared/Modal"
import Header from "./Components/Shared/Header"
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header>
      </Header>
      <HomePage />
      <ModalForm>
      </ModalForm>
    </div>
  );
}

export default App;

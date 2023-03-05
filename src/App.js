import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SplashPage from './components/SplashPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <SplashPage />
    </div>
  );
}

export default App;
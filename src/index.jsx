import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import FirstView from './pages/FirstView/FirstView';
import Login from './pages/Login/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom"

const root = ReactDOM.createRoot(
  document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/menu" element={<FirstView />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();

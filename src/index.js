import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/header.css';
import Header from "./components/header.js"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);

reportWebVitals();
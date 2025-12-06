import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/header.css';
import Header from "./components/header.js"
import App from "./App.js"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App/>
  </React.StrictMode>
);

reportWebVitals();
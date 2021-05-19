import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
ReactDOM.render(
  <React.StrictMode> 
    <App />
    <Header />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
)
reportWebVitals();

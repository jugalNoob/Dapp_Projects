import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Eth from "./page/ApiEth/Eth";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Eth>
    

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Eth>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

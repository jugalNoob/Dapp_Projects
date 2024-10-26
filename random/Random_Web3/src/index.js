import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import Means from "./page/Means"
import Dark  from './page/Dark';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Dark>
   <Means>
 <BrowserRouter>
    <App />
 </BrowserRouter>
 </Means>
 </Dark>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

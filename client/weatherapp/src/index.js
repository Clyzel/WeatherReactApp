import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// const URL = "https://api.openweathermap.org/data/2.5/forecast?lat=32.7762719&lon=-96.7968559&appid=363d4ee1b6b5ac1fb24bc94bdf4488a8&units=imperial&cnt=5";




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import "./index.scss";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   @font-face {
     font-family: 'Aribau Grotesk';
     font-style: normal;
     font-weight: 500;
     src: url('./fonts/AribauGrotesk-Regular.woff2');
   }

   *{
        color: #3E4C59;
        font-family: "Aribau Grotesk";
   }
   `;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

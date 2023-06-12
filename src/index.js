import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import "normalize.css"; //обнуляющие css-стили
import "styles/initialize.scss"; //обнуляющие css-стили
import '@fontsource/roboto';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


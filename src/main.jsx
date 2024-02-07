import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import './index.css';

/* Usaré BrowserRouter para poder implementar ruta personalizadas a algunos componentes*/
import { BrowserRouter } from 'react-router-dom';

/* Envuelvo el componente App con BrowserRouter */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

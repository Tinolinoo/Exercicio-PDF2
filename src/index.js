import React from 'react';
import ReactDOM from 'react-dom/client';
import Exemplo from './Componentes/Cadastro'
import Cadastro from './Componentes/Cadastro';

const cadastro = ReactDOM.createRoot(document.getElementById('cadastro'));
cadastro.render(
  <React.StrictMode>
    <Cadastro/>
  </React.StrictMode>
)
/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const exemplo = ReactDOM.createRoot(document.getElementById('exemplo'));
exemplo.render(
  <React.StrictMode>
    <Exemplo/>
  </React.StrictMode>
);
*/


// IMPORTAR REACT
import React, { Fragment } from 'react';
// IMPORTAR REACDOM
import ReactDOM from 'react-dom';

// IMPORTAR LOS ESTILOS CSS
import './components/styles/index.css';
// IMPORTAR EL COMPONENTE header
import Header from './components/header';
// IMPORTAR EL COMPONENTE main
import Main from './components/main';





// OBTENER EL ID (root) DEL DIV
const container = document.getElementById('root')



ReactDOM.render(
    <Fragment>
        <Header />
        <Main />
    </Fragment>,
    container
);



// IMPORTAR REACT
import React from 'react';

// IMPORTAR EL COMPONENTE CARDS
import Cards from './cards';

// IMPORTAR EL ARCHIVO css
import './styles/index.css';



/**
 * COMPONENTE HEADER 
 */

const Header =() => {
    return (
      <header className="site-header inicio">
          <div className="contenedor contenido-header">
            <Cards />
          </div>
      </header>
    );
}

export default Header;

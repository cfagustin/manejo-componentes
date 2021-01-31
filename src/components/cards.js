// IMPORTAR REACT
import React from 'react';

import Estrellas from '../images/estrellas1.png'
// IMPORTAR EL ARCHIVO css
import './styles/index.css';
import './styles/normalize.css';


/**
 * COMPONENTE CARDS
 */

const Cards = () =>{
   
      return (
        <section className="cards">
          <div className="contenido-cards">
            <div className="contenedor">
              <div className="programa-cards">
                <h1>House of Cards</h1>
                <div className="entrada">
                  <div className="imagen">
                    <img src={Estrellas} alt=""/>
                  </div>
                  <div className="parrafo-span">
                    <p>
                      <span> 2013-2015 <span className="parrafoTV">TV-MA</span> 3 Seasons </span>
                      <button> 5.1</button>
                    </p>
                  </div>
                  <div className="parrafo-span1">
                  <p>
                    A ruthless politician will stop at nothing to <br/>
                    conquer Washington, D.C., in this Emmy <br/>
                    and Golden Globe-winning political drama.
                  </p>
                  </div>

                  <div className="parrafo-span2"> 
                  <button className="btn">Marco <br/>Polo</button>
                  <p className="span-u">Based on your interest in: <br/>
                    <span> Marco Polo</span>
                  </p>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </section>
      );
  }
  
  export default Cards;

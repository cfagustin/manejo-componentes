

// IMPORTAR REACT
import React from 'react';



/**
 * COMPONENTE MAIN
 */

const Main = () => {

   // estado
    const [movies, setDatos] = React.useState([])

    // Se ejecutara 
    React.useEffect(() =>{
        //consumir el archivo movies.json
        fetch('json/movies.json')
        .then(response => response.json())
        .then(datos =>{
            setDatos(datos)
        })
    }, [])// [] : Se ejecutara una solo vez

    /*
    const consumirAPI = async () =>{
        const data =await fetch('https://jsonplaceholder.typicode.com/albums')
        const users = await data.json()
        setEquipo(users)
    }



     <div>
            <h1>CONSUMIR DATOS DE UN API</h1>
            <ul>
            {
                    movies.map(element =>(
                        <img src={`${process.env.PUBLIC_URL}${element.Poster}`} width="100px" />
                    ))
                }
            </ul>
        </div>
    */
    return (
        <div className="contenedor">
            <h2>Popular on Netflix</h2>
            <ul className="lista-movies">
                {
                    movies.map(element =>(
                        <li>
                            <img data-lightbox="galeria" src={`${process.env.PUBLIC_URL}${element.Poster}`} alt="Imagen invitado"/>
                        </li>
                    ))
                }
            </ul>
        </div>      
    );
}
  
  export default Main;
  
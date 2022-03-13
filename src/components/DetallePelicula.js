import "../styles/DetallePelicula.scss"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetallePelicula = () => {

    const params = useParams()
    const [pelicula, setPelicula] = useState([])


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=92b7c9e2808de339886a0b75ca3aa28e&language=es-AR`)
            .then((res)=> res.json())
            .then((data)=> {
                setPelicula(data)
            })
    }, [])

    return (
      <div
        className="contenedor-principal"
        style=
          {{backgroundColor: 'white', 
        //   backgroundImage: 'url(https://place-puppy.com/1200x1200)'}}
    }}
        
      >
          
        <div className="tarjeta-imagen">
          <img src={`https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`} />
        </div>

        <div className="tarjeta-informacion">
          <div className="titulo">
            <h2>{pelicula.title}</h2>
            <button type="button">Ver trailer</button>
          </div>
          <div className="detalles">
            <h4>Resumen</h4>
            <p>{pelicula.overview}</p>
            <h4>Géneros</h4>
            <li>Acción</li>
          </div>
        </div>
      </div>
    );
}

export default DetallePelicula;
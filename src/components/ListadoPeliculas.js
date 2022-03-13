import { ListGroup } from "react-bootstrap"
import { useState, useEffect } from "react"
import TarjetaPeliculaHorizontal from "./TarjetaPeliculaHorizontal"
import "../styles/ListadoPeliculas.scss"


const ListadoPeliculas = ({categoria, tituloCategoria}) => {

    const [peliculas, setPeliculas] = useState([])

    useEffect(() => {
        fetch(
          `https://api.themoviedb.org/3/movie/${categoria}?api_key=92b7c9e2808de339886a0b75ca3aa28e&language=es-AR&page=1`
        )
          .then((res) => res.json())
          .then((data) => setPeliculas(data.results));
    }, [])


    return (
      <div className="contenedor-lista">
        <div className="encabezado"><h3 className="titulo-categoria">{tituloCategoria}</h3></div>
        {peliculas.map((elemento) => (
          <TarjetaPeliculaHorizontal
            key={elemento.id}
            imagen={`https://image.tmdb.org/t/p/w200/${elemento.poster_path}`}
            tituloPelicula={elemento.title}

          />
        ))}
      </div>
    );
}

export default ListadoPeliculas;
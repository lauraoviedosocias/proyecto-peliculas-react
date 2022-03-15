import { useState, useEffect } from "react";
import TarjetaPeliculaHorizontal from "./TarjetaPeliculaHorizontal";
import "../styles/ListadoPeliculas.scss";
import { Link } from "react-router-dom";

const ListadoPeliculas = ({ categoria, tituloCategoria }) => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${categoria}?api_key=92b7c9e2808de339886a0b75ca3aa28e&language=es-AR&page=1`
    )
      .then((res) => res.json())
      .then((data) => setPeliculas(data.results));
  }, []);

  return (
    <div className="contenedor-principal-lista">
      <div className="encabezado">
        <h3 className="titulo-categoria">{tituloCategoria}</h3>
      </div>
      <div className="contenedor-lista">
        {peliculas.map((elemento) => (
          <Link key={elemento.id} to={`/peliculas/${elemento.id}`}>
            <TarjetaPeliculaHorizontal
              imagen={`https://image.tmdb.org/t/p/w200/${elemento.poster_path}`}
              tituloPelicula={elemento.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListadoPeliculas;

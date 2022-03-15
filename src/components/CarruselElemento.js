import { Carousel } from "react-bootstrap";
import "../styles/CarruselElemento.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CarruselElemento = () => {
  const [elementosCarrusel, setElementosCarrusel] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=92b7c9e2808de339886a0b75ca3aa28e&language=es-AR&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setElementosCarrusel(data.results);
      });
  }, []);

  return (
    <Carousel fade>
      {elementosCarrusel.map((elemento) => (
        <Carousel.Item
          key={elemento.id}
          className="contenedor-carrusel"
          style={{
            backgroundImage:
              "url(" +
              "https://image.tmdb.org/t/p/original/" +
              elemento.backdrop_path +
              ")",
          }}
          alt={`Poster de ${elemento.title}`}
        >
          <Link to={`/peliculas/${elemento.id}`}>
            <Carousel.Caption>
              <div className="fondo-caption">
                <h3>{elemento.title}</h3>
                <p>{elemento.overview}</p>
              </div>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarruselElemento;

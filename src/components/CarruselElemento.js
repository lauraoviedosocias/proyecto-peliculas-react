import { Carousel } from "react-bootstrap";
import "../styles/CarruselElemento.scss";
import { useEffect, useState } from "react";

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
          className="contenedor-carrusel"
          style={{
            backgroundImage:
              "url(" +
              "https://image.tmdb.org/t/p/original/" +
              elemento.backdrop_path +
              ")",
          }}
          alt={elemento.title}
        >
          <Carousel.Caption>
            <h3>{elemento.title}</h3>
            <p>{elemento.overview}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarruselElemento;

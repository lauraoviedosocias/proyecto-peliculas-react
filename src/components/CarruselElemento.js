import { Carousel } from "react-bootstrap";
import "../styles/Carrusel.scss";
import { useEffect, useState } from "react";

const CarruselElemento = () => {
  const [elementosCarrusel, setElementosCarrusel] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=92b7c9e2808de339886a0b75ca3aa28e&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setElementosCarrusel(data.results);
      });
  }, []);

  return (
    <Carousel fade>

      {elementosCarrusel.map((elemento) => (

        <Carousel.Item className="contenedor-carrusel">
          <img
            className="d-block w-100"
            src={`https://image.tmdb.org/t/p/original/${elemento.poster_path}`}
            alt="First slide"
          />
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
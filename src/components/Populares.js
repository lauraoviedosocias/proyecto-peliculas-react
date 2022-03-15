import Tarjeta from "./Tarjeta";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Populares.scss"


const Populares = () => {
  const [populares, setPopulares] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=92b7c9e2808de339886a0b75ca3aa28e&language=es-AR&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setPopulares(data.results);
      });
  }, []);

  return (
    <Container fluid>
      <h2 className="p-3">Conocé cuáles son las películas más populares</h2>
      <Row>
        {populares.map((elemento) => (
          <Col key={elemento.id}>
          <Link to={`/peliculas/${elemento.id}`}>
            <Tarjeta imagen={elemento.poster_path} titulo={elemento.title} />
          </Link>
        </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Populares;

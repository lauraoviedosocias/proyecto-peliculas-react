import "../styles/DetallePelicula.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetallePelicula = () => {
  const params = useParams();
  const [pelicula, setPelicula] = useState([]);

  const [generos, setGeneros] = useState([])

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=92b7c9e2808de339886a0b75ca3aa28e&language=es-AR`
    )
      .then((res) => res.json())
      .then((data) => {
        setPelicula(data);

        setGeneros(data.genres)

      });
  }, []);

  return (
    <div>
      <h1>{pelicula.title}</h1>
      <Container style={{ backgroundColor: "pink" }}>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            1 of 3
          </Col>
          <Col md="auto">Variable width content</Col>
          <Col xs lg="2">
            3 of 3
          </Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col md="auto">Variable width content</Col>
        </Row>
      </Container>
    </div>
  );
};


  return (
    <div
      className="contenedor-principal"
      style={{
        backgroundImage:
          "url(" +
          "https://image.tmdb.org/t/p/original/" +
          pelicula.backdrop_path +
          ")",
        opacity: ".95",
      }}
    >
      <div className="fondo-opaco"></div>
      <div className="tarjeta-imagen">
        <img
          src={`https://image.tmdb.org/t/p/original/${pelicula.poster_path}`}
        />
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
          <ul>
            {generos.map((genero)=>(
              <li key={genero.id}>{genero.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetallePelicula;

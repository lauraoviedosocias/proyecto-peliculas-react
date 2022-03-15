import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "../styles/TarjetaPeliculaHorizontal.scss";

const TarjetaPeliculaHorizontal = ({ imagen, tituloPelicula }) => {
  return (
    <div className="contenedor-principal">
      <div className="contenedor-info">
        <div className="contenedor-imagen">
          <Image fluid roundedCircle src={imagen} />
        </div>
        <p className="titulo-pelicula">{tituloPelicula}</p>
      </div>
      <Button className="redondo" variant="btn btn-primary btn-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-chevron-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </Button>
    </div>
  );
};

export default TarjetaPeliculaHorizontal;

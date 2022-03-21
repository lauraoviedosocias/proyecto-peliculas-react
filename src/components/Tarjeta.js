import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Tarjeta.scss";

const Tarjeta = ({ titulo, imagen }) => {
  return (
    <Card
      className=" card d-flex flex-column justify-content-around"
      style={{ width: "18rem", height: "35rem", margin: "5px" }}
    >
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w500/${imagen}`}
      />
      <Card.Body className="d-flex flex-column justify-content-around">
        <Card.Title>{titulo}</Card.Title>
        <Button variant="btn btn-secondary btn-sm">
          Más info
          <span>
            <i className="bi bi-chevron-double-right"></i>
          </span>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Tarjeta;

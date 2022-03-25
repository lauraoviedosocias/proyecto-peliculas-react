import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import popcorn from "../img/popcorn.png";
import "../styles/NavBar.scss";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img
          alt="paquete de pochoclos"
          src={popcorn}
          width="60"
          height="60"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Link to="/">Home</Link>
          <Link to="/lanzamientos">Últimos Lanzamientos</Link>
          <Link to="/populares">Populares</Link>
          <Link to="/busqueda">Búsqueda</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;

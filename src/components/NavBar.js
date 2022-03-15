import { Navbar, Nav } from "react-bootstrap";
import "../logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import popcorn from "../img/popcorn.png";
import { Link } from "react-router-dom";
import "../styles/NavBar.scss";

const NavBar = () => {

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img
          alt=""
          src={popcorn}
          width="60"
          height="60"
          className="d-inline-block align-top"
        />{" "}
      </Navbar.Brand>
      <Nav className="navbar me-auto" style={{ height: "60px" }}>
        <Nav.Link>
          <Link className="link" to="/">
            Home
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/lanzamientos">Últimos lanzamientos</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/populares">Populares</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/busqueda">Búsqueda</Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

    

export default NavBar;

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "../logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import popcorn from "../img/popcorn.png";
import { Link } from "react-router-dom";
import "../styles/NavBar.scss";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      
        <Navbar.Brand href="#home">
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
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/lanzamientos">Últimos Lanzamientos</Nav.Link>
            <Nav.Link href="/populares">Populares</Nav.Link>
            <Nav.Link href="/busqueda">Búsqueda</Nav.Link>
          </Nav> 
        </Navbar.Collapse>
      
    </Navbar>
    
  );
};

export default NavBar;

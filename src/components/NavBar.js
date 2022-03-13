import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../logo.svg"
import 'bootstrap/dist/css/bootstrap.min.css';



const NavBar = () => {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            alt=""
            src="http://placekitten.com/50"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Home
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link><Link to="/lanzamientos">Últimos lanzamientos</Link></Nav.Link>
          <Nav.Link><Link to="/populares">Populares</Link></Nav.Link>
          <Nav.Link><Link to="/busqueda">Búsqueda</Link></Nav.Link>
        </Nav>
      </Navbar>
    );
}

export default NavBar;
import { Navbar, Container, Nav } from "react-bootstrap";
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
                            height="60"
                            className="d-inline-block align-top"
                        />{' '}
                    
                    </Navbar.Brand>
                    <Nav className="me-auto" style={{ height: '60px' }}>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="lanzamientos">Últimos lanzamientos</Nav.Link>
                        <Nav.Link href="populares">Populares</Nav.Link>
                        <Nav.Link href="busqueda">Búsqueda</Nav.Link>
                    </Nav>
            </Navbar>
    )
}

export default NavBar;
import { Navbar, Container, Nav } from "react-bootstrap";
import "../logo.svg"
import 'bootstrap/dist/css/bootstrap.min.css';



const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="http://placekitten.com/50"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Home
                    
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="lanzamientos">Últimos lanzamientos</Nav.Link>
                        <Nav.Link href="populares">Populares</Nav.Link>
                        <Nav.Link href="busqueda">Búsqueda</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    )
}

export default NavBar;
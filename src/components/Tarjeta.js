import { Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const Tarjeta = ({titulo, imagen}) => {

    
    return (

        <Card style={{ width: '18rem', height: '35rem', margin: '5px' }}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${imagen}`} />
            <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Button variant="primary">Más info</Button>
            </Card.Body>
        </Card>
    )
}

export default Tarjeta;
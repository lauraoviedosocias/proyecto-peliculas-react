
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const DetallePelicula = () => {

    const params = useParams()
    const [pelicula, setPelicula] = useState([])


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=92b7c9e2808de339886a0b75ca3aa28e&language=es-AR`)
            .then((res)=> res.json())
            .then((data)=> {
                setPelicula(data)
            })
    }, [])

    return (
        <div>
            <h1>{pelicula.title}</h1>
            <Container style={{ backgroundColor: 'pink' }}>
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
    )
}

export default DetallePelicula;
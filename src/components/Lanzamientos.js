import Tarjeta from "./Tarjeta"
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Lanzamientos = () => {

    const [ultimosLanzamientos, setUltimosLanzamientos] = useState([])

    useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=92b7c9e2808de339886a0b75ca3aa28e&language=es-AR&page=1`)
            .then((res)=> res.json())
            .then((data)=> {
                setUltimosLanzamientos(data.results)
            })
    }, [])


    return (
        <Container fluid>
            <h2 className="p-3">Conocé cuáles son los estrenos más recientes</h2>
            <Row>
                {ultimosLanzamientos.map((elemento)=>(
                    <Col>
                        <Link to={`/peliculas/${elemento.id}`}>
                            <Tarjeta
                                key={elemento.id}
                                imagen={elemento.poster_path}
                                titulo={elemento.title} />
                        </Link>
                    </Col>
                    ))}
                
            </Row>
        </Container> 
    )
}

export default Lanzamientos;
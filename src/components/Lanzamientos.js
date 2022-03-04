import Tarjeta from "./Tarjeta";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Lanzamientos = () => {

    const [ultimosLanzamientos, setUltimosLanzamientos] = useState([])

    useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=92b7c9e2808de339886a0b75ca3aa28e&language=en-US&page=1`)
            .then((res)=> res.json())
            .then((data)=> {
                setUltimosLanzamientos(data.results)
            })
    }, [])


    return (
        <Container fluid>
            <h1 class="p-3">Soy la sección Lanzamientos</h1>
            <Row>
                {ultimosLanzamientos.map((elemento)=>(
                    <Col><Tarjeta
                        imagen={elemento.poster_path}
                        titulo={elemento.title}
                        masInfo={elemento.overview} /></Col>
                    ))}
                
            </Row>
        </Container>


            
            
        
    )
}

export default Lanzamientos;
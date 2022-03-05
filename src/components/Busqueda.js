import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Tarjeta from "./Tarjeta";
import { Col, Row } from "react-bootstrap";





const Busqueda = () => {
    
    const [busqueda, setBusqueda] = useState([])
    const [valorBusqueda, setValorBusqueda] = useState("undefined")
    const [searchParams, setSearchParams] = useSearchParams({
        query: ""
    })

    const handleChange = (e) => {
        setSearchParams({
            query: e.target.value
        })
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     setValorBusqueda(searchParams.query)
    // }

    const handleClick = () => {
        setValorBusqueda(searchParams.get("query"))
        console.log(searchParams.get("query"))
        console.log(valorBusqueda)
    }

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=92b7c9e2808de339886a0b75ca3aa28e&language=es-AR&query=${valorBusqueda}&page=1`)
            .then((res) => res.json())
            .then((data) => {
                setBusqueda(data.results)
            })

    }, [valorBusqueda])


    return (
        <div>
            <h2 className="p-3">Acá podés buscar tu peli favorita</h2>
            <form className="form-group w-25">
            <div className="input-group mb-3 p-3">
                <input type="text" className="form-control" placeholder="Nombre de la película" aria-label="Nombre de la película" aria-describedby="button-addon2" 
                onChange={handleChange}
                value={searchParams.query} 
                />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleClick}>Buscar</button>
            </div>
            </form>
            <Row>
            {busqueda.map((elemento)=>(
                <Col><Tarjeta
                key={elemento.id}
                imagen={elemento.poster_path}
                titulo={elemento.title}/></Col>
            ))}
            </Row>
        </div>
    )
}

export default Busqueda;
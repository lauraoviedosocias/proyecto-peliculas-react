import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Home from "./components/Home";
import Lanzamientos from "./components/Lanzamientos";
import Populares from "./components/Populares";
import Busqueda from "./components/Busqueda";
import DetallePelicula from "./components/DetallePelicula";
import ErrorNoEncontrado from "./components/ErrorNoEncontrado";


const App = () => {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="lanzamientos" element={<Lanzamientos/>}/>
        <Route path="/populares" element={<Populares/>}/>
        <Route path="/busqueda" element={<Busqueda/>}/>
        <Route path="/peliculas:idPelicula" element={<DetallePelicula/>}/>
        <Route path="*" element={<ErrorNoEncontrado/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
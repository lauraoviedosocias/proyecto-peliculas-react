import "../styles/Home.scss";
import ListadoPeliculas from "./ListadoPeliculas";
import CarruselElemento from "./CarruselElemento";

const Home = () => {
  return (
    <div>
      <CarruselElemento />
      <div className="contenedor">
        <ListadoPeliculas
          categoria="popular"
          tituloCategoria="Películas Populares"
        />
        <ListadoPeliculas
          categoria="top_rated"
          tituloCategoria="Películas Mejores Puntuadas"
        />
      </div>
    </div>
  );
};

export default Home;

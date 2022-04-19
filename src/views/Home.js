import Paginacion from "../components/paginacion/Paginacion";
import Datos from "../components/Datos/Datos";
import "./Css/Css.css";
export default function Home() {
  return (
    <div className="home">
      <h1>
        Bienvenido a ESS
        <Datos />
        <Paginacion />
      </h1>
    </div>
  );
}

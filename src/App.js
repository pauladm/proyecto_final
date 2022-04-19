import { Routes, Route } from "react-router-dom";
import Layaout from "./components/Layout";
import Home from "./views/Home";
import "./App.css";

import RequireAuth from "./components/RequireAuth/RequireAuth";
import Ajustes from "./views/Ajustes";
import Login2 from "./views/Login2";
import Paginacion from "./components/paginacion/Paginacion";
import Registro from "./views/Registro";
import Datos from ".//components/Datos/Datos";
function App() {
  return (
    <Routes>
      {/*public routes */}

      <Route path="/" element={<Layaout />}>
        <Route path="home" element={<Home />} />

        <Route path="login2" element={<Login2 />} />
        <Route path="paginacion" element={<Paginacion />} />
        <Route path="registro" element={<Registro />} />
        <Route path="datos" element={<Datos />} />
        <Route element={<RequireAuth />}>
          <Route index element={<Home />} />
          <Route path="paginacion" element={<Paginacion />} />
          <Route path="ajustes" element={<Ajustes />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

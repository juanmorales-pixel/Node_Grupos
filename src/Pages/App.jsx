import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navegacion from "../Components/Navegacion.jsx";
import Inicio from "./Inicio.jsx";
import Galeria from "./Galeria.jsx";
import Formulario from "../Orquestadores/Formulario.jsx";
import H from "../Components/h.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Navegacion />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/Galeria" element={<Galeria />} />
                <Route path="/Formulario" element={<Formulario />} />
                <Route path="/h" element={<H />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

import Inicio from "./pages/inicio";
import PaginaoEncontrado from "./pages/pagina-naoencontrado";

import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function Navegacao() {
    return(

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Inicio />} />

            <Route path="*" element={<PaginaoEncontrado />} />
          </Routes>
        </BrowserRouter>


    )
}
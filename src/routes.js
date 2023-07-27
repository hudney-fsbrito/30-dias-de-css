import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Desafios/pages/Home";
import IconeSocial from "./Desafios/pages/Dia1/index";
import Loading from "./Desafios/pages/Dia2";
import AlteraCorTexto from "./Desafios/pages/Dia3";
import BtnEfeito from "./Desafios/pages/Dia4";

function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dia1" element={<IconeSocial></IconeSocial>}></Route>
        <Route path="/dia2" element={<Loading></Loading>}></Route>
        <Route path="/dia3" element={<AlteraCorTexto></AlteraCorTexto>}></Route>
        <Route path="/dia4" element={<BtnEfeito></BtnEfeito>}></Route>
      </Routes>
    </BrowserRouter>
  )
  
}


export default AppRoutes;
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Desafios/pages/Home";
import IconeSocial from "./Desafios/pages/Dia1/index";
import Loading from "./Desafios/pages/Dia2";
import AlteraCorTexto from "./Desafios/pages/Dia3";
import BtnEfeito from "./Desafios/pages/Dia4";
import Pulse from "./Desafios/pages/Dia5";
import Lightning from "./Desafios/pages/Dia6";
import ToChase from "./Desafios/pages/Dia7";

function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dia1" element={<IconeSocial></IconeSocial>}></Route>
        <Route path="/dia2" element={<Loading></Loading>}></Route>
        <Route path="/dia3" element={<AlteraCorTexto></AlteraCorTexto>}></Route>
        <Route path="/dia4" element={<BtnEfeito></BtnEfeito>}></Route>
        <Route path="/dia5" element={<Pulse></Pulse>}></Route>
        <Route path="/dia6" element={<Lightning></Lightning>}></Route>
        <Route path="/dia7" element={<ToChase></ToChase>}></Route>
      </Routes>
    </BrowserRouter>
  )
  
}


export default AppRoutes;
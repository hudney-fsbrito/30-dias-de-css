import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Desafios/pages/Home";
import IconeSocial from "./Desafios/pages/Dia1/index";
import Loading from "./Desafios/pages/Dia2";
import AlteraCorTexto from "./Desafios/pages/Dia3";
import BtnEfeito from "./Desafios/pages/Dia4";
import Pulse from "./Desafios/pages/Dia5";
import Lightning from "./Desafios/pages/Dia6";
import ToChase from "./Desafios/pages/Dia7";
import BateCoração from "./Desafios/pages/Dia8";
import Pendulo from "./Desafios/pages/Dia9";
import Esfumacar from "./Desafios/pages/Dia10";
import AnimarIcone from "./Desafios/pages/Dia11";
import MenuHove from "./Desafios/pages/Dia12";
import Floating from "./Desafios/pages/Dia13";
import CheckHeart from "./Desafios/pages/Dia14";

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
        <Route path="/dia8" element={<BateCoração></BateCoração>}></Route>
        <Route path="/dia9" element={<Pendulo></Pendulo>}></Route>
        <Route path="/dia10" element={<Esfumacar></Esfumacar>}></Route>
        <Route path="/dia11" element={<AnimarIcone></AnimarIcone>}></Route>
        <Route path="/dia12" element={<MenuHove></MenuHove>}></Route>
        <Route path="/dia11" element={<AnimarIcone></AnimarIcone>}></Route>
        <Route path="/dia13" element={<Floating></Floating>}></Route>
        <Route path="/dia14" element={<CheckHeart></CheckHeart>}></Route>
      </Routes>
    </BrowserRouter>
  )
  
}


export default AppRoutes;
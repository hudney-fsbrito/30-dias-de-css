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
import Flipped from "./Desafios/pages/Dia15";
import ChangeColor from "./Desafios/pages/Dia16";
import Search from "./Desafios/pages/Dia17";
import LightDark from "./Desafios/pages/Dia18";
import Typewriter from "./Desafios/pages/Dia19";
import Sticky from "./Desafios/pages/Dia20";
import ExpandCard from "./Desafios/pages/Dia21";
import ExpandImage from "./Desafios/pages/Dia22";
import CardHover from "./Desafios/pages/Dia23/iindex";
import TitleHover from "./Desafios/pages/Dia24";

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
        <Route path="/dia14" element={<CheckHeart></CheckHeart>}></Route>B
        <Route path="/dia15" element={<Flipped></Flipped>}></Route>
        <Route path="/dia16" element={<ChangeColor></ChangeColor>}></Route>
        <Route path="/dia17" element={<Search></Search>}></Route>
        <Route path="/dia18" element={<LightDark></LightDark>}></Route>
        <Route path="/dia19" element={<Typewriter></Typewriter>}></Route>
        <Route path="/dia20" element={<Sticky></Sticky>}></Route>
        <Route path="/dia21" element={<ExpandCard></ExpandCard>}></Route>
        <Route path="/dia22" element={<ExpandImage></ExpandImage>}></Route>
        <Route path="/dia23" element={<CardHover></CardHover>}></Route>
        <Route path="/dia24" element={<TitleHover></TitleHover>}></Route>
      </Routes>
    </BrowserRouter>
  )
  
}


export default AppRoutes;
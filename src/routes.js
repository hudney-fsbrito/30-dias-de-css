import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Desafios/pages/Home";
import IconeSocial from "./Desafios/pages/Dia1/index";
import Loading from "./Desafios/pages/Dia2";

function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dia1" element={<IconeSocial></IconeSocial>}></Route>
        <Route path="/dia2" element={<Loading></Loading>}></Route>
      </Routes>
    </BrowserRouter>
  )
  
}


export default AppRoutes;
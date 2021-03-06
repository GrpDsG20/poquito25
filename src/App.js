import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Producto } from "./components/Pages/Producto";
import { Servicio } from "./components/Pages/Servicio";
import { Empresa } from "./components/Pages/Empresa";
import { Contacto } from "./components/Pages/Contacto";
import { Reclamos1 } from "./components/Pages/Book/Page1";
import { Reclamos2 } from "./components/Pages/Book/Page2";
import { Reclamos3 } from "./components/Pages/Book/Page3";
import { Catalogo } from "./components/Catalogo/catalogo";
import { FooterPag } from "./components/FooterPag";

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
          <Route path="/" element={<Producto />}></Route>
          <Route path="/servicios" element={<Servicio />}></Route>
          <Route path="/empresa" element={<Empresa />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/Book" element={<Reclamos1 />}></Route>
          <Route path="/LibroReclamosform" element={<Reclamos2 />}></Route>
          <Route path="/LibroReclamos" element={<Reclamos3 />}></Route>
          <Route path="/Catalogo" element={<Catalogo />}></Route>
      </Routes>
    </Router>
    <a href="https://wa.me/5211234567890?text=Me%20gustaría%20saber%20el%20precio%20del%20coche" class="whatsapp" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></a>
  
    <FooterPag />
  </>
  );  
}
export default App;

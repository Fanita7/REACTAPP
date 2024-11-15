import Navbar from "../src/componentes/navbar.jsx"; 
import Astros from "../src/componentes/Astros.jsx";
import { Routes, Route } from "react-router-dom";
import "../src/App.css";
//para hacer una navbar y ponerle sus nombrecitos:
// lo que está después del / es una nueva url
function App() {
  const links =[
    { href: "/home", text: "home"},
    { href: "/astros", text: "astros"},
    { href: "/apod", text: "apod"},
  ];

    return (
    <>
      <Navbar links={links} />
      <Routes>
        <Route element={<Astros />} path="/astros"/>
      </Routes>
    </>
  );
}

export default App;

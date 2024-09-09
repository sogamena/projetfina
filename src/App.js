import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Vehicules from "./components/Vehicules/Vehicules";
import Notfound from "./components/Notfound";
import VehiculeDetail from "./components/VehiculeDetail/VehiculeDetail";
import ContactCard from "./components/ContactCard/ContactCard";
// import Vehicule from "./components/vehicule/Vehicules";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="vehicules" element={<Vehicules />} />
            <Route path="contact" element={<ContactCard />} />
            <Route path="*" element={<Notfound />} />
            <Route path="/vehicle/:id" element={<VehiculeDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

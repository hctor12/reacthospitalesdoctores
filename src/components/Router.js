import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import MenuHospitales from "./MenuHospitales";
import Home from "./Home";
import Doctores from "./Doctores";
import DetallesDoctor from "./DetallesDoctor";
import CreateHospital from "./CreateHospital";

const Router = () => {
  const DoctoresElement = () => {
    let { idHospital } = useParams();
    return <Doctores idHospital={idHospital} />;
  };

  const DoctorElement = () => {
    let { idDoctor } = useParams();
    return <DetallesDoctor idDoctor={idDoctor} />;
  };

  return (
    <BrowserRouter>
      <MenuHospitales />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctores/:idHospital" element={<DoctoresElement />} />
        <Route path="/doctor/:idDoctor" element={<DoctorElement />} />
        <Route path="/createhospital" element={<CreateHospital />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

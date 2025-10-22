import React, { useEffect, useState } from "react";
import Global from "../Global";
import axios from "axios";

const Hospitales = () => {
  const [hospitales, setHospitales] = useState([]);
  const urlHospitales = Global.apiHospitales;

  const loadHospitales = () => {
    let request = "webresources/hospitales";
    axios.get(urlHospitales + request).then((response) => {
      setHospitales(response.data);
    });
  };

  useEffect(() => {
    loadHospitales();
  }, []);
  return (
    <div className="flex flex-col gap-2 m-4">
      <h1 className="text-2xl text-sky-600">Hospitales</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Camas</th>
          </tr>
        </thead>
        <tbody>
          {hospitales.map((hosp, index) => {
            return (
              <tr key={index}>
                <td>{hosp.idhospital}</td>
                <td>{hosp.nombre}</td>
                <td>{hosp.direccion}</td>
                <td>{hosp.telefono}</td>
                <td>{hosp.camas}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Hospitales;

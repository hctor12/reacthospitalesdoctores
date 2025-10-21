import axios from "axios";
import React, { useEffect, useState } from "react";
import Global from "../Global";
import { Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const Doctores = (props) => {
  const [doctores, setDoctores] = useState([]);
  const urlDoctores = Global.apiDoctores;
  let idHospital = props.idHospital;
  const loadDetalles = () => {
    let request = "api/Doctores/DoctoresHospital/" + idHospital;
    console.log(idHospital);
    axios.get(urlDoctores + request).then((response) => {
      setDoctores(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    loadDetalles();
  }, [idHospital]);

  return (
    <div className="m-4 flex flex-col gap-2">
      <h2 className="text-sky-600 text-2xl">Doctores</h2>
      <table>
        <thead>
          <tr>
            <th>Apellido</th>
            <th>Especialidad</th>
            <th>Salario</th>
            <th>Id Hospital</th>
          </tr>
        </thead>
        <tbody>
          {doctores.map((doc, index) => {
            return (
              <tr key={index}>
                <td>{doc.apellido}</td>
                <td>{doc.especialidad}</td>
                <td>{doc.salario}</td>
                <td>{doc.idHospital}</td>
                <td>
                  <NavLink to={`/doctor/${doc.idDoctor}`}>
                    <Button variant="outline">Ver detalles</Button>
                  </NavLink>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Doctores;

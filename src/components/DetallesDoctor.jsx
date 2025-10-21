import React, { useEffect, useState } from "react";
import axios from "axios";
import Global from "../Global";

const DetallesDoctor = (props) => {
  const urlDoctores = Global.apiDoctores;
  const [detalleDoctor, setDetalleDoctor] = useState(null);
  let idDoctor = props.idDoctor;
  const loadDetalleDoctor = () => {
    let request = "api/Doctores/" + idDoctor;
    axios.get(urlDoctores + request).then((response) => {
      setDetalleDoctor(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    loadDetalleDoctor();
  }, []);

  return (
    <div className="m-4 flex flex-col gap-2">
      <h1 className="text-sky-600 text-2xl">Detalles Doctor</h1>
      {detalleDoctor !== null && (
        <ul>
          <li>
            <span className="font-bold">ID Doctor:</span>{" "}
            {detalleDoctor.idDoctor}
          </li>
          <li>
            <span className="font-bold">Apellido:</span>{" "}
            {detalleDoctor.apellido}
          </li>
          <li>
            <span className="font-bold">Especialidad:</span>{" "}
            {detalleDoctor.especialidad}
          </li>
          <li>
            <span className="font-bold">Salario:</span> {detalleDoctor.salario}{" "}
            €
          </li>
          <li>
            <span className="font-bold">ID Hospital:</span>{" "}
            {detalleDoctor.idHospital}
          </li>
        </ul>
      )}
    </div>
  );
};

export default DetallesDoctor;

import React, { useState, useRef } from "react";
import { Input, Typography, Button } from "@material-tailwind/react";
import Global from "../Global";
import axios from "axios";
import { Navigate } from "react-router-dom";

const CreateHospital = () => {
  const [mensaje, setMensaje] = useState("");
  const [status, setStatus] = useState(false);
  const cajaId = useRef();
  const cajaNombre = useRef();
  const cajaDireccion = useRef();
  const cajaTlf = useRef();
  const cajaCamas = useRef();
  const urlHospitales = Global.apiHospitales;

  const insertHospital = (e) => {
    e.preventDefault();
    let request = "webresources/hospitales/post";
    let id = parseInt(cajaId.current.value);
    let camas = parseInt(cajaCamas.current.value);
    let hospital = {
      idhospital: id,
      nombre: cajaNombre.current.value,
      direccion: cajaDireccion.current.value,
      telefono: cajaTlf.current.value,
      camas: camas,
    };

    axios.post(urlHospitales + request, hospital).then((response) => {
      setMensaje("Hospital insertado: " + hospital.nombre);
      setStatus(true);
      limpiarInputs();
    });
  };

  const limpiarInputs = () => {
    cajaId.current.value = "";
    cajaNombre.current.value = "";
    cajaDireccion.current.value = "";
    cajaTlf.current.value = "";
    cajaCamas.current.value = "";
  };

  return (
    <div className="flex flex-col m-4">
      {status === true && <Navigate to="/hospitales" />}
      <h1 className="text-2xl text-sky-600">Crear Hospital</h1>
      <form className="flex flex-col gap-2 my-4">
        <Typography
          as="label"
          type="small"
          color="default"
          className="font-semibold"
        >
          ID Hospital
        </Typography>
        <Input
          placeholder="ID Hospital"
          className="w-[250px]"
          type="number"
          ref={cajaId}
        />
        <Typography
          as="label"
          type="small"
          color="default"
          className="font-semibold"
        >
          Nombre
        </Typography>
        <Input
          placeholder="Nombre"
          className="w-[250px]"
          type="text"
          ref={cajaNombre}
        />
        <Typography
          as="label"
          type="small"
          color="default"
          className="font-semibold"
        >
          Dirección
        </Typography>
        <Input
          placeholder="Dirección"
          className="w-[250px]"
          type="text"
          ref={cajaDireccion}
        />
        <Typography
          as="label"
          type="small"
          color="default"
          className="font-semibold"
        >
          Teléfono
        </Typography>
        <Input placeholder="Teléfono" className="w-[250px]" ref={cajaTlf} />
        <Typography
          as="label"
          type="small"
          color="default"
          className="font-semibold"
        >
          Camas
        </Typography>
        <Input
          placeholder="Camas"
          className="w-[250px]"
          type="number"
          ref={cajaCamas}
        />
        <Button className="w-[250px]" onClick={insertHospital}>
          Crear Hospital
        </Button>
      </form>
      <h2 className="font-bold text-emerald-600">{mensaje}</h2>
    </div>
  );
};

export default CreateHospital;

import React, { useEffect, useState } from "react";
import { useContextGlobal } from "./utils/global.context";

const Form = () => {
  const { dispatch, validarTexto, validarEmail } = useContextGlobal();

  const [patient, setPatient] = useState({});
  const [nameRend, setNameRend] = useState("");
  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setShow(false);
    setErr(false);
    setNameRend(patient.name);

    if (validarTexto(patient.name) && validarEmail(patient.email)) {
      setShow(true);
      dispatch({
        type: "ADD_PATIENT",
        payload: patient,
      });
      let form = document.getElementById("form1");
      form.reset();
    } else {
      setErr(true);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }, [show]);

  return (
    <div>
      <form id="form1" onSubmit={handleSubmit}>
        <input
          type="text"
          required
          onInput={(event) => setPatient({ ...patient, name: event.target.value })}
        />
        <input
          type="text"
          required
          onInput={(event) => setPatient({ ...patient, email: event.target.value })}
        />
        <button>Enviar</button>
      </form>
      {show && <h4>Gracias {nameRend}, te contactaremos cuanto antes vía mail.</h4>}
      {err && <h4>Por favor verifique su información nuevamente</h4>}
    </div>
  );
};

export default Form;

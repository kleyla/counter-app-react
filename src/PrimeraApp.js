import React from "react";
import PropTypes from "prop-types";

const PrimeraApp = ({ saludo, subtitulo }) => {
  return (
    <div>
      <h1>{saludo}</h1>
      <h3>{subtitulo}</h3>
    </div>
  );
};

PrimeraApp.protoTypes = {
  saludo: PropTypes.string.isRequired,
};
PrimeraApp.defaultProps = {
  subtitulo: "Soy un subtitulo",
};

export default PrimeraApp;

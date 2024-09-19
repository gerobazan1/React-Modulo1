import React from 'react';

const GenericInput = ({ name, inputType }) => {
  const placeholders = {
    "Nombre": "Ingrese su nombre",
    "Apellido": "Ingrese su apellido",
    "Email": "Ingrese su email",
    "Teléfono": "Ingrese su teléfono",
    "Password": "Ingrese su password",
    "Confirmar Contraseña": "Confirme su password"
  };

  return (
    <div className="input-group">
      <label>{name}</label>
      <input 
        type={inputType} 
        placeholder={placeholders[name] || ""}
      />
    </div>
  );
};

export default GenericInput;
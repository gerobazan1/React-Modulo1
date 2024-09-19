import React from 'react'; 
import GenericInput from "./components/GenericInput"; 
import GenericButton from "./components/GenericButton"; 
import './App.css'; 

const App = () => {
  const inputFields = [
    { name: "Nombre", type: "text" },
    { name: "Apellido", type: "text" },
    { name: "Email", type: "email" },
    { name: "Teléfono", type: "tel" },
    { name: "Password", type: "password" },
    { name: "Confirmar Password", type: "password" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulario enviado correctamente.");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Registro</h1>
        {inputFields.map((field, index) => (
          <GenericInput key={index} name={field.name} inputType={field.type} />
        ))}
        <GenericButton text="Registrarse" />
      </form>
    </div>
  );
};

export default App;
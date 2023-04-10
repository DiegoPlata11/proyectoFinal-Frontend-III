import { useState } from "react";
import "./Form.css";
import Card from "./Card";

const Form = () => {
  const [user, setUser] = useState({
    email: "",
    name: "",
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  // ESTADO DE ERROR
  // error = {isActive: true, errorMessage: "", input: ""}

  const handleChange = (e, propiedad) => {
    setUser({ ...user, [propiedad]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailIsValid = user.email.includes("@");
    const nameIsValid = user.name.length > 5;

    if (!emailIsValid || !nameIsValid) {
      // rechazo el envio
      setError(true);

      if (!emailIsValid || !nameIsValid) {
        setErrorMessage("Por favor verifique su información nuevamente");
      }

      return;
    }

    setIsLogged(true);
    // EL ENVIO
    console.log("data: ", user);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Ingrese su nombre"
          onChange={(e) => handleChange(e, "name")}
        />

        {error && errorMessage.includes("nuevamente") && (
          <span style={{ color: "red", fontSize: "0.7rem" }}>
            {errorMessage}
          </span>
        )}

        <input
          type="text"
          name="email"
          placeholder="Ingrese su Email"
          onChange={(e) => handleChange(e, "email")}
        />

        <button type="submit">Ingresar</button>
      </form>

      {isLogged && (
        <Card email={user.email} name={user.name} />
      )}
    </div>
  );
};

export default Form;

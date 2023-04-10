import React from "react";

const Card = ({ name, email }) => {
  return (
    <div>
      <h2>"Gracias: {name} </h2>
      <h2> te contactaremos cuando antes vía mail”.</h2>
    </div>
  );
};

export default Card;

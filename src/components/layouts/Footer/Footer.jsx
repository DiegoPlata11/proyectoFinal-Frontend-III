import React from "react";
import { Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Outlet />

        <footer>
          <p>
            Copyright &copy; 2023 Diego Plata, todos los derechos reservados.
          </p>
        </footer>
    </div>
  );
};

export default Footer;

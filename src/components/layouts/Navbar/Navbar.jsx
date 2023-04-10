import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";
import Switch from "@mui/material/Switch";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const handleChange = () => {
    dispatch({ type: "SWITCH_MODE" });
  };

  const style = {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
  };

  return (
    <div className={state.isDark ? "container-dark" : "container-light"}>
      <button className={state.isDark ? "container-dark" : "container-light"}> 
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "acitveNavbar" : "navbar")}
        >
          Home
        </NavLink>
      </button>

      <button className={state.isDark ? "container-dark" : "container-light"}>
      <NavLink
        to="/dentistas"
        className={({ isActive }) => (isActive ? "acitveNavbar" : "navbar")}
      >
        Profesionales
      </NavLink>
      </button>

      <button className={state.isDark ? "container-dark" : "container-light"}>
      <NavLink
        to="/favs"
        className={({ isActive }) => (isActive ? "acitveNavbar" : "navbar")}
      >
        Favoritos
      </NavLink>
      </button>

      <button className={state.isDark ? "container-dark" : "container-light"}>
      <NavLink
        to="/contacto"
        className={({ isActive }) => (isActive ? "acitveNavbar" : "navbar")}
      >
        Contacto
      </NavLink>
      </button>

      <Switch
        checked={state.isDark}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />



      <div style={{ minHeight: "80vh" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;

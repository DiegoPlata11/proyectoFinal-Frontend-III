import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";
import "./Home.css";

const Home = () => {
  const { state } = useContext(GlobalContext);

  return (
 
    <div className={state.isDark ? "container-dark" : "container-light"}>
      <h1>Bienvenidos</h1>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolore cumque non facilis sequi temporibus assumenda, itaque totam! Perspiciatis qui optio odit nesciunt! Ad est sapiente porro ex, vel dolorum?
      Dolorem possimus recusandae hic dolorum magni, a distinctio vitae exercitationem, ea officia odio velit. Suscipit, fuga! Doloribus fuga voluptate maiores, eligendi atque natus esse ad in est illum laudantium unde.</p>
    </div>
  );
};
export default Home;
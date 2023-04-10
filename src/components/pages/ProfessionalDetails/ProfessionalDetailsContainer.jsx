import React, { useContext, useEffect } from "react";
import ProfessionalSelected from "./ProfessionalDetails";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "../../../context/GlobalContext";
import ProfessionalDetails from "./ProfessionalDetails";

const ProfessionalDetailsContainer = () => {
  const { dispatch } = useContext(GlobalContext);
  const { id } = useParams();


  useEffect(() => {
    const getUser = axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    getUser.then((res) => dispatch({ type: "GET_USER", payload: res.data }));
  }, []);

  return (
    <div>
      <ProfessionalDetails />
    </div>
  );
};

export default ProfessionalDetailsContainer;
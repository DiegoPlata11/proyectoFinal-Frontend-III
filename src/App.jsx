import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Navbar from "./components/layouts/Navbar/Navbar";
import Footer from "./components/layouts/Footer/Footer";
import GlobalContextProvider from "./context/GlobalContext";
import ProfessionalsContainer from "./components/pages/Professionals/ProfessionalsContainer";
import Home from "./components/pages/Home/Home";
import FavoritesContainer from "./components/pages/Favorites/FavoritesContainer";
import Form from "./components/pages/Formulario/Form";
import ProfessionalDetails from "./components/pages/ProfessionalDetails/ProfessionalDetails";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalContextProvider>
        <Routes>
          <Route element={<Navbar />}>
            <Route element={<Footer />}>
              <Route path="/" element={<Home />} />
              <Route path="/dentistas" element={<ProfessionalsContainer />} />
              <Route path="/dentista/:id" element={<ProfessionalDetails />} />
              <Route
                path="/contacto"
                element={<Form/>}
              />
              <Route path="/favs" element={<FavoritesContainer/>} />
            </Route>
          </Route>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </GlobalContextProvider>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/styles/App.scss";
import PublicRoute from "./components/Layouts/PublicRoute";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import Weather from "./pages/Weather";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route path="" element={<Homepage />} />
          <Route path="weather" element={<Weather />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import * as S from "./Sidebar.style";
import background from "../../assets/img/background.jpg";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ContactlessIcon from "@mui/icons-material/Contactless";

function Sidebar({ setTitle }) {
  //handle onClick

  return (
    <S.Container>
      <img src={background} alt="bg-img" />
      <div className="info">
        <p className="p-name">Nguyen Tien Minh</p>
        <p>Student ID: 1801040146</p>
      </div>
      <div className="navbar">
        <Link
          to="/"
          onClick={() => {
            setTitle("Homepage");
          }}
        >
          <div className="navbar-item home">
            <HomeIcon />
            <span>Homepage</span>
          </div>
        </Link>
        <Link
          to="/weather"
          onClick={() => {
            setTitle("Weather");
          }}
        >
          <div className="navbar-item weather">
            <WbSunnyIcon />
            <span>Weather</span>
          </div>
        </Link>
        <Link
          to="/contact"
          onClick={() => {
            setTitle("Contact");
          }}
        >
          <div className="navbar-item contact">
            <ContactlessIcon />
            <span>Contact</span>
          </div>
        </Link>
      </div>
    </S.Container>
  );
}

export default Sidebar;

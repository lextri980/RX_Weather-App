import React from "react";
import * as S from "./Sidebar.style";
import background from "../../assets/img/day.jpg";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

function Sidebar({ title, setTitle }) {
  return (
    <S.Container>
      <img src={background} alt="bg-img" />
      <div className="info">
        <p className="p-prj">WEATHER APP</p>
        <p className="p-prj-sub">IWS Project</p>
      </div>
      <div className="navbar">
        <Link
          to="/"
          onClick={() => {
            setTitle("Homepage");
          }}
        >
          <div className="navbar-item home">
            {title === "Homepage" ? (
              <>
                <HomeIcon className="click-span" />
                <span className="click-span">Homepage</span>
              </>
            ) : (
              <>
                <HomeIcon />
                <span>Homepage</span>
              </>
            )}
          </div>
        </Link>
        <Link
          to="/weather"
          onClick={() => {
            setTitle("Weather");
          }}
        >
          <div className="navbar-item weather">
            {title === "Weather" ? (
              <>
                <WbSunnyIcon className="click-span" />
                <span className="click-span">Weather</span>
              </>
            ) : (
              <>
                <WbSunnyIcon />
                <span>Weather</span>
              </>
            )}
          </div>
        </Link>
      </div>
    </S.Container>
  );
}

export default Sidebar;

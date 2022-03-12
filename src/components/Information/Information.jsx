import AirIcon from "@mui/icons-material/Air";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import CloudIcon from "@mui/icons-material/Cloud";
import DehazeIcon from "@mui/icons-material/Dehaze";
import HvacIcon from "@mui/icons-material/Hvac";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import OpacityIcon from "@mui/icons-material/Opacity";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import StormIcon from "@mui/icons-material/Storm";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Typography } from "@mui/material";
import React from "react";
import earthImg from "../../assets/img/earth.jpg";
import * as S from "./Information.style";

function Information({ weatherData }) {
  console.log(weatherData);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return weatherData ? (
    <S.Container>
      {/* Information column 1 ----------------------------------------------------------------------- */}
      <div className="col-1">
        <Typography className="typo">
          <LocationOnIcon className="icon" style={{ color: "#0E185F" }} />
          City: {weatherData.name}
        </Typography>
        <Typography className="typo">
          <SolarPowerIcon className="icon" style={{ color: "#F76E11" }} />
          Temperature: {weatherData.main.temp}°C
        </Typography>
        <Typography className="typo">
          <ThermostatIcon className="icon" style={{ color: "#5D8BF4" }} />
          Temp. Min: {weatherData.main.temp_min}°C
        </Typography>
        <Typography className="typo">
          <Brightness7Icon className="icon" style={{ color: "#FF9F45" }} />
          Sunrise:{" "}
          {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}
        </Typography>
        <Typography className="typo">
          <DehazeIcon className="icon" style={{ color: "#361500" }} />
          Condition: {weatherData.weather[0].main}
        </Typography>
        <Typography className="typo">
          <AirIcon className="icon" style={{ color: "#6FB2D2" }} />
          Wind speed: {weatherData.wind.speed} m/s
        </Typography>
        <Typography className="typo">
          <CloudIcon className="icon" style={{ color: "#9ADCFF" }} />
          Cloudiness: {weatherData.clouds.all}%
        </Typography>
      </div>

      {/* Information column 2 ----------------------------------------------------------------------- */}
      <div className="col-2">
        <Typography className="typo">
          <LocationOnIcon className="icon" style={{ color: "#0E185F" }} />
          Country: {weatherData.sys.country}
        </Typography>
        <Typography className="typo">
          <OpacityIcon className="icon" style={{ color: "#6FB2D2" }} />
          Humidity: {weatherData.main.humidity}%
        </Typography>
        <Typography className="typo">
          <ThermostatIcon className="icon" style={{ color: "#FF9F45" }} />
          Temp. Max: {weatherData.main.temp_max}°C
        </Typography>
        <Typography className="typo">
          <Brightness4Icon className="icon" style={{ color: "#FFBC80" }} />
          Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
        </Typography>
        <Typography className="typo">
          <HvacIcon className="icon" style={{ color: "#533E85" }} />
          Detail: {capitalizeFirstLetter(weatherData.weather[0].description)}
        </Typography>
        <Typography className="typo">
          <StormIcon className="icon" style={{ color: "#2FA4FF" }} />
          Wind gust: {weatherData.wind.gust} m/s
        </Typography>
        <Typography className="typo">
          <VisibilityIcon className="icon" style={{ color: "#488FB1" }} />
          Visibility: {weatherData.visibility / 1000} km
        </Typography>
      </div>
    </S.Container>
  ) : (
    <S.ContainerNoContent>
      <p>Hey! Which city do you want to get weather?</p>
      <img src={earthImg} alt="earth" />
    </S.ContainerNoContent>
  );
}

export default Information;

import React from "react";
import { Typography } from "@mui/material";
import * as S from "./Information.style";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FlareIcon from '@mui/icons-material/Flare';
import OpacityIcon from '@mui/icons-material/Opacity';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloudIcon from '@mui/icons-material/Cloud';

function Information({ weatherData }) {
  console.log(weatherData);

  return weatherData ? (
    <S.Container>
      <Typography>
        <LocationOnIcon />
        Location {weatherData.name} , {weatherData.sys.country}
      </Typography>
      <Typography>
        <FlareIcon />
        Temperature {weatherData.main.temp}°C
      </Typography>
      <Typography>
        <OpacityIcon />
        Humidity {weatherData.main.humidity}%
      </Typography>
      <Typography>
        <Brightness7Icon />
        Sunrise {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}
      </Typography>
      <Typography>
        <Brightness4Icon />
        Sunset {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
      </Typography>
      <Typography>
        <DehazeIcon />
        Conditon {weatherData.weather[0].main}
      </Typography>
      <Typography>
        <CloudIcon />
        Clouds {weatherData.clouds.all}{" "}
      </Typography>
    </S.Container>
  ) : (
    <S.ContainerNoContent>No Content</S.ContainerNoContent>
  );
}

export default Information;

/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import * as S from "./Form.style";
import { TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { getData } from "../../services/api";
import Information from "../Information/Information";

function Form() {
  const [weatherData, getWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [click, handleClick] = useState(false);

  useEffect(() => {
    const getWeather = async () => {
      city &&
        (await getData(city).then((response) => {
          getWeatherData(response.data);
          console.log(response.data);
        }));
    };

    getWeather();
    handleClick(false);
  }, [click]);

  const handleCityChange = (value) => {
    setCity(value);
  };

  return (
    <S.Container>
      <div className="header">
        <TextField
          className="text"
          size="small"
          id="outlined-basic"
          label="Which city do you want to get weather!"
          variant="outlined"
          onChange={(e) => handleCityChange(e.target.value)}
        />
        <Button
          className="btn"
          variant="outlined"
          onClick={() => handleClick(true)}
        >
          Search
        </Button>
      </div>
      <div className="body">
        <Information weatherData={weatherData} />
      </div>
    </S.Container>
  );
}

export default Form;

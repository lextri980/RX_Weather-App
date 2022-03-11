import React from "react";
import * as S from "./Form.style";
import { TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { getData } from "../../services/api";
import Information from "../Information/Information";

function Form() {
  const [weatherData, getWeatherData] = useState();
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [click, handleClick] = useState(false);

  useEffect(() => {
    const getWeather = async () => {
      city &&
        (await getData(city, country).then((response) => {
          getWeatherData(response.data);
          console.log(response.data);
        }));
    };

    getWeather();
    handleClick(false);
  }, [click]);

  const handleCityChange = (value) => {
    setCity(value);
    console.log(value);
  };
  const handleCountryChange = (value) => {
    setCountry(value);
    console.log(value);
  };

  return (
    <S.Container>
      <div className="header">
        <TextField
          className="text"
          size="small"
          id="outlined-basic"
          label="City"
          variant="outlined"
          onChange={(e) => handleCityChange(e.target.value)}
        />
        <TextField
          className="text"
          size="small"
          id="outlined-basic"
          label="Country"
          variant="outlined"
          onChange={(e) => handleCountryChange(e.target.value)}
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

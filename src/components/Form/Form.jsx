/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import * as S from "./Form.style";
import {
  TextField,
  Button,
  Autocomplete,
  createFilterOptions,
} from "@mui/material";
import { useState, useEffect } from "react";
import { getData } from "../../services/api";
import Information from "../Information/Information";
import cities from "cities.json";

function Form() {
  const [weatherData, getWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [click, handleClick] = useState(false);

  const OPTIONS_LIMIT = 10;
  const defaultFilterOptions = createFilterOptions();

  const filterOptions = (options, state) => {
    return defaultFilterOptions(options, state).slice(0, OPTIONS_LIMIT);
  };

  const handleCityChange = (value) => {
    setCity(value);
  };

  const onCityChange = (e, value) => {
    setCity(value.name);
  };

  useEffect(() => {
    const getWeather = async () => {
      city &&
        (await getData(city).then((response) => {
          getWeatherData(response.data);
        }));
    };
    getWeather();
    handleClick(false);
  }, [click]);

  return (
    <S.Container>
      <div className="header">
        <Autocomplete
          filterOptions={filterOptions}
          disablePortal
          id="combo-box-demo"
          className="text"
          options={cities}
          getOptionLabel={(option) => option.name}
          onChange={onCityChange}
          size="small"
          renderInput={(params) => (
            <TextField
              {...params}
              label="Which city do you want to get weather!"
              onChange={(e) => handleCityChange(e.target.value)}
            />
          )}
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

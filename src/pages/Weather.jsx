import React from "react";
import * as S from "./Weather.style";
import sunny from "../assets/img/backgrounds.jpg";
// import Form from "../components/Form/Form";
import Form from "../components/Form/Form";

function Weather() {
  return (
    <S.Container>
      <div className="left-side">
        <img src={sunny} alt="sunny" />
      </div>
      <div className="right-side">
        <Form />
      </div>
    </S.Container>
  );
}

export default Weather;

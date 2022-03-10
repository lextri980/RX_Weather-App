import React from "react";
import * as S from "./Weather.style";
import sunny from "../assets/img/sunny.jpg";

function Weather() {
  return (
    <S.Container>
      <div className="left-side">
        <img src={sunny} alt="sunny" />
      </div>
      <div className="right-side">
        
        </div>
    </S.Container>
  );
}

export default Weather;

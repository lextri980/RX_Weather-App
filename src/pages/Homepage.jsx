import React, { useState, useEffect } from "react";
import * as S from "./Homepage.style";
import moment from "moment";

function Homepage() {
  const getFormattedCurrentDate = () =>
    moment(new Date()).format("dddd, MMMM Do YYYY");
  const getFormattedCurrentHour = () => moment(new Date()).format("hh:mm:ss a");

  const [date, setDate] = useState(getFormattedCurrentDate());
  const [hour, setHour] = useState(getFormattedCurrentHour());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(getFormattedCurrentDate());
      setHour(getFormattedCurrentHour());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <S.Container>
      <div className="information">
        <p className="name">Hanoi</p>
        <p className="date">{date}</p>
        <p className="hour">{hour}</p>
      </div>
      <hr />
      <div className="cv">
        
      </div>
    </S.Container>
  );
}

export default Homepage;

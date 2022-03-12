import React, { useState, useEffect } from "react";
import * as S from "./Homepage.style";
import moment from "moment";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

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
      <div className="profile">
        <div className="author-1">
          <p className="title">Author 1</p>
          <p>Nguyen Tien Minh</p>
          <p>Student ID: 1801040000</p>
          <p>Class: 6C-18</p>
          <div className="contact">
            <FacebookIcon
              className="icon"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/profile.php?id=100023247083222"
                )
              }
            />
            <InstagramIcon
              className="icon-middle"
              onClick={() => window.open()}
            />
            <TwitterIcon className="icon" onClick={() => window.open()} />
          </div>
        </div>
        <div className="author-2">
          <p className="title">Author 2</p>
          <p>Name</p>
          <p>Student ID:</p>
          <p>Class: </p>
          <div className="contact">
            <FacebookIcon className="icon" onClick={() => window.open()} />
            <InstagramIcon
              className="icon-middle"
              onClick={() => window.open()}
            />
            <TwitterIcon className="icon" onClick={() => window.open()} />
          </div>
        </div>
      </div>
    </S.Container>
  );
}

export default Homepage;

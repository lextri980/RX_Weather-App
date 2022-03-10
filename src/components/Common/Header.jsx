import React from "react";
import * as S from "./Header.style";
import FacebookIcon from "@mui/icons-material/Facebook";

function Header({ title }) {
  const openFacebook = () => {
    window.open('https://www.facebook.com/profile.php?id=100023247083222')
  };

  return (
    <S.Container>
      <div className="wrapper">{title}</div>
      <div className="ico">
        <FacebookIcon fontSize="large" onClick={() => openFacebook()} />
      </div>
    </S.Container>
  );
}

export default Header;

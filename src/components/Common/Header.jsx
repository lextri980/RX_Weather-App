import React from "react";
import * as S from "./Header.style";

function Header({ title }) {
  return (
    <S.Container>
      <div className="wrapper">{title}</div>
    </S.Container>
  );
}

export default Header;

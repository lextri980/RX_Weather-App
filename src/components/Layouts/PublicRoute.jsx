import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Common/Header";
import Sidebar from "../Common/Sidebar";
import * as S from "./PublicRoute.style";

function PublicRoute() {
  const [title, setTitle] = useState("Homepage");

  return (
    <S.Container>
      <Sidebar title={title} setTitle={setTitle} />
      <div className="body">
        <Header title={title} />
        <Outlet />
      </div>
    </S.Container>
  );
}

export default PublicRoute;

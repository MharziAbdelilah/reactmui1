import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <header>
        <h1>MY Header</h1>
      </header>

      <Outlet />
    </>
  );
};

export default Root;

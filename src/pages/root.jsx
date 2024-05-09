
import SidBar from "Component/SidBar/SidBar";
import React from "react";
import { Outlet } from "react-router-dom";
import SidDrawer from "Component/sidDrawer/SidDrawer";


const drawerWidth = 250;

const Root = () => {

  return (
    <>
      <header>  
        <SidBar drWidth={drawerWidth} />  
        <SidDrawer drWidth={drawerWidth} />
      </header>

        <Outlet />
      
    </>
  );
};

export default Root;

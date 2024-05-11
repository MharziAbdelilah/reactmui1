
import SidBar from "Component/SidBar/SidBar";
import React from "react";
import { Outlet } from "react-router-dom";
import SidDrawer from "Component/sidDrawer/SidDrawer";
import { Box } from "@mui/material";


const drawerWidth = 240;

const Root = () => {

  return (
    <>
      <div>  
        <SidBar drWidth={drawerWidth} />  
        <SidDrawer drWidth={drawerWidth} />
      </div>
          <Box component="main" sx={{ minHeight:"91vh" , ml: `${drawerWidth}px` , display:"flex" , justifyContent:"center", alignItems:"center"}}>
            
              <Outlet /> 
             
          </Box>
    </>
  );
};

export default Root;

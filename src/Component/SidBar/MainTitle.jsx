import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import { useLocation } from 'react-router-dom';



function MainTitle(props) {

  const location = useLocation();

  const [text , setText] = useState("");

  useEffect(()=> {
    if(location.pathname == "/"){
      setText("Home page");

    }
    if(location.pathname == "/create"){
      setText("create page");

    }

    alert(location.pathname)
  }, [useLocation])


  return (
    <Typography variant="h6" color="initial">{text}</Typography>
  )
}

export default MainTitle


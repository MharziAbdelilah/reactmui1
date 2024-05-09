import React from 'react'
import { Avatar, Link , Typography ,Toolbar , AppBar } from '@mui/material';

function SidBar({drWidth , name}) {
  return (
    <AppBar position="fixed">
    <Toolbar>

      <Link href="/" sx={{flex:1,
         "&:hover": {fontSize:"1.35rem"} ,
         width: `calc(100% - ${drWidth}px)`, ml: `${drWidth}px`
         }
         
         } color={"inherit"}  variant='h6' underline='none'> My expenses</Link>

      <Typography mr={2} variant="body1" color={'inherit'}>Abdelilah Mharzi</Typography>

      <Avatar alt="Abdelilah mharzi" src="./images/1.png" />


    </Toolbar>
  </AppBar>
  )
}

export default SidBar
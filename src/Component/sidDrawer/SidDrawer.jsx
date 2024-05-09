import React from 'react'
import {Drawer , Toolbar ,Divider, ListItem, List, ListItemText, ListItemButton, ListItemIcon, } from '@mui/material';

import { Create, Home, Logout, Person, Settings } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


function SidDrawer({drWidth}) {

  const navigate = useNavigate();

  return (
    <Drawer
    sx={{
      width: `${drWidth}px`,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: `${drWidth}px`,
        boxSizing: 'border-box',
      },
    }}
    variant="permanent"
    anchor="left"
  >
    <Toolbar />
    <Divider />
    <List>
    <ListItem disablePadding>
            <ListItemButton onClick={() =>{
              navigate("/")
            }}>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() =>{
              navigate("/create")
            }}>
              <ListItemIcon>
                <Create />
              </ListItemIcon>
              <ListItemText primary="Create" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() =>{
              navigate("/profil")
            }}>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Profil" />
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding>
            <ListItemButton onClick={() =>{
              navigate("/settings")
            }}>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
    </List>
    <Divider />



      
  
  </Drawer>
  )
}

export default SidDrawer

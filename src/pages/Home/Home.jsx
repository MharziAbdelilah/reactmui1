//import SidBar from 'Component/SidBar/SidBar';
import { Paper, Typography, IconButton, Box } from '@mui/material';
import './Home.css'
import React from 'react';
import { Close } from '@mui/icons-material';

const Home = () => {


  return (
    <Box>
      {/* paper 1 */}
    <Paper sx={{ position:"relative",width:"366px" ,  display:"flex" , justifyContent:"space-between" , mt:"22px" , pt:"27px" , pb:"7px"}}>
      <Typography sx={{ml:"16px" , fontSize:"1.3em"}} variant="body1" color="initial">GYM</Typography>
      <Typography sx={{mr:"33px" , fontSize:"1.4em" , fontWeight:"500" }} variant="body1" color="initial">100 DH</Typography>
      <IconButton sx={{position:"absolute" , top:"0" , right:"0"}} >
      <Close></Close>
      </IconButton>
    </Paper>
    {/* paper 2 */}
    <Paper sx={{ position:"relative",width:"366px" ,  display:"flex" , justifyContent:"space-between" , mt:"22px" , pt:"27px" , pb:"7px"}}>
      <Typography sx={{ml:"16px" , fontSize:"1.3em"}} variant="body1" color="initial">GYM</Typography>
      <Typography sx={{mr:"33px" , fontSize:"1.4em" , fontWeight:"500" }} variant="body1" color="initial">100 DH</Typography>
      <IconButton sx={{position:"absolute" , top:"0" , right:"0"}} >
      <Close></Close>
      </IconButton>
    </Paper>

  {/* paper 3 */}
  <Paper sx={{ position:"relative",width:"366px" ,  display:"flex" , justifyContent:"space-between" , mt:"22px" , pt:"27px" , pb:"7px"}}>
      <Typography sx={{ml:"16px" , fontSize:"1.3em"}} variant="body1" color="initial">GYM</Typography>
      <Typography sx={{mr:"33px" , fontSize:"1.4em" , fontWeight:"500" }} variant="body1" color="initial">100 DH</Typography>
      <IconButton sx={{position:"absolute" , top:"0" , right:"0"}} >
      <Close></Close>
      </IconButton>
    </Paper>


      {/* paper 4 */}
      <Paper sx={{ position:"relative",width:"366px" ,  display:"flex" , justifyContent:"space-between" , mt:"22px" , pt:"27px" , pb:"7px"}}>
      <Typography sx={{ml:"16px" , fontSize:"1.3em"}} variant="body1" color="initial">GYM</Typography>
      <Typography sx={{mr:"33px" , fontSize:"1.4em" , fontWeight:"500" }} variant="body1" color="initial">100 DH</Typography>
      <IconButton sx={{position:"absolute" , top:"0" , right:"0"}} >
      <Close></Close>
      </IconButton>
    </Paper>

      {/* paper 5 */}
      <Paper sx={{ position:"relative",width:"366px" ,  display:"flex" , justifyContent:"space-between" , mt:"22px" , pt:"27px" , pb:"7px"}}>
      <Typography sx={{ml:"16px" , fontSize:"1.3em"}} variant="body1" color="initial">GYM</Typography>
      <Typography sx={{mr:"33px" , fontSize:"1.4em" , fontWeight:"500" }} variant="body1" color="initial">100 DH</Typography>
      <IconButton sx={{position:"absolute" , top:"0" , right:"0"}} >
      <Close></Close>
      </IconButton>
    </Paper>


    </Box>        
  );
}

export default Home;

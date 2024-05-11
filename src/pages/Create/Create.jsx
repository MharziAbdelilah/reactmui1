import TextField from "@mui/material/TextField";
import { Box, Button, InputAdornment, styled } from "@mui/material";
import "./Create.css";

import React from "react";
import { purple } from "@mui/material/colors";
import { ChevronRight } from "@mui/icons-material";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

const Create = () => {
  return (
    <Box component="form" sx={{ width: "380px" }}>
      <TextField
        fullWidth
        label="With normal TextField"
        sx={{ mt: "22px", width: "35ch", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">👉</InputAdornment>,
        }}f
        variant="filled"
      />

      <TextField
        fullWidth
        label="With normal TextField"
        sx={{ mt: "22px", width: "35ch", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />

      <ColorButton sx={{mt:"22px"}} variant="contained">
        Submit <ChevronRight />
      </ColorButton>
    </Box>
  );
};

export default Create;

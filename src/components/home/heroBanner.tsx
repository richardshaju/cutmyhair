import React from "react";
import Logo from "../../../public/img/CutMYHAIR.png";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, InputAdornment, TextField } from "@mui/material";

const HeroBanner = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${Logo.src})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "relative",
    width: "100%",
    height: "500px",
  };

  return (
    <Box sx={backgroundImageStyle}>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          pb: 4, // Padding bottom to add some space from the bottom
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Search my location"
          sx={{
            width: "565px",
            height: "45px",
            borderRadius: "50px",
            padding: "0",
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#D9D9D9",
              borderRadius: "50px",
              padding: "0 16px !important", 
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "& .MuiInputBase-input": {
                padding: "6px", 
              },
              "& .MuiInputBase-input::placeholder": {
                color: "black", // Set placeholder color to black
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{color:"black"}}/>
              </InputAdornment>
            ),
          }}
        />
        <Box
             sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              justifyContent: "flex-start",
              width: "565px",
              marginLeft:"25px",
            }}
        >
          <LocationOnIcon sx={{ mr: 1 }} />
          <span>Detect my location</span>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroBanner;

import { AppBar, Box, Button, Toolbar } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <AppBar
      sx={{
        height: {
          xs: "70px",
        },
        display: "flex",
        justifyContent: "center",
        padding: {
          xs: "0px 4px 0px 4px",
          sm: "0px 65px 0px 50px",
        },
      }}
    >
      <Toolbar>
        <Box
          sx={{
            width: { xs: "129px", sm: "184px" },
            height: { xs: "32px", sm: "46px" },
            objectFit: "contain",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Box>

        <Button
          sx={{
            marginLeft: "auto",
            background: "#000",
            width: { xs: "61px", sm: "90px", lg: "132px" },
            height: "40px",
            borderRadius: "20px",
          }}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

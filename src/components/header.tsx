"use client";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <AppBar
      sx={{
        height: {
          xs: "104px",
        },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          height: "45px",
          background: "black",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          padding: "0 10em",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "16px" }}>INR</Typography>
        <span>Book now to get a whopping 10% off</span>
        <span>India</span>
      </Box>
      <Box
        sx={{
          padding: "0 120px",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: { xs: "129px", sm: "184px" },
              height: { xs: "32px", sm: "46px" },
              objectFit: "contain",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {/* <img src="/logo.png" alt="logo" /> */}
            Logo services about us
          </Box>
          <Box>
            cart icon
            <Button
              sx={{
                background: "#000",
                width: { xs: "61px", sm: "90px", lg: "132px" },
                height: "40px",
                borderRadius: "20px",
              }}
              onClick={() => {
                router.push("/login");
              }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Header;

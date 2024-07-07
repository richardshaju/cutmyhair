"use client";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";
import Logo from "../../public/img/logo.jpg";
import CartIcon from "../../public/img/CartIcon.png";
import Image from "next/image";
import { TabButton } from "./header.style";

const Header = () => {
  const router = useRouter();
  const isLogged = typeof window !== 'undefined' ? localStorage.getItem("response") : null;

  return (
    <AppBar
      sx={{
        height: {
          xs: "104px",
        },
        display: "flex",
        justifyContent: "center",
        boxShadow: "none",
        borderBottom: "1px solid #000000",
      }}
    >
      <Box
        sx={{
          padding: "0 120px",
          background: "white",
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
            <Box sx={{ display: "flex", gap: "40px" }}>
              <a href="/"><h3 className="text-black font-semibold text-xl">CUT MY HAIR</h3></a>

            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "28px", alignItems: "center" }}> 
            <Button
              sx={{
                width: { xs: "61px", sm: "90px", lg: "132px" },
                height: "40px",
                borderRadius: "20px",
                color: "black",
              }}
              onClick={() => {
                if (isLogged) {
                  localStorage.removeItem("response");
                } else {
                  location.href = "/login";
                }
              }}
            >
              {isLogged ? "Logout" : "Login"}
            </Button>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Header;

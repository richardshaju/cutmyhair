"use client";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";
import Logo from "../../public/img/LOGO.png";
import CartIcon from "../../public/img/CartIcon.png";
import Image from "next/image";
import { TabButton } from "./header.style";

const Header = () => {
  const router = useRouter();
  const isLogged = localStorage.getItem("response");

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
              <Image
                width={100}
                height={100}
                src={Logo}
                alt="LOGO IMG"
                style={{ width: "65px" }}
              />{" "}
              <TabButton>services</TabButton>
              <TabButton>aboutus</TabButton>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "28px", alignItems: "center" }}>
            <Image
              width={30}
              height={30}
              src={CartIcon}
              alt="LOGO IMG"
              style={{ width: "20px", height: "20px" }}
            />{" "}
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
                  router.push("/login");
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

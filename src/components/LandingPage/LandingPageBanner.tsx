import React from "react";
import Logo from "../../../public/img/CutMYHAIR.png";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, InputAdornment, TextField } from "@mui/material";
import Image from "next/image";

const LandingPageBanner = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${Logo.src})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "relative",
    width: "100%",
    height: "400px",
  };

  return (
    <>
    <Box sx={backgroundImageStyle}>
    </Box>
    <div className="flex justify-center items-center flex-col">
        <p className="text-gray-500 text-lg mb-10">While others keep you waiting, we keep you stylish</p>
        <div className="w-[194px] h-[50px] flex justify-center items-center border-2 border-black hover:text-white hover:bg-black transition-colors">Hair Saloon</div>
        <Image width={500} height={425} src="/img/LandingPageImage.png" alt="Landing page Image"/>
    </div>

    </>
  );
};

export default LandingPageBanner;

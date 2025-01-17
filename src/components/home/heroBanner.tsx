"use client";
import React, { useEffect, useState } from "react";
import Logo from "../../../public/img/CutMYHAIR.png";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, InputAdornment, TextField } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { useRouter } from "next/navigation";

const backgroundImageStyle = {
  backgroundImage: `url(${Logo.src})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  position: "relative",
  width: "100%",
  height: "200px",
};

const HeroBanner = () => {
  interface Salon {
    _id: string;
    location: string;
    image: string; // Add the 'image' property
    name: string; // Add the 'name' property
  }

  const [salonList, setSalonList] = useState<Salon[]>([]);
  const [salons, setSalons] = useState<Salon[]>([]);
  const [value, setValue] = useState("");
  const router = useRouter();
  const isLogged = localStorage.getItem("response");

  const handleChange = (e: any) => {
    const searchTerm = e.target.value.toLowerCase();
    setValue(searchTerm);

    if (searchTerm === "") {
      setSalons(salonList);
    } else {
      const filtered = salonList?.filter((saloon) =>
        saloon?.location?.toLowerCase().includes(searchTerm)
      );
      setSalons(filtered);
    }
  };

  console.log(value, "value");

  useEffect(() => {
    axios
      .get("https://cutmyhair.onrender.com/saloon/getSaloons")
      .then((response) => {
        console.log(response.data);
        setSalonList(response.data.result);
        setSalons(response.data.result);
      })
      .catch((error) => {
        console.error("Error fetching saloons:", error);
      });
  }, []);

  return (
    <>
      <Box sx={backgroundImageStyle}>
        <Box
          sx={{

            bottom: 0,
          
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
            onChange={handleChange}
            value={value}
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
                  <SearchIcon sx={{ color: "black" }} />
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
              marginLeft: "25px",
            }}
          >

          </Box>
        </Box>
      </Box>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {salons.map((card, index): any => (
            <div
              key={index}
              className="card-component"
              onClick={() => {
                if (isLogged) {
                  router.push(`/salon/${card?._id}`);
                } else {
                  router.push("/login");
                }
              }}
            >
              <div className="image-container">
                <Image
                  src={card?.image}
                  alt="Image of a saloon"
                  width={10}
                  height={10}
                  layout="responsive"
                />
              </div>
              <div className="bg-black text-white text-center pt-8 card-content flex flex-col pb-10">
                <h1 className="saloon-heading text-xl">{card?.name}</h1>
                <div className="flex gap-3 justify-center">
                  <MapPin />
                  <p className="saloon-address">{card?.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroBanner;

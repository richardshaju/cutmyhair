"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
  Box,
} from "@mui/material";
import { usePathname } from "next/navigation";
import axios from "axios";

const Salon = () => {
  const pathname = usePathname();
  const [serviceList, setServiceList] = useState([]);
  const getIdFromUrl = (url: any) => {
    const pathSegments = pathname.split("/");
    return pathSegments[pathSegments.length - 1];
  };
  const id = getIdFromUrl(pathname);

  const handleClick = () => {
    console.log("clicked", id);
    
  };
  // Body for the POST request
  const data = {
    _id: id,
  };

  //   console.log(data?._id);
  console.log(pathname, "path name");

  useEffect(() => {
    axios
      .post("https://cutmyhair.onrender.com/saloon/getServices", data)
      .then((response) => {
        console.log(response.data);
        setServiceList(response.data.result.services);
      })
      .catch((error) => {
        console.error("Error fetching saloons:", error);
      });
  }, []);

  console.log(serviceList, "serviceList");

  return (
    <Container>
      <Box my={4} textAlign="center">
        <Typography variant="h4" gutterBottom>
          Services
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {serviceList.map((prod): any => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={prod?._id}>
            <Card onClick={handleClick}>
              <CardMedia
                component="img"
                height="140"
                image={prod?.image}
                alt={`Image of ${prod?.name}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {prod?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {prod?.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Salon;

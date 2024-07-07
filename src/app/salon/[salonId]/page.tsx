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
import Link from "next/link";

const Salon = () => {
  const pathname = usePathname();
  const [serviceList, setServiceList] = useState<any[]>([]);
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
            <Link href={`/salon/${id}/${prod?._id}`}>
            <Card onClick={handleClick}>
              <CardMedia
                component="img"
                height="140"
                image={prod.data?.image}
                alt={`Image of ${prod.data?.name}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {prod?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {prod.data?.desc}
                </Typography>
              </CardContent>
            </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Salon;

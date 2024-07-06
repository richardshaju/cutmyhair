import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
  Box,
} from "@mui/material";

const services = [
  {
    id: 1,
    name: "Salon A",
    desc: "New York",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Salon B",
    desc: "Los Angeles",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Salon C",
    location: "Chicago",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Salon D",
    desc: "Houston",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Salon E",
    desc: "Phoenix",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Salon F",
    desc: "Philadelphia",
    image: "https://via.placeholder.com/150",
  },
];

const Salon = () => {
  return (
    <Container>
      <Box my={4} textAlign="center">
        <Typography variant="h4" gutterBottom>
          Services
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {services.map((prod) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={prod.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={prod.image}
                alt={`Image of ${prod.name}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {prod.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {prod.desc}
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

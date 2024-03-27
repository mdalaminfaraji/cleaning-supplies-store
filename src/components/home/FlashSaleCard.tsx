import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";
import { ArrowRight } from "@mui/icons-material";

export default function FlashSaleCard() {
  return (
    <Container sx={{ my: 5 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Flash Sale
        </Typography>
        <Button variant="contained" endIcon={<ArrowRight />}>
          View All
        </Button>
      </Box>
    </Container>
    // <Card sx={{ maxWidth: 345, padding: "10px" }}>
    //   <CardMedia
    //     component="img"
    //     alt="green iguana"
    //     height="200"
    //     image="https://th.bing.com/th/id/OIP.HA5p6mO-HkItjbWnywlJTAHaE8?w=243&h=180&c=7&r=0&o=5&pid=1.7"
    //   />
    //   <CardContent>
    //     <Typography gutterBottom variant="h5" component="div">
    //       Lizard
    //     </Typography>
    //     <Typography variant="body2" color="text.secondary">
    //       Lizards are a widespread group of squamate reptiles, with over 6,000
    //       species, ranging across all continents except Antarctica
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small">Share</Button>
    //     <Button size="small">Learn More</Button>
    //   </CardActions>
    // </Card>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@mui/icons-material";
const itemData = [
  {
    img: "https://www.seriouseats.com/thmb/ROsM-LnAKTxHkF9Fx6yE8Jsi4Kk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SERIOUS-EATS-staff-favorites-cleaning-products-01-37a9f72fc2d64b20a832bc7ef1e96fc5.jpg",
    title: "cleaners",
    author: "Kitchen Cleaners",
  },
  {
    img: "https://cdn.thewirecutter.com/wp-content/media/2024/01/laundry-detergent-2048px-5523-2x1-1.jpg?auto=webp&quality=75&crop=1.91:1&width=1200",
    title: "Laundry",
    author: "Laundry Products",
  },
  {
    img: "https://cdn.thewirecutter.com/wp-content/media/2023/02/dishsoap-2048px-image08.jpg",
    title: "DishWashing",
    author: "DishWashing Products",
  },
  {
    img: "https://crewcare.co.nz/admin_assets/blog/different-types-floor-polish.jpg",
    title: "Floor",
    author: "Floor Cleaners",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
    author: "Darren Richardson",
  },
  {
    img: "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2018/05/LINK-TRAFFIC-1200x675.jpg",
    title: "Metal",
    author: "Metal Cleaners",
  },
];
export default function TopCategories() {
  return (
    <Container>
      <Box sx={{ my: 2 }}>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Top Categories
        </Typography>
        <Typography variant="body2" sx={{ textAlign: "center" }}>
          Products suitable for multiple cleaning tasks, offering versatility
          and convenience.
        </Typography>
      </Box>
      <Box sx={{ maxWidth: 1180, margin: "0 auto" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          direction={{ xs: "column", sm: "row" }}
          justifyContent="center"
          alignItems="center"
        >
          {itemData.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.img}>
              <Link
                href={`all-products?category=${item.author}`}
                style={{ textDecoration: "none" }}
              >
                <Image
                  src={`${item.img}`}
                  alt={item.title}
                  width={350}
                  height={300}
                  style={{ padding: "5px" }}
                />
                <Typography sx={{ padding: "5px" }}>{item.author}</Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ textAlign: "center", my: 4 }}>
        <Link href="all-products">
          <Button variant="contained" endIcon={<ArrowRight />}>
            View All
          </Button>
        </Link>
      </Box>
    </Container>
  );
}

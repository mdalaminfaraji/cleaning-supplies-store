import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { flashCardType } from "@/components/home/FlashSaleCard";

export async function generateStaticParams() {
  const resProducts = await fetch(
    `https://cleaning-supplies-store-backend.vercel.app/api/v1/get-all-products`
  );
  const { data } = await resProducts.json();

  return data
    ?.slice(0, 9)
    .map((product: flashCardType) => ({ id: product._id }));
}
async function getProductDetail(id: string) {
  const resData = await fetch(
    `https://cleaning-supplies-store-backend.vercel.app/api/v1/get-flash-sale-products/${id}`
  );
  if (!resData.ok) {
    throw new Error("Failed to fetch data");
  }
  return resData.json();
}

export default async function productDetailsPage({ searchParams }: any) {
  const { data } = await getProductDetail(searchParams.id);

  return (
    <Container sx={{ my: 5 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <div
            style={{ position: "relative", width: "100%", paddingTop: "100%" }}
          >
            <Image
              src={data.image}
              alt={data.name}
              layout="fill" // Fill the container
              // objectFit="cover" // Cover container while maintaining aspect ratio
              style={{ borderRadius: "10px" }}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4">{data.name}</Typography>
          <Box sx={{ display: " flex", mt: 1, mb: 5 }}>
            <Typography
              sx={{
                borderRight: "2px solid gray",

                pr: 2,
              }}
            >
              ${data.price}
            </Typography>
            <Typography
              sx={{
                display: "inline-flex",
                color: "gray",
                px: 2,
                alignItems: " center",
              }}
            >
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </Typography>
            <Typography>(32 Reviews)</Typography>
          </Box>
          <Box sx={{ display: "flex", mb: 3 }}>
            <Typography
              sx={{
                borderRight: "2px solid gray",

                pr: 2,
              }}
            >
              Category: {data.category}
            </Typography>
            <Typography sx={{ px: 2 }}>Brand: {data.brand}</Typography>
          </Box>
          <Typography>Description</Typography>
          <Typography>{data.description}</Typography>
          <Typography sx={{ my: 2 }}>
            Discount Amount: {data.discount}%
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

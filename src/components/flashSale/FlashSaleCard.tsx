import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Container, Grid } from "@mui/material";
import { ArrowRight } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
export type flashCardType = {
  _id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  brand: string;
  ratings: number;
  discount: number;
  createdAt: string;
};

export default function FlashSaleCard({ data }: { data: flashCardType[] }) {
  return (
    <Container sx={{ my: 5 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }} gutterBottom>
          Flash Sale Product
        </Typography>
      </Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {data?.map((flashCardData) => {
          return (
            <Grid key={flashCardData._id} item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  maxWidth: 345,
                  padding: "10px",
                  mx: "auto",
                  position: "relative",
                }}
              >
                <Typography
                  sx={{
                    position: "absolute",
                    backgroundColor: "grey",
                    px: 1,
                    borderRadius: "20px",
                    color: "white",
                    fontSize: "12px",
                    margin: "5px",
                  }}
                >
                  -{flashCardData.discount ? flashCardData.discount : "0"} %
                </Typography>
                <Image
                  height={250}
                  width={345}
                  src={flashCardData?.image}
                  alt={flashCardData?.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {flashCardData?.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {flashCardData?.description.slice(0, 150)}...
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ textAlign: "center", width: "150px", mx: "auto" }}
                >
                  <Link href={`/product-details?id=${flashCardData._id}`}>
                    {" "}
                    <Button size="small">view Details</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

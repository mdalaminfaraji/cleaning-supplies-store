import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

async function getAllProducts(query) {
  const resProducts = await fetch(
    `http://localhost:5000/api/v1/all-product?category=${query}`,
    { cache: "no-store" }
  );

  if (!resProducts.ok) {
    throw new Error("Failed to fetch data");
  }
  return resProducts.json();
}

export default async function allProducts({ searchParams }) {
  const { category } = searchParams;
  const data = await getAllProducts(category);
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {data?.data?.map((flashCardData) => {
        return (
          <Grid key={flashCardData._id} item xs={12} sm={6}>
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
                -{flashCardData.discount} %
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
  );
}

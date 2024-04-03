import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { flashCardType } from "./FlashSaleCard";
import Link from "next/link";
import { ArrowRight } from "@mui/icons-material";
import Image from "next/image";

export default function PopularProducts({
  products,
}: {
  products: flashCardType[];
}) {
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ maxWidth: "500px" }}>
          <Typography>Most Popular Products</Typography>
          <Typography variant="caption">
            These categories offer a diverse selection of cleaning supplies to
            cater to various cleaning needs for both residential and commercial
            purposes
          </Typography>
        </Box>
        <Link href="flash-sale">
          <Button variant="contained" endIcon={<ArrowRight />}>
            View All
          </Button>
        </Link>
      </Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {products?.slice(0, 6).map((flashCardData) => {
          return (
            <Grid key={flashCardData._id} item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345, padding: "10px", mx: "auto" }}>
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
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

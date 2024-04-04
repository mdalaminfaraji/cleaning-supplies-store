import { ArrowRight } from "@mui/icons-material";
import { Box, Container, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
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
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Flash Sale
        </Typography>
        <Link href="flash-sale">
          <Button variant="contained" endIcon={<ArrowRight />}>
            View All
          </Button>
        </Link>
      </Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {data?.slice(0, 6).map((flashCardData) => {
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
                  <Link href={`/product-details?id=${flashCardData._id}`}>
                    {" "}
                    <Button size="small">Learn More</Button>
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

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";
const brandsAndCategories = [
  "Kitchen Cleaners",
  "Laundry Products",
  "Dishwashing Products",
  "Fabric Care",
  "Floor Cleaners",
  "Metal Cleaners",
];
// const randomSelection = brandsAndCategories
//   .sort(() => 0.5 - Math.random())
//   .slice(0, 6);
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <Container maxWidth="lg" sx={{ my: "60px" }}>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={3} lg={3}>
          <Card
            variant="outlined"
            sx={{
              display: { xs: "none", md: "block" },
              maxHeight: "calc(100vh - 110px)",
              //   bgcolor: "black",
              overflow: "hidden",
              position: "sticky",
              top: "100px",
            }}
          >
            <Box
              sx={{
                maxWidth: "140px",
                p: "20px 0",
                ml: "auto",
                mr: "auto",
              }}
            >
              <Link href="/">dfgd</Link>
            </Box>
            <CardContent sx={{ pt: 0 }}>
              {brandsAndCategories.map((item) => (
                <Typography key={item}>
                  <Link
                    href={`/all-products?category=${encodeURIComponent(item)}`}
                    key={item}
                  >
                    <Button>{item}</Button>
                  </Link>
                </Typography>
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={9} lg={9}>
          <Card variant="outlined">
            <CardContent>{children}</CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

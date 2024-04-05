import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import logo from "../../../../public/images/logo.jpeg";
import Image from "next/image";
import Link from "next/link";
const brandsAndCategories = [
  "Kitchen Cleaners",
  "Laundry Products",
  "Dishwashing Products",
  "Fabric Care",
  "Floor Cleaners",
  "Metal Cleaners",
];

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
              overflow: "scroll",
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
              <Link href="/" style={{ textAlign: "center" }}>
                <Image src={logo} alt="Logo" height={50} width={100} />
              </Link>
            </Box>
            <CardContent sx={{ pt: 0 }}>
              <Typography sx={{ borderLeft: "2px solid grey", pl: 2, mb: 2 }}>
                Category/Brands
              </Typography>
              {brandsAndCategories.map((item) => (
                <Typography key={item}>
                  <Link
                    href={`/all-products?category=${encodeURIComponent(item)}`}
                    key={item}
                  >
                    <Button sx={{ color: "grey" }}>{item}</Button>
                  </Link>
                </Typography>
              ))}
              <Typography sx={{ borderLeft: "2px solid grey", pl: 2, my: 2 }}>
                Ratting
              </Typography>
              {[1, 2, 3, 4, 5].map((ratting) => (
                <Typography key={ratting} sx={{ color: "grey" }}>
                  <Link href={`/all-products?ratting=${ratting}`}>
                    <Checkbox />
                  </Link>{" "}
                  {ratting} Star
                </Typography>
              ))}
              <Typography sx={{ borderLeft: "2px solid grey", pl: 2, my: 2 }}>
                Price Range
              </Typography>
              {[
                "$5.00 - $10.00",
                "$10.00 - $15.00",
                "$15.00-$20.00",
                "$20.00-$25.00",
                "$30.00-$40.00",
              ].map((price, index) => (
                <Typography key={index} sx={{ color: "grey" }}>
                  <Link href={`/all-products?ratting=${price}`}>
                    <Checkbox />
                  </Link>{" "}
                  {price}
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

import { Box, Button, Container, Typography } from "@mui/material";
import { flashCardType } from "./FlashSaleCard";
import Link from "next/link";
import { ArrowRight } from "@mui/icons-material";

export default function PopularProducts({
  products,
}: {
  products: flashCardType[];
}) {
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography>Most Popular Products</Typography>
          <Typography>
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
    </Container>
  );
}

import { Container, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import image1 from "../../../public/images/s-1.png";
import image2 from "../../../public/images/s-2.png";
import image3 from "../../../public/images/s-3.png";
import image4 from "../../../public/images/s-4.png";
import image5 from "../../../public/images/s-1.png";
import image6 from "../../../public/images/s-6.png";

export default function SpencerComponent() {
  return (
    <Container sx={{ my: 4 }}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        <Grid item xs={6} sm={4} md={2}>
          <Image src={image1} alt="spencer1" width={100} height={50} />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Image src={image2} alt="spencer2" width={100} height={50} />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Image src={image3} alt="spencer3" width={100} height={50} />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Image src={image4} alt="spencer4" width={100} height={50} />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Image src={image5} alt="spencer5" width={100} height={50} />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Image src={image6} alt="spencer6" width={100} height={50} />
        </Grid>
      </Grid>
    </Container>
  );
}

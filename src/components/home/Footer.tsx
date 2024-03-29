import React from "react";
import { Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Grid container sx={{ bgcolor: "#333", color: "white", py: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="body1" align="center">
            Column 1
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="body1" align="center">
            Column 2
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="body1" align="center">
            Column 3
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="body1" align="center">
            Column 4
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;

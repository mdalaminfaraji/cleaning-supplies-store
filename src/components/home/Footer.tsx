import React from "react";
import {
  Button,
  Card,
  Divider,
  FormControl,
  Grid,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Card sx={{ background: "grey", color: "white" }}>
      <Grid
        container
        sx={{
          py: 3,
          px: 5,
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} sm={6} md={3} sx={{ px: 2 }}>
          <Typography variant="h6" sx={{ pl: 2 }}>
            Top Categories
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="   Kitchen Cleaners" />
            </ListItem>
            <ListItem>
              <ListItemText primary="   Metal Cleaners" />
            </ListItem>
            <ListItem>
              <ListItemText primary="    Floor Cleaners" />
            </ListItem>
            <ListItem>
              <ListItemText primary=" Fabric Care" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Dishwashing Products" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Laundry Products" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{ px: 2 }}>
          <Typography variant="h6" sx={{ pl: 2 }}>
            Trending Products
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary=" Oven Cleaner Spray" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Laundry Detergent" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Dishwasher Tablets" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Dishwashing Liquid" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Dish Soap Bar" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{ px: 2 }}>
          <Typography variant="h6" sx={{ pl: 2 }}>
            Customer Care
          </Typography>
          <List>
            <ListItem button component="a" href="/">
              <ListItemText primary="FAQs" />
            </ListItem>
            <ListItem button component="a" href="mailto:support@example.com">
              <ListItemText primary="Email Support" />
            </ListItem>
            <ListItem button component="a" href="tel:+1234567890">
              <ListItemText primary="Phone: +1 (234) 567-890" />
            </ListItem>
            <ListItem
              button
              component="a"
              href="https://www.facebook.com/example"
            >
              <ListItemText primary="Facebook" />
            </ListItem>
            <ListItem button component="a" href="https://twitter.com/example">
              <ListItemText primary="Twitter" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{ px: 2 }}>
          <Typography variant="h6" sx={{ pl: 2 }} align="left">
            Contact With Us
          </Typography>
          <form>
            <FormControl sx={{ my: 1 }} fullWidth>
              <TextField
                name="name"
                label="Your Name"
                variant="outlined"
                size="small"
                required
                sx={{
                  mx: 2,
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white", // Custom border color
                    },
                    "& input": {
                      color: "white", // Custom text color
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "white", // Custom label color
                  },
                }}
              />
            </FormControl>
            <FormControl sx={{ my: 1 }} fullWidth>
              <TextField
                name="email"
                label="Your Email"
                variant="outlined"
                size="small"
                required
                sx={{
                  mx: 2,
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white", // Custom border color
                    },
                    "& input": {
                      color: "white", // Custom text color
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "white", // Custom label color
                  },
                }}
              />
            </FormControl>
            <FormControl sx={{ my: 1 }} fullWidth>
              <TextField
                name="message"
                label="Your Message"
                size="small"
                multiline
                rows={4}
                variant="outlined"
                required
                sx={{
                  mx: 2,
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white", // Custom border color
                    },
                    "& input": {
                      color: "white", // Custom text color
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "white", // Custom label color
                  },
                }}
              />
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ display: "block", mx: 2 }}
            >
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
      <Divider sx={{ my: 4 }}>CopyRight @ 2024 Md. Alamin Faraji</Divider>
    </Card>
  );
};

export default Footer;

import {
  Avatar,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
async function getAllProducts() {
  const resProducts = await fetch(
    `https://cleaning-supplies-store-backend.vercel.app/api/v1/get-all-products`,
    { cache: "no-store" }
  );

  if (!resProducts.ok) {
    throw new Error("Failed to fetch data");
  }
  return resProducts.json();
}
export default async function productsPage() {
  const { data } = await getAllProducts();

  return (
    <Box sx={{ fontSize: "90%" }} className="table-responsive">
      <Table
        aria-label="basic table"
        className="table table-sm table-striped"
        sx={{
          fontSize: "90%",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Product Image</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Product Name</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Product price</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Discount Amount</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Category</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Brand</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length > 0 ? (
            data?.map(
              ({ name, image, price, category, brand, discount, _id }: any) => {
                return (
                  <TableRow
                    hover
                    key={_id}
                    sx={{
                      ".MuiListItem-root": {
                        display: "flex",
                        columnGap: "5px",
                        svg: {
                          flexShrink: "0",
                        },
                      },
                    }}
                  >
                    <TableCell>
                      <Avatar src={image} alt={name} />
                    </TableCell>
                    <TableCell>{name}</TableCell>
                    <TableCell>${price}</TableCell>
                    <TableCell>{discount}%</TableCell>
                    <TableCell>{category}</TableCell>
                    <TableCell>{brand}</TableCell>
                  </TableRow>
                );
              }
            )
          ) : (
            <TableRow>
              <TableCell
                colSpan={6}
                sx={{ color: "extend.red3", textAlign: "center" }}
              >
                Not Found data
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Box>
  );
}

import FlashSaleCard from "@/components/flashSale/FlashSaleCard";
import React from "react";
async function fetchFlashCardData() {
  const resData = await fetch(
    "http://localhost:5000/api/v1/get-flash-sale-products"
  );
  if (!resData.ok) {
    throw new Error("Failed to fetch data");
  }
  return resData.json();
}
export default async function flashSalePage() {
  const data = await fetchFlashCardData();
  return <FlashSaleCard data={data?.data} />;
}

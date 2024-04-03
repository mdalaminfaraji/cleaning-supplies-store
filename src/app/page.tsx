import Banner from "@/components/home/Banner";
import FlashSaleCard from "@/components/home/FlashSaleCard";
import PopularProducts from "@/components/home/PopularProducts";

async function fetchFlashCardData() {
  const resData = await fetch(
    "http://localhost:5000/api/v1/get-flash-sale-products",
    { next: { revalidate: 30 } }
  );
  if (!resData.ok) {
    throw new Error("Failed to fetch data");
  }

  return resData.json();
}
async function fetchPopularProduct() {
  const resPopularProducts = await fetch(
    "http://localhost:5000/api/v1/get-trending-products",
    { next: { revalidate: 30 } }
  );
  if (!resPopularProducts.ok) {
    throw new Error("Failed to fetch data");
  }
  return resPopularProducts.json();
}
export default async function Home() {
  const flashData = fetchFlashCardData();
  const popularProductsData = fetchPopularProduct();
  const [data, popularProduct] = await Promise.all([
    flashData,
    popularProductsData,
  ]);
  return (
    <>
      <Banner />
      <FlashSaleCard data={data?.data} />
      <PopularProducts products={popularProduct.data} />
    </>
  );
}

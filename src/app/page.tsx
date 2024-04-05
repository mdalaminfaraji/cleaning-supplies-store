import Banner from "@/components/home/Banner";
import FlashSaleCard from "@/components/home/FlashSaleCard";
import Footer from "@/components/home/Footer";
import PopularProducts from "@/components/home/PopularProducts";
import SpencerComponent from "@/components/home/Sponsers";
import TopCategories from "@/components/home/TopCategories";
import Navbar from "@/components/shared/navbar/Navbar";

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
      <Navbar />
      <Banner />
      <FlashSaleCard data={data?.data} />
      <TopCategories />
      <PopularProducts products={popularProduct.data} />
      <SpencerComponent />
      <Footer />
    </>
  );
}

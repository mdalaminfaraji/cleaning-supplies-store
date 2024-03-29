import Banner from "@/components/home/Banner";
import FlashSaleCard from "@/components/home/FlashSaleCard";

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

export default async function Home() {
  const data = await fetchFlashCardData();
  return (
    <>
      <Banner />
      <FlashSaleCard data={data?.data} />
    </>
  );
}

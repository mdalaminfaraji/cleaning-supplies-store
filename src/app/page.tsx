import Banner from "@/components/home/Banner";
import FlashSaleCard from "@/components/home/FlashSaleCard";

async function fetchFlashCardData() {
  const resData = await fetch(
    "http://localhost:5000/api/v1/get-flash-sale-products",
    {}
  );
}

export default function Home() {
  return (
    <>
      <Banner />
      <FlashSaleCard />
    </>
  );
}

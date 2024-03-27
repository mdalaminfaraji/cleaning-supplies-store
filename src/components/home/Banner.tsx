"use client";
import banner1 from "../../../public/images/bannerp1.png";
import banner2 from "../../../public/images/bannerp2.png";
import banner3 from "../../../public/images/bannerp3.png";
import banner4 from "../../../public/images/bannerp4.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../app/page.module.css";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="banner">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 6000 }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={banner3}
            alt="image"
            style={{ width: "100%", height: "auto" }}
            sizes="100vw"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            style={{ width: "100%", height: "auto" }}
            sizes="100vw"
            src={banner4}
            alt="image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            style={{ width: "100%", height: "auto" }}
            sizes="100vw"
            src={banner2}
            alt="image"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

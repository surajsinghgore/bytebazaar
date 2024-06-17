"use client"
import style from "./style.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";
export default function page() {
  return (
    <>
      {/* // banner 1 */}
      <div className={style.swiper_container}>

      <Swiper
        spaceBetween={10}
        centeredSlides
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Autoplay]}
        
      >
        <SwiperSlide>
          <div className={style.banner1}>
            <div className={style.details}>
              <h5>AirPods Collection</h5>
              <h1>Bluetooth Earphone</h1>
              <p>
                Bluetooth earbuds: Wireless, convenient, compact, for music and
                calls, hands-free, with built-in controls.
              </p>
              <button>Shop Now</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={style.banner1 + " " + style.banner2}>
            <div className={style.details + " " + style.details2}>
              <h5>New Collection</h5>
              <h1>Bluetooth Speaker</h1>
              <p>
                Bluetooth speakers are wireless audio devices that use Bluetooth
                technology to connect to various devices.
              </p>
              <button>Shop Now</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={style.banner1 + " " + style.banner3}>
            <div className={style.details}>
              <h5>Best Selling</h5>
              <h1>Tablet with Pen</h1>
              <p>
                Tablet with pen: Precision writing and drawing, digital
                creativity, seamless interaction, portable productivity tool.
              </p>
              <button>Shop Now</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}

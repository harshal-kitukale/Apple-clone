import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./AccessoriesSlider.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Image } from "@chakra-ui/react";
// import required modules
import { Pagination } from "swiper";
import { Text } from "@chakra-ui/react";
import truck from "../UtkarshImages/truck.png";
import device from "../UtkarshImages/device.png";
import credit from "../UtkarshImages/credit.png";
import smile from "../UtkarshImages/smile.png";
import apple from "../UtkarshImages/apple_color.png";
import applePay from "../UtkarshImages/applePay.png";
export default function AccessoriesSlider() {
  return (
    <div className="div_apple">
        <br/>
        <br/>
      <Text className="accessories_span_store">
        The Apple Store difference.
        <span className="accessories_text">
          Even more reasons to shop with us
        </span>
      </Text>
      <br />
      <br />
      <br />
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="box_shadow_property">
          <div className="slider_div">
            <Image className="truck_images" src={truck} alt="truck" />
            <Text className="Text_color_full">
              Enjoy <span style={{ color: "#68CC45" }}>two-hour delivery</span>{" "}
              from an Apple Store,
              <span style={{ color: "#68CC45" }}>free delivery,</span>or{" "}
              <span>easy pickup</span>
            </Text>
          </div>
        </SwiperSlide>
        <SwiperSlide   className="box_shadow_property"  >
          <div className="slider_div">
            <Image className="truck_images" src={credit} alt="truck" />
            <Text className="Text_color_full">
              Pay in full or{" "}
              <span style={{ color: "#68CC45" }}>pay over time</span>.Your
              choice
            </Text>
          </div>
        </SwiperSlide>
        <SwiperSlide    className="box_shadow_property"   >
          <div className="slider_div">
            <Image className="truck_images" src={device} alt="truck" />
            <Text className="Text_color_full">
              <span style={{ color: "#AC39FF" }}>
                Trade in Your current device
              </span>{" "}
              from an Apple Store, Get credit toward a new one.
            </Text>
          </div>
        </SwiperSlide>
        <SwiperSlide   className="box_shadow_property"   >
            <div  className="slider_div"  >
          <Image className="truck_images" src={smile} alt="truck" />
          <Text className="Text_color_full">
            Make them yours.
            <span style={{ color: "#007AFF" }}>
              Engrave a mix of emoji,names,and numbers for free,
            </span>
          </Text>
          </div>
        </SwiperSlide>
        <SwiperSlide    className="box_shadow_property"    >
          <div className="slider_div">
            <Image className="truck_images" src={apple} alt="truck" />
            <Text className="Text_color_full">
              <span style={{ color: "#AC39FF" }}>Customize your Mac</span> and
              create your own style of Apple Watch
            </Text>
          </div>
        </SwiperSlide>
        <SwiperSlide      className="box_shadow_property"  >
          <div className="slider_div">
            {" "}
            <Image className="truck_images" src={applePay} alt="truck" />
            <Text className="Text_color_full">
              Get a<span style={{ color: "#007AFF" }}>personalized</span>
              shopping experience in,
              <span style={{ color: "#007AFF" }}>Apple Store app.</span>
            </Text>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
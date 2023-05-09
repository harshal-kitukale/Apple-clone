import React, { useEffect } from "react";
import "../UtkarshIpad/ipad.css";
import { Image, Box, Text, Flex, Button, Divider } from "@chakra-ui/react";
import IpadMini from "../UtkarshImages/ipad_mini.png";
import macpro from "../UtkarshImages/macpro.png";
import Chips from "../UtkarshImages/Chips.png";
import take from "../UtkarshImages/take.png";
import Music from "../UtkarshImages/Music.png";
import Arcade from "../UtkarshImages/Arcade.png";
import education from "../UtkarshImages/education.png";
import EducationHello from "../UtkarshImages/EducationHello.png";

import AccessoriesSlider from "../UtkarshSlider/AccessoriesSlider";
import { useParams } from "react-router-dom";
import axios from "axios";

const Generic = () => {
const {category}=useParams()
console.log(category)
  const getCat=()=>{
    // dispatch(productsRequest());
    axios
      .get(`http://localhost:8080/product/search?category=${category}`)
      .then((res) => {
        // dispatch(getProductsSuccess(res.data));
        console.log(res.data)
      })
      .catch((err) => console.log(err))
  }
useEffect(()=>{
  getCat()
},[])
  return (
    <div style={{ backgroundColor: "rgb(255, 255, 255)" }}>
      <Box className="free_box">
        <Text className="sign_text">
          Get 3% Daily Cash back with Apple carc. And pay for your new ipad over
          12 months, interest-free when you choose to check out with apple card
          monthly installments.
          <br />
          <span style={{ color: "blue" }}> * Learn More</span>
        </Text>
      </Box>

      {/* //Which Product is Add */}

      <br />
      <br />
      <br />
      <Box className="chips_set">
        <Image className="chips_image" src={Chips} alt="chips" />
      </Box>
      <Box className="take_box">
        <Image width={"100%"} src={take} alt={"takle"} />
      </Box>
      <br />
      <br />
      <Box className="box3">
        <br />
        <Text className="ipad_essentials">Apple essentials Products</Text>
        <br />
        <Flex justifyContent={"space-around"} className="flex_apple_pencil">
          <Box>
            <h2 className="applepencil" color="#1d1d1f">
              Apple Pencil
            </h2>

            <p className="applepencil">Dream it up. Jot it down</p>

            <Flex justifyContent={"center"}>
              <span className="appleshop" textAlign="center" color=" #06c">
                Shop ➡️{" "}
              </span>
              <span className="appleshop" textAlign="center" color=" #06c">
                Learn More ➡️
              </span>
            </Flex>
            <br />
            <Divider />
            <Image
              className="figure"
              src={
                "https://www.apple.com/v/ipad/home/cd/images/overview/apple_pencil__ekq506kmmys2_medium_2x.jpg"
              }
              alt="figure"
            />
          </Box>
          <br />
          <br />
          <Box>
            <br />
            <h2 className="applepencil" color="#1d1d1f">
              Keyboards for Apple Product
            </h2>

            <p className="applepencil">Keyboards that have you covered</p>

            <Flex justifyContent={"center"}>
              <span className="appleshop" textAlign="center" color=" #06c">
                Shop ➡️{" "}
              </span>
              <span className="appleshop" textAlign="center" color=" #06c">
                Learn More ➡️
              </span>
            </Flex>
            <br />
            <Divider />
            <Image
              className="figure"
              src={
                "	https://www.apple.com/in/ipad/home/images/overview/smart_keyboard_folio__b8j0ydqvjq2q_medium_2x.jpg"
              }
              alt="figure"
            />
          </Box>
        </Flex>
      </Box>

      {/* //Box4 */}
      <br />
      <br />
      <Box className="box4">
        <br />
        <Text className="ipad_essentials">Accessories</Text>
        <p style={{ fontSize: "25px", textAlign: "center" }}>
          {" "}
          Explore cases,covers,keyboards,Apple Pencil,AirPod and more
        </p>
        <p className="accessories_span">Shop for Apple Product accessories</p>
        <br />
        <Image
          className="accessories_Images"
          src={
            "https://www.apple.com/v/ipad/home/cd/images/overview/accessories__gdpezee1naai_medium.jpg"
          }
          alt="ipad"
        />
      </Box>
      <br />

      {/* //box6 */}

      <br />
      <br />
      <br />
      {/* //Box7 */}
      <Box className="box7">
        <br />
        <Box>
          <Text className="ipad_essentials">
            Get More Out of Apple Product Music,Arcade and Apple_Tv
          </Text>
        </Box>
        <Box>
          <Flex justifyContent={"space-evenly"} className="arcade_music">
            <Image className="music" src={Music} alt="music" />
            <br />
            <Image className="arcade" src={Arcade} alt="arcade" />
          </Flex>
        </Box>
      </Box>
      {/* //Box8 */}
      <br />
      <br />
      <br />
      <Box className="box8">
        <Flex justifyContent={"space-around"}>
          <Box className="images_url1">
            <Image className="music" src={education} alt="image1" />
          </Box>
          <Box className="images_url2">
            <Image className="arcade" src={EducationHello} alt="image1" />
          </Box>
        </Flex>
      </Box>
      <br />
      <br />
      <br />
      <Box>
        <AccessoriesSlider />
      </Box>
    </div>
  );
};

export default Generic;

import React from "react";
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
const Ipad = () => {
  return (
    <div style={{ backgroundColor: "rgb(255, 255, 255)" }}>
      <Box>
        <Box className="iphonebox">
          <Box className="display_box">
            <Image className="iphoneImages" src={IpadMini} alt="ipadpro" />
            <Text style={{ textAlign: "center" }} className="iphoneText">
              IpadPro
            </Text>
          </Box>
          <Box className="display_box">
            <Image
              className="iphoneImages"
              src={
                "https://www.apple.com/v/ipad/home/cd/images/chapternav/ipad_light__fcshltpasu6i_large.svg"
              }
              alt="ipadpro"
            />
            <Text style={{ textAlign: "center" }} className="iphoneText">
              Ipad
            </Text>
          </Box>
          <Box className="display_box">
            <Image
              className="iphoneImages"
              src={
                "	https://www.apple.com/v/ipad/home/cd/images/chapternav/ipad_compare_light__bdpd7ul1iasy_large.svg"
              }
              alt="ipadpro"
            />
            <Text style={{ textAlign: "center" }} className="iphoneText">
              Ipad Compare
            </Text>
          </Box>
          <Box className="display_box">
            <Image
              className="iphoneImages"
              src={
                "https://www.apple.com/v/ipad/home/cd/images/chapternav/apple_pencil_light__b56nts0623aq_large.svg"
              }
              alt="ipadpro"
            />
            <Text style={{ textAlign: "center" }} className="iphoneText">
              Pencil
            </Text>
          </Box>
          <Box className="display_box">
            <Image
              className="iphoneImages"
              src={
                "https://www.apple.com/v/ipad/home/cd/images/chapternav/keyboard_light__emvaymybnp6q_large.svg"
              }
              alt="ipadpro"
            />
            <Text style={{ textAlign: "center" }} className="iphoneText">
              Keyboard
            </Text>
          </Box>
          <Box className="display_box">
            <Image
              className="iphoneImages"
              src={
                "https://www.apple.com/v/ipad/home/cd/images/chapternav/ipados_light__iolxd8nzzcqe_large.svg"
              }
              alt="ipadpro"
            />
            <Text style={{ textAlign: "center" }} className="iphoneText">
              IpadOS
            </Text>
          </Box>
          <Box className="display_box">
            <Image
              className="iphoneImages"
              src={
                "https://www.apple.com/v/ipad/home/cd/images/chapternav/shop_ipad_light__cruwa0cotbwy_large.svg"
              }
              alt="ipadpro"
            />
            <Text style={{ textAlign: "center" }} className="iphoneText">
              ShotIpad
            </Text>
          </Box>
        </Box>
      </Box>
      <Box className="free_box">
        <Text className="sign_text">
          Get 3% Daily Cash back with Apple carc. And pay for your new ipad over
          12 months, interest-free when you choose to check out with apple card
          monthly installments.
          <br />
          <span style={{ color: "blue" }}> * Learn More</span>
        </Text>
      </Box>

      <Box>
        <Flex className="apple_images_box">
          <Box>
            <Image
              className="ipad_images"
              src="https://www.apple.com/v/ipad-10.9/b/images/overview/hero/hero__ecv967jz1y82_large.jpg"
              alt="apples"
            />
          </Box>
          <Box style={{ marginTop: "160px" }} className="box2_of_images">
            <Image
              className="ipad_image"
              src="	https://www.apple.com/v/ipad-10.9/b/images/overview/hero/logo__w73ifx9hw766_large.png"
              alt="ipad"
            />
            <p className="ipad_lovable">
              Lovable.
              <br />
              Drawable,
              <br />
              Magical
            </p>
            <Text className="price">From $449</Text>
            <Button className="button_buy">Buy</Button>
          </Box>
        </Flex>
      </Box>
      <Box className="macproimage">
        <Image className="macroimages" src={macpro} alt="macpro" />
      </Box>
      {/* //Which Product is Add */}
      <Box className="ipadBox">
        <Box className="ipad_right">
          <Text className="which_ipad">Which iPad is right for you?</Text>
        </Box>

        <Box className="number_display1">
          <Box className="number_display">
            <Box>
              <h4>27.69 cm or 27.96&nbsp;cm</h4>
              <p>(10.9″) Liquid Retina XDR</p>
              <p> display or</p>
              <p> Anti Reflecting Coating</p>
            </Box>
            <Box>
              <h4>27.69cm or 27.96&nbsp;cm</h4>
              <p>(12.9″) Liquid Retina XDR</p>
              <p> display or</p>
              <p> (11″)&nbsp;Liquid Retina display</p>
            </Box>
            <Box>
              <h4>32.77 cm or 27.96&nbsp;cm</h4>
              <p>(12.9″) Liquid Retina XDR</p>
              <p> sRGB color</p>
              <p> -</p>
            </Box>
            <Box>
              <h4>25.91 cm or 27.96&nbsp;cm</h4>
              <p>(12.9″) Liquid Retina XDR</p>
              <p> display or</p>
              <p> -</p>
            </Box>
            <Box>
              <h4>21.08 cm or 27.96&nbsp;cm</h4>
              <p>(8.3″) Liquid Retina XDR</p>
              <p> </p>
              <p> Anti Reflection</p>
            </Box>
          </Box>
        </Box>
      </Box>
      <br />
      <br />
      <br />
      <Box className="chips_set">
        <Image className="chips_image" src={Chips} alt="chips" />
      </Box>
      <Box className="take_box">
        <Image width={"100%"} src={take} alt={"takle"} />
      </Box>

      <Box className="box3">
        <Text className="ipad_essentials">iPad essentials</Text>
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
          <Box>
            <h2 className="applepencil" color="#1d1d1f">
              Keyboards for iPad
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
      <br/>
      <br/>
      <Box className="box4">
        <br/>
        <Text className="ipad_essentials">Accessories</Text>
        <p style={{ fontSize: "25px", textAlign: "center" }}>
          {" "}
          Explore cases,covers,keyboards,Apple Pencil,AirPod and more
        </p>
        <p className="accessories_span">Shop iPad accessories</p>
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
   
     
      <br/>
      <br/>
      <br/>
      <Box className="box5">
        <Flex
          style={{ justifyContent: "space-evenly" }}
          className="flex_ipad_why"
        >
          <Box className="box5_top">
            <Text className="why_ipad">Why iPad?</Text>
            <Text className="yes">Yes,it does that. And the some.</Text>
          </Box>
          <Box>
            <Image
              className="image_ipad_why"
              src="https://www.apple.com/in/ipad/home/images/overview/why_ipad__fyckwbl8w5u2_medium_2x.jpg"
            />
          </Box>
        </Flex>
      </Box>
      {/* //box6 */}
      <Box className="box4">
        <Box className="box5_top">
          <Text className="ipad_essentials">iPadOS 16</Text>
          <p style={{ fontSize: "25px", textAlign: "center" }}>
            {" "}
            Incredible capable.Unmistakably iPad
          </p>
          <p className="accessories_span">Shop iPad accessories</p>
        </Box>
        <br />
        <Image
          className="accessories_Images"
          src={
            "	https://www.apple.com/in/ipad/home/images/overview/ipados16__9t47xpd66wiq_medium_2x.jpg"
          }
          alt="ipad"
        />
      </Box>
      <br />
      <br />
      <br />
      {/* //Box7 */}
      <Box className="box7">
        <Box>
          <Text className="ipad_essentials">Get More Out of iPad</Text>
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
    </div>
  );
};

export default Ipad;

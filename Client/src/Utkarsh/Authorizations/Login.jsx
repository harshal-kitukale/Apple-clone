import { Flex, Box, Text, Image } from "@chakra-ui/react";
import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import apple from "../UtkarshImages/apple.png";
import left from "../UtkarshImages/left.png";
import googleplus from "../UtkarshImages/googleplus.png";
import appleplus from "../UtkarshImages/appleplus.png";
import imac from "../UtkarshImages/imac.jpg";
import Iphone14 from "../UtkarshImages/Iphone14.jpg";
import fast from "../UtkarshVideos/fast.mp4";
const Login = () => {
  return (
    <div>
      <Box className="login_text_box">
      <Text className="text_loginup">Sign in for faster checkout</Text>
      </Box>
      <br />
      <br />
      <br />
      <Flex className="media">
        <Box className="box1">
          <Flex
            style={{
              justifyContent: "space-evenly",
              padding: "13px 20px",
              margin: "auto",
            }}
          >
            <Text className="apple">Sign in Apple Store </Text>
            <Image
              style={{ width: "35px", height: "50px", marginLeft: "10px" }}
              src={apple}
              alt="image"
            />
          </Flex>

          <Box className="input_box_size">
            <div className="iphone">
              <header class="header">
                <a href="#" class="button button--small">
                  <Image className="icons_images" src={left} alt="left" />
                </a>
                <h1 style={{ color: "#fff", fontWeight: "800" }}>Log in</h1>
              </header>

              <main class="main">
                <div>
                  <p style={{ color: "#fff", fontWeight: "800" }}>
                    Log in with one of the following options.
                  </p>

                  <ul class="buttons">
                    <li>
                      <a class="button button--full" href="#">
                        <Image
                          className="icons_image"
                          src={googleplus}
                          alt="google"
                        />
                      </a>
                    </li>
                    <li>
                      <a class="button button--full" href="#">
                        <Image
                          className="icons_image"
                          src={appleplus}
                          alt="google"
                        />
                      </a>
                    </li>
                  </ul>
                </div>

                <form class="form" action="#">
                  <div class="form__field">
                    <label
                      style={{ color: "#fff", fontWeight: "800" }}
                      class="form__label"
                      for="email"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      class="form__input"
                      name="email"
                      type="email"
                      placeholder="email@gmail.com"
                    />
                  </div>

                  <div class="form__field">
                    <label
                      style={{ color: "#fff", fontWeight: "800" }}
                      class="form__label"
                      for="password"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      class="form__input"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                    />
                  </div>

                  <div class="form__field">
                    <button
                      class="button button--full button--primary"
                      type="submit"
                    >
                      Log in
                    </button>
                  </div>
                </form>

                <div class="text--center">
                  <p style={{ color: "#fff", fontWeight: "800" }}>
                    Don't have an account? <a href="#">Sign up</a>
                  </p>
                </div>
              </main>
            </div>
          </Box>
        </Box>
        <Box className="box2" style={{ marginTop: "20px" }}>
          <Image className="image_video" src={Iphone14} alt="iphone14" />
          <Text className="text_sign">
            Super Fast and Responsive New Iphone 14pro
          </Text>
          <Link></Link>
          <video
            className="image_video"
            src={fast}
            autoPlay
            autoFocus
            muted
            loop
          />
        </Box>
      </Flex>
    </div>
  );
};

export default Login;

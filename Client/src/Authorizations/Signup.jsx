import React, { useState } from "react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import "./Signup.css";
import apple from "../UtkarshImages/apple.png";
import left from "../UtkarshImages/left.png";
import googleplus from "../UtkarshImages/googleplus.png";
import appleplus from "../UtkarshImages/appleplus.png";
import imac from "../UtkarshImages/imac.jpg";

import girls from "../UtkarshVideos/girls.mp4";
const Signup = () => {

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("")

const handleClick=(e)=>{
e.preventDefault();

}

  return (
    <div>
      <Text className="text_signup">Sign in for faster checkout</Text>
      <br />
      <br />
      <br />
      <Flex className="media"
       
      >
        <Box className="box1">
          <Flex
            style={{ justifyContent: "space-evenly", padding: "13px 20px" }}
          >
            <Text className="apple">Sign in Apple Store </Text>
            <Image
              style={{ width: "40px", height: "50px", marginLeft: "10px" }}
              src={apple}
              alt="image"
            />
          </Flex>
          {/* //For Input Tags*/}

          <Box className="Input_boxes">
            <div class="iphone">
              <header class="header">
                <a href="#" class="button button--small">
                  <Image className="icons_images" src={left} alt="left" />
                </a>
                <h1 style={{ fontWeight: "700", fontStyle: "italic" }}>
                  Sign up
                </h1>
              </header>

              <main class="main">
                <div>
                  <p style={{ color: "#fff", fontWeight: "800" }}>
                    Sign up with one of the following options.
                  </p>

                  <ul class="buttons">
                    <li>
                      <a
                        class="button button--full"
                        href="#"
                        style={{ margin: "auto" }}
                      >
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
                      style={{ color: "#fff", fontWeight: "600" }}
                      class="form__label"
                      for="name"
                    >
                      Name
                    </label>
                    <input
                    onChange={(e)=>setName(e.target.value)}
                      id="name"
                      class="form__input"
                      name="name"
                      type="text"
                      placeholder="Enter the name"
                    />
                  </div>

                  <div class="form__field">
                    <label
                      style={{ color: "#fff", fontWeight: "600" }}
                      class="form__label"
                      for="email"
                    >
                      Email
                    </label>
                    <input
                     onChange={(e)=>setEmail(e.target.value)}
                      id="email"
                      class="form__input"
                      name="email"
                      type="email"
                      placeholder="email@apple.com"
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
                      onChange={(e)=>setPassword(e.target.value)}
                      id="password"
                      class="form__input"
                      name="password"
                      type="password"
                      placeholder="Pick a strong password"
                    />
                  </div>

                  <div class="form__field">
                    <button onClick={handleClick}
                      class="button button--full button--primary"
                      type="submit"
                    >
                      Create Account
                    </button>
                  </div>
                </form>

                <div class="text--center">
                  <p style={{ color: "#fff", fontWeight: "800" }}>
                    Already have an account? <a href="#">Log in</a>
                  </p>
                </div>
              </main>
            </div>
          </Box>
        </Box>
        <Box className="box2">
          <video className="images_media"
          
          
            src={girls}
            autoPlay
            loop
            muted
          />
          <Image className="images_media"
           
            src={imac}
            alt="imac"
          />
        </Box>
      </Flex>
    </div>
  );
};

export default Signup;

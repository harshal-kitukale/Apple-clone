import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Products from "./Products";
import AppleExperience from "./Apple/AppleExperience";
import Textbottom from "./Apple/Textbottom";
import CarouselCategory from "./Carausal";
import HelpHere from "./Helper";
import { Navbar } from "../Abhishek/Navbar";
import { Footer } from "../Abhishek/Footer";


const Store = () => {
  return (
    <StoreMain>
      <Navbar/>
      <Header />
      <CarouselCategory></CarouselCategory>
      <Products />
           <HelpHere></HelpHere>
      <AppleExperience></AppleExperience>
      <Textbottom></Textbottom>
<Footer/>
    </StoreMain>
  );
};

export default Store;
// STYLED CSS
const StoreMain = styled.div``;

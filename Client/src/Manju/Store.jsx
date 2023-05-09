import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Products from "./Products";
import AppleExperience from "./Apple/AppleExperience";
import Textbottom from "./Apple/Textbottom";
import CarouselCategory from "./Carausal";
import HelpHere from "./Helper";


const Store = () => {
  return (
    <StoreMain>
      <Header />
      <CarouselCategory></CarouselCategory>
      <Products />
           <HelpHere></HelpHere>
      <AppleExperience></AppleExperience>
      <Textbottom></Textbottom>

    </StoreMain>
  );
};

export default Store;
// STYLED CSS
const StoreMain = styled.div``;

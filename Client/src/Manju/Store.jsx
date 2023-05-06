import React from "react";
import styled from "styled-components";
import AppleExperience from "./Apple/AppleExperience";
import CarouselCategory from "./Carausal";
import Header from "./header";
import Products from "./Products";
import HelpHere from "./Helper";
import Textbottom from "./Apple/Textbottom";


const Store = () => {
  return (
    <StoreMain>
   <Header></Header>
      <CarouselCategory></CarouselCategory>
<Products></Products>
<HelpHere></HelpHere>
<AppleExperience></AppleExperience>
<Textbottom></Textbottom>
    </StoreMain>
  );
};

export default Store;
// STYLED CSS
const StoreMain = styled.div`
// width:95%;
// margin:auto;
// border:2px solid red;
`;
import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
//
//
//
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
        borderRadius: "50%",
        width: "45px",
        height: "45px",
        zIndex: 4,
        backgroundColor: "#ffffff62",
        color: "black",
        cursor: "pointer",
        right: 0,
        top: "30%",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <HiOutlineChevronRight
        style={{ color: "#6e6e739b", fontSize: "1.8rem" }}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
        borderRadius: "50%",
        width: "45px",
        height: "45px",
        zIndex: 4,
        backgroundColor: "#ffffff62",
        cursor: "pointer",
        left: 0,
        top: "30%",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <HiOutlineChevronLeft
        style={{ color: "#6e6e739b", fontSize: "1.5rem" }}
      />
    </div>
  );
}
//
//
//

const ProdCarousel = ({products}) => {
  console.log(products);
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  };
  return (
    <CarouselCategoryMain>
      <CarouselCategoryWrapper>
        <SlickCarousel {...settings} style={{ position: "relative" }}>
          {/*  */}
          {products?.map((product) => (
          
          <ProductCard key={product._id} product={product}/>
        ))}
          {/*  */}
        </SlickCarousel>
      </CarouselCategoryWrapper>
    </CarouselCategoryMain>
  );
};

export default ProdCarousel;
// Styled css
const CarouselCategoryMain = styled.div`
  margin-top: 4.5rem;
  padding: 10px 0;
  background-color: #ffffff;
`;
const CarouselCategoryWrapper = styled.div`
  width: 90%;
  margin: auto;
  max-width: 1248px;
`;
const SlickCarousel = styled(Slider)``;
const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transition: 0.6s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }
`;
const Image = styled.img`
  width: 80%;
  cursor: pointer;
`;
const Title = styled.p`
  font-size: 15px;
  font-weight: 600;
  width: 100%;
  text-align: center;
  margin-left: -15px;
`;



// <SlickCarousel {...settings} style={{ position: "relative" }}>
//           {/*  */}
//           <Div>
//             <Image
//               onClick={() => navigate("/mac")}
//               src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-14-16-mac-nav-202301?wid=200&hei=130&fmt=png-alpha&.v=1670959891635"
//               alt="Mac"
//             />
//             <Title>Mac</Title>
//           </Div>
//           <Div>
//             <Image
//               onClick={() => navigate("/iphone")}
//               src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202209_GEO_US?wid=200&hei=130&fmt=png-alpha&.v=1661027785546"
//               alt="iPhone"
//             />
//             <Title>iPhone</Title>
//           </Div>
//           <Div>
//             <Image
//               onClick={() => navigate("/ipad")}
//               src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=200&hei=130&fmt=png-alpha&.v=1664912135437"
//               alt="iPad"
//             />
//             <Title>iPad</Title>
//           </Div>
//           <Div>
//             <Image
//               onClick={() => navigate("/watch")}
//               src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202303?wid=200&hei=130&fmt=png-alpha&.v=1677701613598"
//               alt="Apple Watch"
//             />
//             <Title>Apple Watch</Title>
//           </Div>
//           <Div>
//             <Image
//               src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=200&hei=130&fmt=png-alpha&.v=1660676485885"
//               alt="AirPods"
//             />
//             <Title>AirPods</Title>
//           </Div>
//           <Div>
//             <Image
//               src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=200&hei=130&fmt=png-alpha&.v=1625783380000"
//               alt="AirTag"
//             />
//             <Title>AirTag</Title>
//           </Div>
//           <Div>
//             <Image
//               src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=200&hei=130&fmt=png-alpha&.v=1664628458484"
//               alt="Apple TV 4K"
//             />
//             <Title>Apple TV 4K</Title>
//           </Div>
//           <Div>
//             <Image
//               src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=200&hei=130&fmt=png-alpha&.v=1670389216654"
//               alt="HomePod"
//             />
//             <Title>HomePod</Title>
//           </Div>
//           <Div>
//             <Image
//               src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-accessories-nav-202303?wid=200&hei=130&fmt=png-alpha&.v=1677172796005"
//               alt="Accessories"
//             />
//             <Title>Accessories</Title>
//           </Div>
//           <Div>
//             <Image
//               src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-holiday-giftcards-asit-agc-nav-202111?wid=200&hei=130&fmt=png-alpha&.v=1653339351054"
//               alt="Apple Gift Card"
//             />
//             <Title>Apple Gift Card</Title>
//           </Div>
//           {/*  */}
//         </SlickCarousel>
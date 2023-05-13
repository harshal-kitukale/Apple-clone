import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ProductCard = ({ product }) => {
  // console.log(product)
  const navigate = useNavigate();
  return (
    <Div>
      <DivB>
        <DetailsA>
          <Title>{product.title}</Title>
        </DetailsA>
        <Image src={product.image} alt="productimage" />
        <DetailsB>
          <TitleB>Price: ${product.price}</TitleB>
          <Button onClick={() => navigate(`/singleProduct/${product._id}`)}>
            Buy
          </Button>
        </DetailsB>
      </DivB>
    </Div>
  );  
};

export default ProductCard;
const Div = styled.div`
display: flex;
  padding: 3rem 0;
`;
const DivB = styled.div`
border:1px  ;
border-style:solid;
border-color: rgb(210,210,210);
  width: 90%;
  height: 420px;
  margin: auto;
  padding: 2rem;
  transition: 0.6s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
  &:hover {
    transform: scale(1.02);
  }
  @media (max-width: 768px) {
    width: 80%;
    height: 320px;
  }
`;
const Image = styled.img`
  width: 100%;
  margin:auto;

`;
const DetailsA = styled.div``;
const Title = styled.h2`
  font-weight: 600;
  font-size: 22px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
const DetailsB = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  @media (max-width: 768px) {
    
  }
`;
const Button = styled.button`
  border: none;
  background: #0071e3;
  color: #fff;
  padding: 8px 20px;
  border-radius: 780px;
  cursor: pointer;
  font-size: 17px;
`;
const TitleB = styled.p`
  font-size: 18px;
  font:bold
`;

 // @media (max-width: 768px) {
  //   flex-direction: column;
  //   gap: 10px;
  // }
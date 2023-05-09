import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  Link,
  Spacer,
  Text,
  Icon,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { HiOutlineGiftTop } from "react-icons/hi2";
import { IoPricetagOutline } from "react-icons/io5";
import { FaWallet } from "react-icons/fa";
// import {useDispatch, useSelector } from "react-redux";
import CartCard from "./CartCard";
// import styled from "styled-components";
import { arr1 } from "./data";
import axios from "axios";

export let billDetail;
const billDetailFunction = (cart) => {
  billDetail = {
    cart_total: 0,
    discount: 0,
    gst: 0,
    total_amount: 0,
  };
  //   cart.forEach((item) => {
  //     billDetail.cart_total = billDetail.cart_total + item.exclusivePrice;
  //     let discountPrice = item.price - item.exclusivePrice;
  //     // (discountPrice/item.exclusivePrice)*100
  //     billDetail.discount = billDetail.discount + discountPrice;
  //     billDetail.gst = (billDetail.cart_total * 18) / 100;
  //     let Total = billDetail.cart_total - billDetail.discount + billDetail.gst;
  //     billDetail.total_amount = Total.toFixed(3);
  //   });
};

const Cart = () => {
  const [cartData,setCartData]=useState([])
  // const { cart, isLoading } = useSelector((store) => store.cartReducer);

  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  console.log(arr1);

  // billDetailFunction(cart);
  const remove = (id) => { 
    axios
    .delete(`https://fancy-cyan-robe.cyclic.app/cart/delete/${id}`)
    .then((res) => {
      console.log(res.data)
      // dispatch(addToCartAction(res.data));
    });
    console.log(id);
  };
  const changePrice = (id) => {
    // dispatch(removeFromCartAction(id));
    // billDetailFunction(cart);

    console.log(id);
  };

  const handleOrder = () => {
    // navigate("/payment");
  };

  useEffect(()=>{
    axios
    .get('https://fancy-cyan-robe.cyclic.app/cart')
    .then((res) => {
      // dispatch(getProductsSuccess(res.data));
      setCartData(res.data)
    })
    .catch((error) => console.log(error));
     },[])
     console.log(cartData)

  // useEffect(
  //   () => {
  //     let items=  JSON.parse( localStorage.getItem('cart'))||[]
  //     if(cart.length===0){
  //       items.map((item)=>dispatch(addToCartAction(item)))
  //     }
  //     // cart.length>0?"":
  //     console.log("items",items)
  //   },[]
  // );
  //********************** */
  // if (isLoading) {
  //   return (
  //     <>
  //       <Flex height={"100vh"} alignItems={"center"} justifyContent={"center"}>
  //         <Image
  //           src="https://bakestudio.in/assets/images/cart/empty-cart.gif"
  //         ></Image>
  //       </Flex>
  //     </>
  //   );
  // }

  return (
    <>
      {/* <Navbar /> */}
      {/* <Box margin={"1rem"} color={"teal"} fontSize="0.8rem">
        {" "}
        <Span>MY BAG </Span>- - - - - - - - - - - - - ADDRESS - - - - - - - - -
        - - - - PAYMENT{" "}
      </Box> */}
      <Box h="auto" w={"90%"} m="auto" my={"40px"}>
        <HStack>
          <Heading>Review your bag. </Heading>
          <Image width={"3.5%"}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyKxIlXImnGAlQ-q1VEQKDVYINDGhQlKIPd9dz5IQO&s"
            alt="apple"
          />
        </HStack>

        <Text>Free delivery and free returns.</Text>
      </Box>
      <Box
        borderTop={"1px"}
        m={"auto"}
        mb={"10px"}
        width={"90%"}
        my="20px"
      ></Box>
      <Grid
        fontFamily={"sans-serif"}
        h="auto"
        w={"90%"}
        m="auto"
        my={"50px"}
        // templateRows="repeat(3, 1fr)"
        templateColumns="repeat(7, 1fr)"
        gap={4}
      >
        {/* cart cart */}
        <GridItem colSpan={{ base: 7, sm: 7, md: 5 }}>
          {arr1.length === 0 ? (
            <Image
              align={"center"}
              src="https://bakestudio.in/assets/images/cart/empty-cart.gif"
            />
          ) : (
            arr1.map((item) => {
              return (
                <CartCard {...item} remove={remove} changePrice={changePrice} />
              );
            })
          )}
        </GridItem>
        <GridItem colSpan={{ base: 7, sm: 7, md: 2 }}>
          <Box>
            <Box>
              <Button
                isDisabled={arr1.length === 0 ? true : false}
                size="md"
                w={"100%"}
                colorScheme="blue"
                variant="solid"
                fontWeight={"bold"}
                onClick={handleOrder}
              >
                PLACE ORDER
              </Button>
            </Box>
            <Box
              p={"20px"}
              bg="gray.300"
              my={"10px"}
              borderRadius="5px"
              textAlign={"left"}
            >
              <Checkbox>
                <Text fontWeight={"bold"} fontSize="14px">
                  Save an additional ₹ 100 on this order.
                </Text>
              </Checkbox>
            </Box>
            <Box>
              <Accordion allowToggle border={"1px"} borderColor="gray.300">
                <AccordionItem
                  py={"5px"}
                  borderBottom={"1px"}
                  borderTop={"none"}
                  borderColor="gray.300"
                >
                  <h2>
                    <AccordionButton fontSize={"14px"}>
                      <Image
                        mr={"10px"}
                        width={"20px"}
                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/APPLECARE-plus_ICON?"
                        alt="tag"
                      />
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"bold"}
                      >
                        Add Apple Coupon
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box pt="15px" borderTop={"1px"} borderColor="gray.300">
                      <Input
                        size="sm"
                        mr={"20px"}
                        w={"50%"}
                        borderRadius={"10px"}
                        placeholder="Enter Code Here"
                      />
                      <Button
                        size="sm"
                        w={"40%"}
                        colorScheme="black"
                        variant="outline"
                        fontWeight={"bold"}
                      >
                        APPLY
                      </Button>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem
                  py={"5px"}
                  borderBottom={"1px"}
                  borderTop={"none"}
                  borderColor="gray.300"
                >
                  <h2>
                    <AccordionButton fontSize={"14px"}>
                      {/* <Image
                        mr={"10px"}
                        width={"20px"}
                        color={"black"}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAvCAMAAAB5awL4AAAARVBMVEVHcEw1vK9IjYVYWFpXWFpXWFpVWlpLYWxYWFpXWFo2vK42va5YWFw2va5XWFpYWFo2va9YWFpXWVo2va5XWFpYWVs3va7cWG+0AAAAFXRSTlMARyDAXNAwEKDwp+xAynDgf4CQabANvZKzAAABeElEQVRIx5WUWxaDIAxEAVEUbbW+9r/UBlQQCEHz0WORK0kmA2NEyLbagqjbgZHRRMARM3nIhsdMI90vTEXJGlaz6bUme5EsK1hfKUQhLwScjhLKVN/iX4M3KFLnkQzTGOTL3jBNB8vS5b9MeuIFZgCkc8jU7yY+nGKsLM31T+9X8DzzhaXRIQts1gufPvveixwTyeK+D+fpDBMhHAo5u++eIiaRBVKb/IkYkyrJfUZQEMI0Y6KkgJ0qyvLOhEqeAf3Spl9L75o9bFt1yRIo6Q6yitof7ds0Y0reKupPSbXyG6VTsm7QEbd6utExYvxog51coF/lnxQrxuFEu5EyWMaJ80PEOvGohY2pLChy1w+eRRkJnbjiylBONMNQhGTgxDPTjiwJ0Q8dz9KdKm5tfHynEhdn/pVa3VhEsozEnYrPaaHUGYFkqaWp72RZunjLN1YyN4c+lYITsZKfOtGrq5460e99g5zqjoUJRNV9iUCPu9xtRzqZJv4YTCbCeHS4sAAAAABJRU5ErkJggg=="
                        alt="tag"
                        
                      /> */}
                      <Icon
                        as={IoPricetagOutline}
                        boxSize={5}
                        color="black"
                        mr="10px"
                      />
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"bold"}
                      >
                        Gift Voucher
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} align="left">
                    <Box p="15px" borderTop={"1px"} borderColor="gray.300">
                      <Link
                        fontSize={"14px"}
                        color={"teal"}
                        textDecoration="underline"
                      >
                        Login To Apply
                      </Link>
                      <Spacer m={"15px"} />
                      <Input
                        size="sm"
                        mr={"20px"}
                        w={"50%"}
                        borderRadius={"10px"}
                        placeholder="Enter Code Here"
                      />
                      <Button
                        size="sm"
                        w={"40%"}
                        colorScheme="black"
                        variant="outline"
                        fontWeight={"bold"}
                      >
                        APPLY
                      </Button>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem
                  py={"5px"}
                  borderBottom={"1px"}
                  borderTop={"none"}
                  borderColor="gray.300"
                >
                  <h2>
                    <AccordionButton fontSize={"14px"}>
                      {/* <Image
                        mr={"10px"}
                        width={"20px"}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAvCAMAAAB5awL4AAAARVBMVEVHcEw1vK9IjYVYWFpXWFpXWFpVWlpLYWxYWFpXWFo2vK42va5YWFw2va5XWFpYWFo2va9YWFpXWVo2va5XWFpYWVs3va7cWG+0AAAAFXRSTlMARyDAXNAwEKDwp+xAynDgf4CQabANvZKzAAABeElEQVRIx5WUWxaDIAxEAVEUbbW+9r/UBlQQCEHz0WORK0kmA2NEyLbagqjbgZHRRMARM3nIhsdMI90vTEXJGlaz6bUme5EsK1hfKUQhLwScjhLKVN/iX4M3KFLnkQzTGOTL3jBNB8vS5b9MeuIFZgCkc8jU7yY+nGKsLM31T+9X8DzzhaXRIQts1gufPvveixwTyeK+D+fpDBMhHAo5u++eIiaRBVKb/IkYkyrJfUZQEMI0Y6KkgJ0qyvLOhEqeAf3Spl9L75o9bFt1yRIo6Q6yitof7ds0Y0reKupPSbXyG6VTsm7QEbd6utExYvxog51coF/lnxQrxuFEu5EyWMaJ80PEOvGohY2pLChy1w+eRRkJnbjiylBONMNQhGTgxDPTjiwJ0Q8dz9KdKm5tfHynEhdn/pVa3VhEsozEnYrPaaHUGYFkqaWp72RZunjLN1YyN4c+lYITsZKfOtGrq5460e99g5zqjoUJRNV9iUCPu9xtRzqZJv4YTCbCeHS4sAAAAABJRU5ErkJggg=="
                        alt="tag"
                      /> */}

                      <Icon
                        as={HiOutlineGiftTop}
                        boxSize={5}
                        color="black"
                        mr="10px"
                      />
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"bold"}
                      >
                        Gift Wrap (₹ 25)
                      </Box>
                      <Checkbox colorScheme="blue" />
                    </AccordionButton>
                  </h2>
                </AccordionItem>
                <AccordionItem py={"5px"} border={"none"}>
                  <h2>
                    <AccordionButton fontSize={"14px"}>
                      {/* <Image
                        mr={"10px"}
                        width={"20px"}
                        src="https://tss-static-images.gumlet.io/icons/tss-money.png"
                        alt="tag"
                      /> */}
                      <Icon as={FaWallet} boxSize={5} color="black" mr="10px" />
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"bold"}
                      >
                        TSS Money / TSS Points
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} align="left">
                    <Box p="15px" borderTop={"1px"} borderColor="gray.300">
                      <Link
                        fontSize={"14px"}
                        color={"teal"}
                        textDecoration="underline"
                      >
                        Login To Apply
                      </Link>
                      <Spacer m={"15px"} />
                      <Input
                        size="sm"
                        mr={"20px"}
                        w={"50%"}
                        borderRadius={"10px"}
                        placeholder="Enter Code Here"
                      />
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
            <Box>
              <Text
                align={"left"}
                fontWeight="500"
                fontSize={"14px"}
                my={"20px"}
                color={"gray"}
              >
                BILLING DETAILS
              </Text>
              <Box border={"1px"} borderColor={"gray.300"}>
                <Box p={"15px"} borderBottom={"1px"} borderColor={"gray.300"}>
                  <Flex justifyContent={"space-between"}>
                    <Text fontSize={"14px"}>Cart Total</Text>
                    <Text fontSize={"14px"} fontWeight={"bold"}>
                      {/* ₹ {billDetail.cart_total} */}
                    </Text>
                  </Flex>
                </Box>
                <Box p={"15px"} borderBottom={"1px"} borderColor={"gray.300"}>
                  <Flex justifyContent={"space-between"}>
                    <Text fontSize={"14px"}>Discount</Text>
                    <Text fontSize={"14px"} fontWeight={"bold"}>
                      {/* - ₹ {billDetail.discount} */}
                    </Text>
                  </Flex>
                </Box>
                <Box p={"15px"} borderBottom={"1px"} borderColor={"gray.300"}>
                  <Flex justifyContent={"space-between"}>
                    <Text fontSize={"14px"}>GST</Text>
                    <Text fontSize={"14px"} fontWeight={"bold"}>
                      {/* ₹ {billDetail.gst} */}
                    </Text>
                  </Flex>
                </Box>
                <Box p={"15px"} borderBottom={"1px"} borderColor={"gray.300"}>
                  <Flex justifyContent={"space-between"}>
                    <Text fontSize={"14px"}>Shipping Charges</Text>
                    <Text fontSize={"14px"} fontWeight={"bold"}>
                      ₹ 0
                    </Text>
                  </Flex>
                </Box>
                <Box p={"15px"}>
                  <Flex justifyContent={"space-between"}>
                    <Text fontSize={"14px"} fontWeight={"bold"}>
                      Total Amount
                    </Text>
                    <Text fontSize={"14px"} fontWeight={"bold"}>
                      {/* ₹ {billDetail.total_amount} */}
                    </Text>
                  </Flex>
                </Box>
              </Box>
            </Box>
          </Box>
        </GridItem>
      </Grid>
      {/* <Footer /> */}
    </>
  );
};

export default Cart;

// const Span = styled.span`
//   font-weight: bold;
// `;

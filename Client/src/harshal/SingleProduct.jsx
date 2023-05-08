import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Select,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { StandardSizes } from "./StandardSizes";

import { getSingleProduct } from "../Redux/productsReducer/products.action";
export const SingleProduct = () => {
  const [data, setData] = useState("");
const [prodData,setProdData]=useState({})
  const { id } = useParams();
  console.log(id)
  // const products=useSelector((store)=>store.productsReducer)
  // console.log(products)
  const [value, setValue] = useState(true);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
const getItem=()=>{
  let items = JSON.parse(localStorage.getItem("cart")) || [];
  if (items.length > 0) {
    items.map((item) => (item.id === id ? setValue(true) : ""));
  }
}
  useEffect(() => {
dispatch(getSingleProduct(id)).then((res)=>{
setProdData(res)
})

  }, []);
  console.log(prodData)
  function changeTheproducts(key, value) {
    // let newproducts = {
    //   ...products,
    //   [key]: value,
    // };
    // console.log(newproducts, 1);
  }
  console.log(data);
  const AddToBasket = (e) => {
    // e.preventDefault();
    // dispatch(AddToCart(id));
    // setLoading(true)
    // setTimeout(() => {
    //   setLoading(false)
    //   getItem()
    // }, 1500);
    // console.log(nproducts);
    const {title,category,specs,memory,storage,dtlimage,price}=prodData
    fetch('http://localhost:8080/cart/add',{
      method:'POST',
      headers:{
          'Content-Type':'application/json'
      },
      body:JSON.stringify({title,category,specs,memory,storage,dtlimage,price})
     }).then(res=>res.json())
     .catch(err=>console.log(err))
  };
  // if (data === "") {
  //   return (
  //     <>
  //       <Spinner
  //         thickness="4px"
  //         speed="0.65s"
  //         emptyColor="gray.200"
  //         color="blue.500"
  //         size="xl"
  //         position={"absolute"}
  //         top={"300px"}
  //       />
  //     </>
  //   );
  // }
  return (
    <>
      {/* <Navbar /> */}
      <Heading
        align="center"
        // mt={{ base: "10px", md: "0px" }}
        m={"20px"}
        fontSize={"30px"}
      >
        Buy {prodData.title}
      </Heading>
      <Box
        borderTop={"1px"}
        m={"auto"}
        mb={"10px"}
        width={"80%"}
        my="20px"
      ></Box>
      <Box mb={"100px"}>
        <Flex
          w={"90%"}
          direction={{ base: "column", md: "row" }}
          justifyContent="space-around"
          m={"auto"}
          mt={"40px"}
          gap={20}
        >
          <Box width={{ base: "100%", md: "auto" }} justifyContent="center">
            <Flex justifyContent="space-evenly" direction="row" gap="2">
              <Flex
                direction={"column"}
                h="100%"
                justifyContent="space-between"
              ></Flex>
              {/* map image here */}
              <Grid templateColumns="repeat(2, 1fr)" gap={3}>
                {prodData?.dtlimage?.map((image) => {
                  return (
                    <GridItem
                      borderRadius={"30px"}
                      border={"1px"}
                      borderColor={"gray.200"}
                      boxShadow="lg"
                      p={"10px"}
                    >
                      <Image width={"100%"} height={"100%"} src={image} />
                    </GridItem>
                  );
                })}
              </Grid>
            </Flex>
            <Box
              mt={"30px"}
              borderRadius={"20px"}
              border={"1px"}
              borderColor={"gray.100"}
              boxShadow="md"
              p={"10px"}
            >
              <Text fontSize={"18px"} m={"10px"} fontWeight={"bold"}>
                {" "}
                Details of your Brand new {prodData.category}
              </Text>
              {
                prodData?.specs?.map((ele) => {
                  <Box></Box>;
                  if (ele == "unified memory") {
                    return (
                      <Text lineHeight={"30px"}>
                        - {"8 GB"} {ele}
                      </Text>
                    );
                  } else if (ele == "SSD storage") {
                    return (
                      <Text lineHeight={"30px"}>
                        - {"64 GB"} {ele}
                      </Text>
                    );
                  }
                  return <Text lineHeight={"30px"}>- {ele}</Text>;
                })}
            </Box>
          </Box>
          <Box w={{ base: "100%", md: "40%" }}>
            <Heading
              align="left"
              mt={{ base: "10px", md: "0px" }}
              fontSize={"30px"}
            >
              {data.product}
            </Heading>
            <Text
              fontSize={"24px"}
              fontWeight={"medium"}
              mt={"-5px"}
              align="left"
              color={"black"}
            >
              {prodData.title}
            </Text>
            <Box borderTop={"1px"} my="20px"></Box>
            <HStack my={"20px"}>
              <Text fontSize={"25px"} fontWeight={"semibold"} align="left">
                ${prodData.price}
              </Text>
            </HStack>
            <Box>
              {/* //StandardSizes */}
              <Box>
                <Text
                  fontSize={"18px"}
                  m={"10px"}
                  fontWeight={"bold"}
                  mr={"0px"}
                >
                  Storage.{" "}
                  <Text as="span" color={"gray.500"}>
                    Choose how much space you’ll need.
                  </Text>
                </Text>
                <StandardSizes options={prodData.storage} />
              </Box>
              <Box mt={"20px"}>
                {/* <HStack> */}
                <Text
                  fontSize={"18px"}
                  m={"10px"}
                  mr={"0px"}
                  fontWeight={"bold"}
                >
                  Memory.{" "}
                  <Text as="span" color={"gray.500"}>
                    {" "}
                    Choose How much memory is right for you.
                  </Text>
                </Text>
                <StandardSizes options={prodData.memory} />
              </Box>
              <Box my={5}>
                <HStack>
                  <Text fontSize={"18px"} fontWeight={"bold"}>
                    Quantity :
                  </Text>
                  <Select
                    onChange={(e) => changeTheproducts("qty", e.target.value)}
                    m={"10px"}
                    width="70px"
                    height="35px"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </Select>
                </HStack>
              </Box>
              <Box mt={"20px"}>
                <HStack>
                  {/* <Button
                  colorScheme="red"
                  bg="rgb(236, 61, 37)"
                  w={"100%"}
                  onClick={AddToBasket}
                  isDisabled={value}
                  isLoading={loading}
                  loadingText={loading?"ADDING TO THE CART":""}
                  spinnerPlacement="start"
                >
                  {value?"ADDED":"ADD TO CART"}
                </Button> */}
                <Button
                  colorScheme="blue"
                  // bg="rgb(236, 61, 37)"
                  w={"100%"}
                  onClick={AddToBasket}
                  // isDisabled={value}
                  spinnerPlacement="start"
                >
                  Add To Bag
                </Button>
                </HStack>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
      {/* <CaptionCarousel /> */}
    </>
  );
};
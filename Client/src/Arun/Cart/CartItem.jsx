import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Stack,
  Select,
  Text,
  VStack,
  background,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";



const CartItem = ({image, title, price}) => {
  const [toggleQuant, setToggleQuant] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1);

  // console.log(toggleQuant);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
    setToggleQuant(!toggleQuant);
  };
  // console.log(quantity)

  return (
    <Stack gap="20px" w={"100%"} border="1px solid" alignItems={{base: "center",md:"flex-start"}} py="20px" direction={{base: "column", md: "row", lg:"row"}}>
      <Image
        src={image}
        w={"100px"}
      />

      <VStack w="100%" gap="20px">
      <HStack
        alignItems={{base: "center",md:"flex-start"}}
        justify="space-between"
        w="100%"
        px="20px"
      >
        <Heading size={{base: "sm", lg:"sm"}} textAlign={{base: "center", md:"left"}} w={"300px"}>
          {"Apple Watch Ultra GPS + Cellular, 49mm " + title + " - Medium"}
        </Heading>

        <Heading size={{base: "sm", lg:"md"}} display={{base: "none", md: "block", lg:"block"}}>${price.split(" ")[0]}</Heading>
      </HStack>
      <HStack justify="space-between" w="100%" px="20px">
      <Box w="60px" display={{base: "block", md: "none", lg:"none"}}>
          <Select placeholder="1" onChange={(e)=>handleQuantityChange(e)}>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Select>
        </Box>
      <Heading size={{base: "sm", lg:"md"}} textAlign={{base: "center", md:"left"}} display={{base: "block", md:"none", lg:"none"}}>${price.split(" ")[0]}</Heading>
      </HStack>
      <HStack justify="space-between" border="1px solid orange" w="100%" px="20px">
          <Text fontSize="sm">Pay 0% APR for 24 months:</Text>
          <Text fontSize="sm">{price.split(" ")[2]}</Text>
        </HStack>
      </VStack>
      

      {/* <Box w={"50px"} >
          <Button position={"relative"} onClick={()=>(setToggleQuant(!toggleQuant))} rightIcon={<ChevronDownIcon/>}>{quantity}</Button>
          <Box display={toggleQuant? "visible" : "hidden"} textAlign={"center"}>
            <Box display={toggleQuant? "visible" : "none"} onClick = {handleQuantityChange} _hover={{background : "blue.300", color: "white"}}>2</Box>
            <Box display={toggleQuant? "visible" : "none"} onClick = {handleQuantityChange} _hover={{background : "blue.300", color: "white"}}>3</Box>
            <Box display={toggleQuant? "visible" : "none"} onClick = {handleQuantityChange} _hover={{background : "blue.300", color: "white"}}>4</Box>
            <Box display={toggleQuant? "visible" : "none"} onClick = {handleQuantityChange} _hover={{background : "blue.300", color: "white"}}>5</Box>
          </Box>
        </Box> */}
      {/* <Box border="1px solid" p={2} borderRadius = {"10px"}>
        <select placeholder="1" padding="15px">
          <option padding="15px" value={1}>
            1
          </option>
          <option padding="15px" value={2}>
            2
          </option>
          <option padding="15px" value={3}>
            3
          </option>
          <option padding="15px" value={4}>
            4
          </option>
          <option padding="15px" value={5}>
            5
          </option>
        </select>
        </Box> */}
    </Stack>
  );
};

export default CartItem;

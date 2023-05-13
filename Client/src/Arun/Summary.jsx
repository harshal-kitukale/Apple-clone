import {
  Box,
  HStack,
  Heading,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/layout";
import React from "react";
import {billDetailFunction,billDetail} from "../harshal/bill"
import { useSelector } from "react-redux";

  const Summary = () => {
  const { cart, isLoading } = useSelector((store) => store.cartReducer);
  billDetailFunction(cart.data || cart);
  return (
    <Box
      border={"1px solid gray"}
      borderRadius={"5px"}
      w={"100%"}
      p={"20px"}
      boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
    >
      <VStack>
        <Box borderBottom={"1px solid"}>
          <Heading size={"md"}>Your Order Total</Heading>
        </Box>

        <Stack width={"100%"}>
          <HStack
            justify={"space-between"}
            borderBottom={"1px solid black"}
            py={"20px"}
          >
            <Text fontWeight={"bold"}>{cart?.data?.length} items</Text>
            <Link _hover={{color: "red"}}>Edit Bag</Link>
          </HStack>
          <HStack justify={"space-between"}>
            <Text  m={"1px"}>Subtotal</Text>
            <Text>${billDetail.cart_total}</Text>
          </HStack>
          <HStack justify={"space-between"}>
            <Text m={"1px"}>Shipping</Text>
            <Text>Free</Text>
          </HStack>
          <HStack
            justify={"space-between"}
            borderBottom={"1px solid gray"}
            pb={"30px"}
          >
            <Text  m={"1px"}>Estimated Tax</Text>
            <Text>${billDetail.gst}</Text>
          </HStack>
          <HStack
            justify={"space-between"}
            borderBottom={"1px solid gray"}
            pb={"20px"}
          >
            <Text fontWeight={"bold"}  m={"1px"}>Total</Text>
            <Text fontWeight={"bold"}>${billDetail.total_amount}</Text>
          </HStack>
        </Stack>
      </VStack>
    </Box>
  );
};

export default Summary;

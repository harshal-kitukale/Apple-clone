import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import {ChevronDownIcon} from '@chakra-ui/icons'
import React from "react";

const CartItem = () => {
  return (
    <HStack>
      <Image
        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/49-cell-titanium-alpine-green-ultra?wid=800&hei=800&fmt=jpeg&qlt=90&fit=constrain&.v=1660787518131"
        w={"200px"}
      />
      <VStack alignItems={"flex-start"} w={"300px"}>
        <Heading size={"md"} textAlign={"left"}>
          Apple Watch Ultra GPS + Cellular, 49mm Titanium Case with Green Alpine
          Loop - Medium
        </Heading>
        <Text textAlign={"left"} fontSize={"xs"}>
          Pay 0% APR for 24 months.{" "}
        </Text>
      </VStack>
      <Box w={"50px"}>
        <Button rightIcon={<ChevronDownIcon/>}>1</Button>
      </Box>
    </HStack>
  );
};

export default CartItem;

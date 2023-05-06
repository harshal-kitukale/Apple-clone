import { Box, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import CartItem from '../Components/Arun/Checkout/CartItem'

const CartPage = () => {
  return (
    <Box w={"80%"} m={"auto"}>
        <VStack alignItems={"flex-start"} border={"1px solid black"} mb={"80px"}>
            <Heading fontFamily={"helvetica"}>Review your bag.</Heading>
            <Text fontSize={"md"}>Free delivery and free returns.</Text>
        </VStack>
        <HStack alignItems={"flex-start"} w={"80%"} m={"auto"}>
            <Image pt={1} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/applecard-logo-201910?wid=164&hei=164&fmt=jpeg&qlt=90&.v=1572631318807' w={"20px"}/>
            <Text textAlign={"left"} fontSize={'xs'}>Items not purchased with a one time payment may be eligible for $124.79/mo.per month at 0%* when you check out with Apple Card Monthly Installments. Learn more </Text>
        </HStack>
        <CartItem/>
    </Box>
  )
}

export default CartPage;
import { Box, HStack, Heading, Link, Stack, Text, VStack } from '@chakra-ui/layout'
import React from 'react'

const Summary = () => {
  return (
    <Box border={"1px solid gray"} borderRadius={"5px"} w={"100%"} p={"20px"} boxShadow= "rgb(38, 57, 77) 0px 20px 30px -10px">
        <VStack>
            <Box borderBottom={"1px solid"} >
            <Heading size={"md"}>Your Order Total</Heading>
            </Box>

            <Stack width={"100%"}>
                <HStack justify={"space-between"} borderBottom={"1px solid black"} py={"20px"}>
                <Text fontWeight={"bold"}>2 items</Text>
                <Link>Edit Bag</Link>
                </HStack>
                <HStack justify={"space-between"}>
                <Text>Subtotal</Text>
                <Text>$2,100</Text>
                </HStack>
                <HStack justify={"space-between"} >
                <Text>Shipping</Text>
                <Text>Free</Text>
                </HStack>
                <HStack justify={"space-between"} borderBottom={"1px solid gray"} pb={"30px"}>
                <Text>Estimated Tax</Text>
                <Text>$123</Text>
                </HStack>
                <HStack justify={"space-between"} borderBottom={"1px solid gray"} pb={"30px"}>
                <Text fontWeight={"bold"}>Total</Text>
                <Text fontWeight={"bold"}>$3,234</Text>
                </HStack>
            </Stack>
        </VStack>
    </Box>
  )
}

export default Summary
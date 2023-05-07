import { Box, HStack, Heading, Text, VStack } from '@chakra-ui/layout'
import React from 'react'
import Summary from './Summary'
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';

const Payment = () => {
    const [viewCard, setViewCard] = React.useState(false);

    const handleCardPayment = () => {
        setViewCard(!viewCard);
    }


    return (
    <Box w={"90%"} margin={"auto"}>
        <HStack borderBottom={"1px solid gray"} mb={"50px"}>
            <Heading size={"lg"} py={"20px"}>Checkout</Heading>
        </HStack>
        <Heading textAlign={"left"} >How do you want to pay?</Heading>
        <HStack py={"30px"}>
            <VStack w={"70%"} alignItems={"left"} border={"1px solid gray"}>
                <Box w={"300px"}  border={viewCard ? "3px solid #0099cc" : "1px solid"} borderRadius={"8px"} p={"15px"} onClick={handleCardPayment}>
                    <Heading textAlign={"left"} size={"md"} mb={"10px"}>Credit or Debit Card</Heading>
                    <Text textAlign={"left"}>Apple Card, Visa, Mastercard, AMEX, Discover, UnionPay</Text>
                </Box>
                <Box display={viewCard ? "block" : "none"}>
                    <Text my={"30px"} textAlign={"left"} fontSize={"20px"}>Enter your card information</Text>
                    <FormControl isRequired width={"60%"}>
                        <Box mb={"8px"}>
                        <FormLabel>Credit/Debit Card Number</FormLabel>
                        <Input placeholder='Enter 16 digit card number' type='text' maxLength={16}/>
                        </Box>
                        <HStack justifyContent="space-between">
                            <Box alignItems={"flex-start"}>
                                <FormLabel>Expiration MM/YY</FormLabel>
                                <Input placeholder="Month/Year" type='text' maxLength={5}  />
                            </Box>
                            <Box alignItems={"flex-start"}>
                                <FormLabel>Enter CVV</FormLabel>
                                <Input placeholder="CVV" type='text' maxLength={3} />
                            </Box>

          
          
        </HStack>
                    </FormControl>
                </Box>
            </VStack>
            <Box w={"30%"} position={"sticky"} top={"10"} alignSelf={"flex-start"}>
      <Summary/>
      </Box>
        </HStack>
    </Box>
  )
}

export default Payment
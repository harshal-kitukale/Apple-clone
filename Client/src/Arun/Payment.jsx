import { Box, HStack, Heading, Text, VStack, Link } from "@chakra-ui/layout";
import React from "react";
import Summary from "./Summary";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Select } from "@chakra-ui/select";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "../Abhishek/Navbar";
// import { Footer } from "../Abhishek/Footer";
import { useNavigate } from "react-router-dom";

const address = JSON.parse(localStorage.getItem("userAddress"));

const Payment = () => {
  const [viewCard, setViewCard] = React.useState(false);
  const [viewCod, setViewCod] = React.useState(false);
  const [viewNetBanking, setViewNetBanking] = React.useState(false);
  const [payStatus, setPayStatus] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
 const navigate=useNavigate()
  const dispatch = useDispatch();

  const data = useSelector((store) => console.log(store));

  const handleCardPayment = () => {
    setViewCard(!viewCard);
  };

  const handleCodPayment = () => {
    setViewCod(!viewCod);
  };

  const handleOnlinePayment = () => {
    setViewNetBanking(!viewNetBanking);
  };

  const handlePaymentModal = () => {
    setPayStatus(!payStatus);
    setTimeout(() => {
      onOpen();
    }, 3000);
  };

  const handlePaymentStatus = () => {
    setPayStatus(!payStatus);
    onClose();
  };

  console.log(address)

  return (
    <Box w={"90%"} margin={"auto"} pt={"40px"}>
      <Navbar />
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Congratulations</ModalHeader>
            <ModalCloseButton />
            <ModalBody textAlign={"center"}>
              <Heading size={"md"}>
                {viewCod ? "Order Placed Successfully" : "Payment Successful!"}
              </Heading>
              <Image
                m={"auto"}
                w={"300px"}
                src="https://cdn.dribbble.com/users/2185205/screenshots/7886140/02-lottie-tick-01-instant-2.gif"
              />
              <Text>Your Order will be delivered soon.</Text>
            </ModalBody>
            <HStack justifyContent={"flex-end"} p={"20px"}>
              <Button colorScheme="blue" mr={3} onClick={handlePaymentStatus}>
                Close
              </Button>
              {/* <Link to="/"> */}
              <Button variant="outline" onClick={()=>navigate("/")}>Continue Shopping</Button>
              {/* </Link> */}
            </HStack>
          </ModalContent>
        </Modal>
      </>
      <HStack borderBottom={"1px solid gray"} mb={"50px"}>
        <Heading size={"lg"} py={"20px"}>
          Checkout
        </Heading>
      </HStack>
      <Heading textAlign={"left"}>How do you want to pay?</Heading>
      <HStack
        py={"30px"}
        justifyContent={"space-between"}
        pb={"80px"}
        mb={"30px"}
        borderBottom={"1px solid gray"}
      >
        <VStack
          w={"60%"}
          alignItems={"left"}
          boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
          p={5}
          gap={5}
        >
          <VStack alignItems={"left"}>
            <Box
              w={"300px"}
              border={viewCard ? "3px solid #0099cc" : "1px solid"}
              boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
              borderRadius={"8px"}
              p={"15px"}
              onClick={handleCardPayment}
              _hover={{ cursor: "pointer" }}
            >
              <Heading textAlign={"left"} size={"md"} mb={"10px"}>
                Credit or Debit Card
              </Heading>
              <Text textAlign={"left"}>
                Apple Card, Visa, Mastercard, AMEX, Discover, UnionPay
              </Text>
            </Box>
            <HStack display={viewCard ? "flex" : "none"}>
              <Box width={"60%"}>
                <Text my={"30px"} textAlign={"left"} fontSize={"20px"}>
                  Enter your card information
                </Text>
                <FormControl isRequired>
                  <Box mb={"8px"}>
                    <FormLabel>Credit/Debit Card Number</FormLabel>
                    <Input
                      placeholder="Enter 16 digit card number"
                      type="text"
                      maxLength={16}
                    />
                  </Box>
                  <HStack justifyContent="space-between">
                    <Box alignItems={"flex-start"}>
                      <FormLabel>Expiration MM/YY</FormLabel>
                      <Input
                        placeholder="Month/Year"
                        type="text"
                        maxLength={5}
                      />
                    </Box>
                    <Box alignItems={"flex-start"}>
                      <FormLabel>Enter CVV</FormLabel>
                      <Input placeholder="CVV" type="password" maxLength={3} />
                    </Box>
                  </HStack>
                </FormControl>
              </Box>
              <Box width={"30%"} alignSelf={"flex-end"}>
                <Image src="https://thumbs.dreamstime.com/b/delhi-india-february-popular-credit-card-companies-logos-including-mastercard-visa-american-express-more-211749084.jpg" />
              </Box>
            </HStack>
            <Button
              display={viewCard ? "flex" : "none"}
              onClick={handlePaymentModal}
              colorScheme="blue"
              width={"70%"}      
              isLoading={payStatus}
              loadingText="Confirming Payment Status"
              spinnerPlacement='start'
            >
              Pay now
            </Button>
            
          </VStack>
          <VStack w={"100%"} alignItems={"left"}>
            <Box
              w={"300px"}
              border={viewNetBanking ? "3px solid #0099cc" : "1px solid"}
              boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
              borderRadius={"8px"}
              p={"15px"}
              onClick={handleOnlinePayment}
              _hover={{ cursor: "pointer" }}
            >
              <Heading textAlign={"left"} size={"md"} mb={"10px"}>
                Internet Banking
              </Heading>
              <Text textAlign={"left"}>Pay Using Internet Banking.</Text>
            </Box>
            <HStack display={viewNetBanking ? "flex" : "none"}>
              <Box width={"60%"}>
                <Text my={"30px"} textAlign={"left"} fontSize={"20px"}>
                  Select Your Bank Name
                </Text>
                <Select
                  name="country"
                  placeholder="Select Bank Name"
                  my={"15px"}
                >
                  <option value={"Alabama"}>AXIS Bank</option>
                  <option value={"Alaska"}>Allahbad Bank</option>
                  <option value={"Arizona"}>Bank of India</option>
                  <option value={"California"}>Canara Bank</option>
                  <option value={"Colorado"}>Central Bank of India</option>
                  <option value={"Connecticut"}>Federal Bank</option>
                  <option value={"Connecticut"}>HDFC Bank</option>
                  <option value={"Connecticut"}>ICICI Bank</option>
                  <option value={"Florida"}>Indian Bank</option>
                  <option value={"Georgia"}>Indusind Bank</option>
                  <option value={"Georgia"}>Kotak Bank</option>
                  <option value={"Illinois"}>Punjab National Bank</option>
                  <option value={"Kentucky"}>State Bank of India</option>
                  <option value={"Minnesota"}>State Bank of Patiala</option>
                  <option value={"New Jersey"}>Syndicate Bank</option>
                  <option value={"New Mexico"}>Union Bank of India</option>
                  <option value={"New York"}>Yes Bank</option>
                </Select>
              </Box>
            </HStack>
            <Button
              display={viewNetBanking ? "flex" : "none"}
              onClick={handlePaymentModal}
              colorScheme="blue"
              width={"70%"}
              isLoading={payStatus}
              loadingText={
                viewNetBanking ? "Placing Order" : "Confirming Payment"
              }
            >
              Place Order
            </Button>
          </VStack>
          <VStack w={"100%"} alignItems={"left"}>
            <Box
              w={"300px"}
              border={viewCod ? "3px solid #0099cc" : "1px solid"}
              boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
              borderRadius={"8px"}
              p={"15px"}
              onClick={handleCodPayment}
              _hover={{ cursor: "pointer" }}
            >
              <Heading textAlign={"left"} size={"md"} mb={"10px"}>
                Cash on Delivery/Pay on Delivery
              </Heading>
              <Text textAlign={"left"}>
                Scan and Pay using UPI, Cash, Cards also accepted.
              </Text>
            </Box>
            <VStack display={viewCod ? "block" : "none"} pt={"30px"}>
              <HStack justify={"space-between"}>
                <Box>
                    <Text my={"5px"}>Delivering to:</Text>
                    <Text m={"1px"} fontWeight={"bold"}>{`${address.fName} ${address.lName}`}</Text>
                    <Text m={"1px"}>{`${address.street}, ${address.state}`}</Text>
                    <Text m={"1px"}>{`${address.zip}, ${address.country}`}</Text>
                </Box>
                <Box>
                  <Link to="/checkout" _hover={{color: "red"}}>Change</Link>
                </Box>
              </HStack>
            </VStack>
            <Button
              display={viewCod ? "flex" : "none"}
              onClick={handlePaymentModal}
              colorScheme="blue"
              width={"70%"}
              isLoading={payStatus}
              loadingText={viewCod ? "Placing Order" : "Confirming Payment"}
            >
              Place Order
            </Button>
          </VStack>
        </VStack>

        <Box w={"30%"} position={"sticky"} top={"10"} alignSelf={"flex-start"}>
          <Summary />
        </Box>
      </HStack>
      {/* <Footer /> */}
    </Box>
  );
};

export default Payment;
